import mongoose from "mongoose";

const assignmentsSchema = new mongoose.Schema(
  { 
    title: { type: String, required: true }, // Only required field
    course:{ type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" }, // "RS101"
    module: { type: String }, // "Module 1"
    availableDate: { type: Date }, // "2024-10-20T00:00"
    dueDate: { type: Date }, // "2024-10-30T23:59"
    link: { type: String }, // "#/Kanbas/Courses/RS101/Assignments/A101"
    description: { type: String }, // Description of the assignment
    points: { type: Number }, // 100
    assignmentGroup: { type: String }, // "Assignments"
    showGradesAs: { type: String }, // "Percentage"
    // submissionType: { type: SubmissionTypeSchema }, // Nested schema
    assignedTo: { type: String }, // "Everyone"
    availableFrom: { type: Date }, // "2024-10-20T00:00"
    availableUntil: { type: Date }, // "2024-10-30T23:59"
  },
  { collection: "assignments" } // Optional: Explicit collection name
);

export default assignmentsSchema;