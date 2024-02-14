import { Router } from "express";
import registerUser from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import imageUpload from "../controllers/imageUpload.controllers.js";
import getUser from "../controllers/getUser.controllers.js";


const userRouter = Router()

userRouter.route('/user').get(getUser)

// userRouter.route('/register').get(registerUser)
userRouter.route('/register').post(registerUser)

//file and image upload routes
userRouter.route('/upload').post(
        upload.single('avatar' ), imageUpload)


export default userRouter