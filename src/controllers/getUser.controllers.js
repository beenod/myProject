import mongoose from "mongoose"
import { user } from "../models/users.model.js"

const getUser = async (req,res)=>{

        const getuser = await user.find()
    console.log(getuser)
    res.send({hellouser:getuser})
}

export default getUser