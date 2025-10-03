import mongoose from 'mongoose'


export default async function ConnectDb (){
    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")

    } catch (error) {
        console.log("Faild to connect with Database",error)
    }
}