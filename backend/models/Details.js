const mongoose=require("mongoose")

const SchoolSchema=new mongoose.Schema({
    name:String,
    fathername:String,
    mothername:String,
    dob:String,
    datemonth :String,
     dob_year :String,
    mobile :Number,
    gender :String,
    bloodgroup :String,
    nationalid :String,
    email:String,
    presentaddress:String, 
    permanentaddress :String
})


const school =mongoose.model('Products',SchoolSchema)
module.exports = school;