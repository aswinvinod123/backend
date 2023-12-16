const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://aswinvinod:aswin8702@cluster0.65krr6s.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{console.log("DB CONNECTED")})
.catch(err=>console.log(err));


// const studentschema=new mongoose.Schema({
//     Admno:Number,
//     Name:String,
//     Age:Number,
//     Course:String
    
// });
let sc=mongoose.Schema;
const studentschema=new sc({
        Admno:Number,
        Name:String,
        Age:Number,
        Course:String,
        image1:{
            data:Buffer,
            contentType:String
        }
    });

var studentmodel=mongoose.model("studentdetails",studentschema)
module.exports=studentmodel;

