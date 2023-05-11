//const { error } = require("console")
const express=require("express")
const routes=express.Router()
const Admin=require('../models/Admin')


routes.get('/get',async(req,res)=>{
    try{
    const items= await Admin.find();
   
    res.send(items);
    }
    catch(err){
        console.log(err)
    }
})

const details = {
    email:"kavinkumars.20cse@kongu.edu",
    password:"12345",
}
// routes.get('/post',async(req,res)=>{
//     try{
//         console.log("entered")
//         const list = await Admin.insertMany(details);
//         res.send(list);
//         console.log(list);
//     }catch(err) {
//         console.log('jhjh',err);
//     }
// })
// routes.post('/',async(req,res)=>{
//     console.log(req.body)
//     try{
//         console.log(req.body);
//         console.log("inserted");
//         const list=await School.insertMany(req.body);
//         res.send({list});
//     }catch(err){
//         return res.status(500).json({
//             msg:"Internal server error"
//         })
//     }
// })



  
module.exports=routes

// if (err) throw err;
  
// if (!user) {
//   res.status(401).send('Invalid username');
// } else {
//   // Check if password matches
//   if (password === user.password) {
//     // Set a cookie or JWT token to store authentication status
//     res.cookie('auth', 'true');
//     res.send('Login successful');
//   } else {
//     res.status(401).send('Invalid password');
//   }
// }
// });