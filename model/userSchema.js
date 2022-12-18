const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        possibleValues: ['male','female','other'],
        required:true
    },
    dob:{
        type:Date,
        required:true,
        trim:true
    },
    preference:{
        type:String,
        possibleValues: ['6-7 AM','7-8 AM','8-9 AM','5-6 PM'],
        required:true
    }

})

const User=mongoose.model('USERS',userSchema);

module.exports=User;