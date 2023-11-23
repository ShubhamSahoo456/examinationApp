const mongoose = require("mongoose");

const { Schema } = mongoose;

const studentSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      min: 3,
      max: 20,
      unique: true,
    },
    fullName: {
      type: String,
    },
    role: {
      type: String,
      enum: ["admin", "subAdmin", "student"],
    },
    fathersName: {
      type: String,
    },
    admissionNumber: {
      type: Number,
    },
    dob: {
      type: Date,
    },
    classId: {
      type: Schema.Types.ObjectId,
      ref: "class",
    },
    sectionId: {
      type: Schema.Types.ObjectId,
      ref: "section",
    },
    password: {
      type: String,
      required: true,
    },
    contactNumber: {
      type: Number,
    },
    schoolName: {
      type: String,
      required: true,
    },
    schoolType: {
      type: String,
      enum: ["government", "private"],
    },
    website: {
      type: String,
    },
    schoolNumber: {
      type: Number,
    },
    email: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
    },
    logo: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", studentSchema);

module.exports = userModel;
