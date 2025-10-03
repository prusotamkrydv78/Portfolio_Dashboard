import mongoose from "mongoose";
const infoSchema = new mongoose.Schema({
    fullName:String,
    activeProjects:Number,
    completedProjects:Number,

})

const infoModel = new mongoose.model("info",infoSchema)
export default infoModel