import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    salary: {
      type: String,
      required: true,
    },

    qulifaction: {
      type: String,
      required: true,
    },

    exprienceInYear: {
      type: Number,
      default: 0,
    },

    worksInHospital: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
  },

  { timeStamp: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);
