import Student from "../models/student.js"

//  export function getStudent(req, res){
//     Student.find().then(
//         (students)=>{
//             res.json(students)
//         }
//     ).catch(
//         ()=>{
//             res.json({
//                 message:"Failed to fetch students"
//             })
//         }
//     )
// }

export async function getStudent(req,res) {
    try{
        const students=await Student.find()
        res.json(students);
    }catch(error){
     res.status(500).json({
        meessage:"Failed to fetch students",
        error: error.message
     })
    }
}

export function postStudent(req, res){

    // console.log(req.user)
    //     console.log(req.body)
   
    if(req.user==null){
        res.status(403).json({
            message:"Please login to to create a student"
        })
        return
    }
    if(req.user.role !="admin"){
        res.status(403).json({
            message:"Please login as an admin to create a student"
        })
        return
    }
        const student=new Student(
            {
                name : req.body.name,
                age:req.body.age,
                email:req.body.email

                
            }
        )
        student.save().then(
            ()=>{
                 res.json({
        Message : "Student saved successfully"
    })
            }).catch(
                ()=>{
                console.log("Student failed to save data")
                }
            )
    
            }