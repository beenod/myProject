import { asyncHandler } from "../utils/asyncHandler.js";
import { user } from "../models/users.model.js";


const registerUser = asyncHandler(async(req,res)=>{

//get user details from frontend
const {fullname,email,username,password }= req.body
console.log(req.body)

//validation - not empty
if(
    [fullname,email,username,password].some((field)=>(field?.trim()==="")))
    {
 throw new Error(" All field is required")
}

//check if user already exists: username,email
const existedUser = await user.findOne({
    $or:[{username},{email}] // or 
} )
if(existedUser){
    console.log(existUser)
    throw new Error('user already exists')
}

//check for images,and avatar
// const avatarImageLocalPath =  req.files?.avatar[0]?.path; //avatar[0] first property
// console.log(req.file.coverImage)
// const coverImageLocalPath = req.files?.coverImage[0]?.path

// if(!avatarImageLocalPath) {
//     throw new Error("Avatar not found")
// }




// console.log(req.file,"hello file")
//upload them to cloudnary
//create user object - create entry in db
const existUser = await user.create({
    username:username.toLowercase(),email,password,fullname
})
//remove password and refresh token field form response

//check for user creation

const createdUser = await user.findById(user._id).select("-password")
if(!createdUser){
    throw new Error('something went wrong while registering user')
}
//return res


// console.log(req.params)


    res.status(200).json({message:"ok",users:req.body})
})
export default registerUser