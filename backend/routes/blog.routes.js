import express from 'express'
import blogModel from '../models/Blog.model.js'

const blogRouter = express.Router()

blogRouter.get("/",async (req,res)=>{
    try {
        const blogs = await blogModel.find()
        res.status(200).json({
            sucess:true,
            data:blogs,
            message:"Blogs retrived sucessfully"
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

export default blogRouter;