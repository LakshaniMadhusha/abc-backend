import express from "express"
import Student from "../models/student.js"
import { getStudent } from "../controller/studentController.js"
import { postStudent } from "../controller/studentController.js"


const studentRouter=express.Router()

studentRouter.get("/",getStudent)

studentRouter.post("/",postStudent)

export default studentRouter;