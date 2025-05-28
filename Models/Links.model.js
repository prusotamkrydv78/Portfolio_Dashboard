import mongoose from "mongoose"

const LinksSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique:true
    },
    icon: {
        type: String,
        required: true
    }
})

export default mongoose.models?.Links || mongoose.model("Links", LinksSchema)