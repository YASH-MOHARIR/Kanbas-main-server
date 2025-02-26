import mongoose from "mongoose";
import schema from "./schema.js";

const model = mongoose.model("quizSchema", schema);
export default model;