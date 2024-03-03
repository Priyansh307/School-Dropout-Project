import express  from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
dotenv.config()
import { SchoolRouter } from "./routes/user.js"
import cors from "cors"
const app = express()

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173"],
    credentials:true
}))
app.use(cookieParser())
app.use('/auth',SchoolRouter)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')
app.listen(process.env.PORT,() =>{
    console.log("server is running")
})