const mongoose=require('mongoose')
    const productScema= new mongoose.Schema({
        obj_id:{
            type:Number,
            required:true,
            unique:true
        },
        product_name:{
            type:String,
            required:true,
        },
        product_image:{
            type:String,
            required:true
        },
        product_rate:{
            type:Number,
            required:true
        },
        category:{
            type:String,
            required:true
        }
    });

    const productModel=new mongoose.model('product',productScema);
module.exports=productModel;