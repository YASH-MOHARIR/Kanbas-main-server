import mongoose from "mongoose";
import schema from "./schema.js";
const model = mongoose.model("assignmentsSchema", schema);
export default model;