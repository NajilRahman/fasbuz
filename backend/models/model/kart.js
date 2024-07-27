const mongoose=require('mongoose')
    const kartScema= new mongoose.Schema({
        email:{
            type:String,
            required:true
            
        },
        product_name:{
            type:String,
            required:true
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

    const kartModel=new mongoose.model('kert',kartScema);
module.exports=kartModel;