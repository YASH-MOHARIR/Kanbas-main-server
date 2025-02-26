import mongoose from "mongoose";

const { Schema } = mongoose;

// Question Schema
const questionSchema = new Schema({
  id: { type: Number, required: true },
  type: { type: String, enum: ["Multiple Choice", "True/False", "Fill in the Blank"], required: true },
  title: { type: String, required: true },
  points: { type: Number, required: true },
  text: { type: String, required: true },
  choices: { type: [String], default: [] }, // Array of strings for choices (empty by default)
  correctAnswer: {
    type: Schema.Types.Mixed, // Can be a number (index), boolean, or array of strings
    required: true,
  },
  isEditing: { type: Boolean, default: false }, // Default isEditing to false
});

// Quiz Schema
const quizSchema = new Schema({
  course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" }, // "RS101"
  title: { type: String, required: true },
  description: { type: String, default: "No description" },
  published: { type: Boolean, default: false, required: true },
  quizType: {
    type: String,
    enum: ["Graded Quiz", "Practice Quiz", "Graded Survey", "Ungraded Survey"],
    default: "Graded Quiz",
  },
  points: { type: Number, default: 100 },
  assignmentGroup: { type: String, default: "Quizzes" },
  shuffleAnswers: { type: Boolean, default: true },
  timeLimit: { type: Number, default: 20 }, // Time limit in minutes
  numberOfAttempts: { type: Number, default: 1 }, 
  multipleAttempts: { type: Boolean, default: false },
  showCorrectAnswers: { type: Boolean, default: false },
  accessCode: { type: String, default: "" },
  oneQuestionAtATime: { type: Boolean, default: true },
  webcamRequired: { type: Boolean, default: false },
  lockQuestionsAfterAnswering: { type: Boolean, default: false },
  dueDate: { type: Date, default: null }, // Store dates as Date objects
  availableFrom: { type: Date, default: null },
  untilDate: { type: Date, default: null },
  questionData: { type: [questionSchema], default: [] }, // Embed questionSchema as an array
});

export default quizSchema;
