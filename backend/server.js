 import express from 'express'
import ConnectDb from './connDb.js'
import dotenv from 'dotenv'
import projectRouter from './routes/project.route.js'
import blogRouter from './routes/blog.routes.js'
import infoRouter from './routes/info.route.js'
dotenv.config()
const PORT = process.env.PORT
ConnectDb()

 const app = express()
    
app.use('/',infoRouter)
app.use("/projects",projectRouter)
app.use("/blogs",blogRouter)

app.listen(PORT,()=>{
    console.log("YOUR server is running on port",PORT)
})