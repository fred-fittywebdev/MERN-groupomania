import mongoose from "mongoose";
import validator from 'validator'

const { ObjectId } = mongoose.Schema
const isEmail = validator.isEmail

const userSchema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, trim: true, validate: [isEmail] },
  password: { type: String, required: true },
  id: { type: String },
  role: {
    type: String,
    default: "membre",
  }
});

export default mongoose.model("User", userSchema);