const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const regmodel = require('./models/model/registerschema');
const productModel = require('./models/model/categories');
const multer = require('multer');
const cloudinary = require('./cloudinary');
require('./models/connection');
require('./models/model/registerschema');
require('./models/model/categories');
const kartmodel=require('./models/model/kart');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors());

app.post('/user', async (req, res) => {
    try {
        const data = req.body;
        await regmodel.create({
            name: data.name,
            phone: data.phone,
            email: data.email,
            dob: data.dob,
            password: data.pass,
            state: data.state,
            zip: data.zip,
        });
        res.json('user registered');
    } catch (err) {
        res.status(400).json(err);
    }
});

app.post('/userlogin', async (req, res) => {
    try {
        const data = req.body;
        console.log(data);
        const result = await regmodel.find({ email: data.email });
        res.json(result);
        console.log(result);
    } catch (err) {
        res.json('finding unsuccessful');
    }
});

app.patch('/updateProfileData', async (req, res) => {
    console.log('data reached');
    try {
        const data = req.body;
        const imgcatch = await cloudinary.uploader.upload(data.profilepic, { folder: 'profile' });
        const result = await regmodel.findOneAndUpdate(
            { email: data.email },
            {
                $set: {
                    name: data.name,
                    password: data.pass,
                    dob: data.dob,
                    email: data.email,
                    phone: data.phone,
                    state: data.state,
                    zip: data.zip,
                    profilepic: imgcatch.secure_url // Use imgcatch.secure_url for the image URL
                }
            },
            { new: true }
        );
        console.log(imgcatch.secure_url);
        console.log(result);
        res.json(result);
    } catch (err) {
        res.status(500).json({ error: err.message }); // Send error response
    }
});

app.post('/categories', async (req, res) => {
    try {
        if(req.body.param){
        const result = await productModel.find({ category: req.body.category,product_name:req.body.param});
        console.log(req.body.param)
        console.log(req.params)
        res.json(result);
        }
        else{
            const result = await productModel.find({ category: req.body.category});
        console.log(req.body.param)
        res.json(result);
        }
    } catch (err) {
        console.log(err);
    }
});

app.post('/search', async (req, res) => {
    try {
        const data = req.body.search;
        console.log(data);
        const regex = new RegExp(data, 'i');
        const result = await productModel.find({ product_name: regex });
        res.json(result);
        console.log(result);
    } catch (err) {
        res.json(err);
    }
});

app.post('/setkart', async (req, res) => {
    const data = req.body;
    try {
        const newKartItem = await kartmodel.create({
            product_name: data.product_name,
            product_image: data.product_image,
            product_rate: data.product_rate,
            category: data.category,
            email: data.email
        });
        res.status(201).json(newKartItem); // Return the newly created kart item
    } catch (error) {
        console.error("Error creating kart item:", error);
        res.status(500).json({ error: "Internal Server Error" }); // Return an error response
    }
});

app.post('/userkart', async (req, res) => {
    const data = req.body;
    kartmodel.find({email:data.email})
    .then(result=>{
        res.json(result)
})
.catch(err=>{
    res.status(401)
});
});

app.post('/removekartitem',(req,res)=>{
    const data = req.body;
    kartmodel.findOneAndDelete({email:data.email,product_name:data.product_name})
    .then(result=>{
        res.json(result+'removed seccesfully')
})
.catch(err=>{
    res.status(401)
});
    
});

app.listen(8000, '127.0.0.1');
