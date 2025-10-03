import mongoose, {Schema}from "mongoose";

const blogSchema = new Schema ({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }  ,
  content:{
    type:String,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  status:{
    type:String,
    required:true,
    default:"draft",
    enum:['draft',"published","archived"]
  },
  coverImage:{
    type:String,
    required:true
  },
  tags:[{
    type:String,
    required:true
  }]
})
const blogModel = mongoose.models.blog || new mongoose.model("blog",blogSchema)
export default blogModel;

