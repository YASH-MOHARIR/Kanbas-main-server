import mongoose from "mongoose";
import schema from "./schema.js";
 
const model =  mongoose.model("quizAttempts", schema);

export default model;
