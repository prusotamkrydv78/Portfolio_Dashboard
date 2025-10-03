import mongoose,{Schema} from "mongoose";

const imageSchema = new Schema({
    imageLink:{
        type:String,
        required:true
    },
    providerId:{
        type:String,
        required:true
    }
}

)
const imageModel = mongoose.models.images || new mongoose.model("images",imageSchema)
export default imageModel;