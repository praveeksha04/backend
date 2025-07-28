

const mongoose=require("mongoose");
const TaskSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
         versionKey:false
    },
    
})

module.exports=mongoose.model("tasks",TaskSchema)