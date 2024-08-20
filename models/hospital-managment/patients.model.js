import mongoose from "mongoose"


const patientSchema = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },

    diagnoseWith : {
        type: String,
        required: true,
    },

    address: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true,
    },

    bloodGroup: {
        type: String,
        required: true,
        enum: ["M", "F", "O"],

    },

    addmittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }



} , {timeStamp: true})


export const  Patinet  = mongoose.model("Patinet ", patientSchema)