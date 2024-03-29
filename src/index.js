import connectDB from "./db/index.js"
import { app } from "./app.js"

import dotenv from "dotenv"

dotenv.config({
    path:'./env'
})

const PORT = process.env.PORT || 3000


connectDB()
.then(()=>{
    app.listen(process.env.PORT) || 3000,()=>{
        console.log(`Server is running at port : ${process.env.PORT}`)
    }
})
.catch((err)=>{
    console.log("MONGO db connectio failed",err)
})

const createHelloworld = function(){
    return function(){
        console.log('hellow world')
    }()
}()