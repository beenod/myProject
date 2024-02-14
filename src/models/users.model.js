import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname:{
        required:true,
        type:String
    },
    email:{
        required:true,
        type:String
    },
    username:{
        required:true,
        type:String

    },
    password:{
        required:true,
        type:String
    }
})

export const user = mongoose.model('User', userSchema)
