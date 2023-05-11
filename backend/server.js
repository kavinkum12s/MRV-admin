const express=require('express')
const app=express();
const mongoose=require('mongoose')
const dotenv=require("dotenv")
const bodyParser = require("body-parser");
const cors=require("cors")
app.use(express.urlencoded({extended:true}));
app.use(bodyParser.json())

dotenv.config()
app.use(cors())
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    console.log("Db connected")
})

app.use('/school',require("./routes/AdminRoutes.js"))
app.use('/api/school',require("./routes/DetailsRoutes.js"))
app.listen(4000,()=>{
    console.log("connected")
})


