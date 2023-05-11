const express = require("express");
const routes=express.Router()
const school=require('../models/Details')

routes.get('/details/get',async(req,res)=>{
    try {
        const items= await school.find();
   
         res.send(items);
    }catch(err) {
        
    }
})
routes.delete('/delete/:id',async(req,res)=>{
    try {
        const data  = await school.findById(req.params.id);
        if(data) {
            await school.findByIdAndDelete(req.params.id);
            console.log('deleted')
        }
    }catch(err) {
        console.log(err);
    }
});

routes.get('/search/:id', async(req, res) => {
    const id = req.params._id;
    // Check if user exists in database
    try {
        const list = await school.findById(req.params.id);
        res.send(list);
        console.log(list);
    }
catch(err) {
    console.log(err);
}
});
module.exports=routes