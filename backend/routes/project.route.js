import express from 'express'
import ProjectModel from '../models/Project.model.js'

const projectRouter = express.Router()

projectRouter.get("/",async (req,res)=>{
    try {
        const projects = await ProjectModel.find()
        res.status(200).json({
            sucess:true,
            data:projects,
            message:"Projects retrived sucessfully"
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            sucess:false,
            error,
            message:error.message
        })
    }
    
})

export default projectRouter;