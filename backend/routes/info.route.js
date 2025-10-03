 import express from 'express'
import infoModel from '../models/Info.model.js';
 const infoRouter = express.Router()

infoRouter.get('/',async(req,res)=>{
    try {
        const info = await infoModel.find()
        res.status(200).json({
            sucess:true,
            
        })
    } catch (error) {
        
    }
    
})






 export default infoRouter;