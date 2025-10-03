import dotenv from 'dotenv'
dotenv.config()
 import express from 'express'
import ConnectDb from './connDb.js'
import projectRouter from './routes/project.route.js'
import blogRouter from './routes/blog.routes.js'
import infoRouter from './routes/info.route.js'
import imageUploadRouter from './routes/imageUpload.route.js'
const PORT = process.env.PORT
ConnectDb()

 const app = express()
    
app.use('/',infoRouter)
app.use("/projects",projectRouter)
app.use("/blogs",blogRouter)
app.use("/imageUpload",imageUploadRouter)
app.listen(PORT,()=>{
    console.log("YOUR server is running on port",PORT)
})