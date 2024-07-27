const mongoose=require('mongoose');

const regschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:Number,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    profilepic:{
        type:String,
    }
})

const regmodel=new mongoose.model('reg',regschema);

module.exports= regmodel;