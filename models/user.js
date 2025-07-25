import mongoose from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName : {
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
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
    phone:{
        type:String,
        default:"NOT GIVEN"
    },
    isBlocked:{
        type:Boolean,
        default:false
    },
    role:{
        type:String,
        default:"user"
    },
    isEmailVarified:{
        type:Boolean,
        default:false
    },
    image:{
        type:String,
        default:"https://www.seekpng.com/png/detail/899-8992523_user-png.png"
    }
})

const User=mongoose.model("users",userSchema)

export default User;