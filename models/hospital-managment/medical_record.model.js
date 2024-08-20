import mongoose from "mongoose"


const hospitalSchema = new mongoose.Schema({

} , {timeStamp: true})


export const Hospital = mongoose.model("Hospital", hospitalSchema)