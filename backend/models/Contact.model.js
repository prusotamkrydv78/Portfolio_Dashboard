import mongoose,{Schema} from "mongoose";

const contactSchema = new Schema({
    email:{
        type:String,
        required:true,
        toLowerCase:true,
    }
    ,
    phone:{
        type:Number,
        required:true,
        min:10
    },
    location:{
        type:String,
        required:true
    },
    socialLinks:[
        {
            icon:String,
            title:String,
            link:String
        }
    ]
})

const contactModel = mongoose.models.contactInfos || new mongoose.model("contactInfos",contactSchema)

export default contactModel