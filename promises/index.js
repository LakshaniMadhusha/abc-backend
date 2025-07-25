// const student={
//     name:"John",
//     // //parent:{
//     //   //  name:"jae",
//     //   //  age:40
//     // //}
// }
// console.log("program startd")

// try{
//     console.log(student.parent.name)
// }catch{
//     console.log("Error occured while printing parent name!")
// }

// console.log("Program end")


// 2

function getDataFromDatabase(password){
   const promise=new Promise(
    (resolve,reject)=>{
       setTimeout(()=>{
        if(password=="123"){
            resolve(
                [
                    {id:1, name:"madhusha lakshani"},
                    {id:2, name:"jame smith"},
                    {id:3, name:"alice jahnathon"}
                ]
            )
        }else{
            reject("Invalid password")
        }
       },3000)
    }
   )

   return promise;
}

console.log("Starting the program")

// getDataFromDatabase("123").then(
//  (response)=>{
//    console.log(response)
//  }
// ).catch(
//     (error)=>{
//        console.log(error)
//     }
// )
try{
const result=await getDataFromDatabase("123");
console.log(result)
}catch(error){
console.log("program occuerd:"+error)
}

async function processData() {
    const res=await getDataFromDatabase("123");
}
console.log("Program fiished")
// const isConnectionOkay=true

// console.log("Starting program")

// const promise=new Promise(
//     (resolve,reject)=>{
//          setTimeout(
//         ()=>{
//             if(isConnectionOkay){

            
//             console.log("data fetched Successfully");

//             console.log([
//                 {id:1, name:"madhusha lakshani"},
//                 {id:1, name:"jame smith"},
//                 {id:1, name:"alice jahnathon"},

//             ])
//             resolve([
//                 {id:1, name:"john"},
//                 {id:2, name:"johnathan"},
//                 {id:3, name:"johnthin"},

//             ])
//         }else{
//             console.log("Error fetching data");
//             reject("connection fauilure")
//         }
//         }, 2000);
//     }
// )
// promise.then((response)=>{
//     console.log(response)
//     console.log("Connection is okay, processing with the programme....")
// }).catch((e)=>{
//     console.log(e)
//     console.log("connection failed, terminating the program")
// }).finally(()=>{
//     console.log("Ending the program...")
// })

