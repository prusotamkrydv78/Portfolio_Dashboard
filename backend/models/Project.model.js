import mongoose,{Schema} from "mongoose";

const projectSchema = new Schema ({
    title:{
        type:String,
        required:true
    },
    description:{
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
        enum:["inProgress","completed","planned"]
    },
    projectImage:{
        type:String,required:true
     },
     demoUrl:{
        type:String,
        required:true
     },
     githubUrl:{
        type:String,
        required:true
     },
     tags:[{
        type:String,
        required:true
     }]
})

const ProjectModel = mongoose.models.projects || new mongoose.model("projects",projectSchema)

export default ProjectModel;

