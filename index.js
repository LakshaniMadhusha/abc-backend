import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import userRouter from "./routers/userRouter.js";
import productRouter from "./routers/productRouter.js";
import dotenv from "dotenv"

dotenv.config();

const app=express();//run function

app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
        const value=req.header("Authorization")
        if(value!=null){
        const token=value.replace("Bearer ","")
        jwt.verify(token,
        process.env.JWT_SECRET,
        (err,decoded)=>{
             if(decoded==null){
                res.status(404).json({
                    message:"unauthorized"
                })
             }else{
                  req.user=decoded
                  next()
             }
               
             }
        )
    }else{
        next();
        }
    }
)

const connectionString=process.env.MONGO_URI

mongoose.connect(connectionString)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Failed to connect to database:", err.message);
  });




app.use("/users",userRouter)
app.use("/products",productRouter)

app.listen(5000, ()=>{
    console.log("Server started");
})


