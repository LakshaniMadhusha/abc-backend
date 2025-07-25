import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken"
import studentRouter from "./routers/studentRouter.js";
import userRouter from "./routers/userRouter.js";

const app=express();//run function

app.use(bodyParser.json());

app.use(
    (req,res,next)=>{
        const value=req.header("Authorization")
        if(value!=null){
        const token=value.replace("Bearer ","")
        jwt.verify(token,
        "cbc-6503",
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

const connectionString="mongodb://admin:123@ac-2fhe5gq-shard-00-00.8cibqm1.mongodb.net:27017,ac-2fhe5gq-shard-00-01.8cibqm1.mongodb.net:27017,ac-2fhe5gq-shard-00-02.8cibqm1.mongodb.net:27017/?ssl=true&replicaSet=atlas-3d7x22-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
    ()=>{
        console.log("Database Connected")
    }
).catch(
    ()=>{
        console.log("Failed to connected database")
    }
)


app.use("/students",studentRouter)
app.use("/users",userRouter)

app.listen(5000, ()=>{
    console.log("Server started");
})
