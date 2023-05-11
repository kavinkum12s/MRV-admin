const mongoose=require("mongoose")

const SchoolSchema=new mongoose.Schema({
    email:String,
    password:String,
})


const Admin =mongoose.model('Admin',SchoolSchema)
module.exports = Admin;