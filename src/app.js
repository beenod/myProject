import express from 'express'
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(express.json({limit:"16kb"})) //this is for accepting the request from body like form data

app.use(express.urlencoded({extended:true,limit:"16kb"})) // user accepting the request form the url 

app.use(express.static("public")) // accepts to store static file,images,html files 

app.use(cookieParser())

//routes import
import userRouter from './router/user.routes.js'

//routes declarations
app.use('/api/v1/users', userRouter) // http://localhost:3000/api/v1/users/register

// app.use('/api/v1/users')




export { app}