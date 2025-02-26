import mongoose from "mongoose";
const { Schema } = mongoose;

const attemptSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // Reference to the user
  quizId: { type: mongoose.Schema.Types.ObjectId, ref: "Quiz", required: true }, // Reference to the quiz
  totalScore: { type: Number, required: true }, // Total score of the attempt
  numberOfAttempts: { type: Number, required: true },
  answers: [
    {
      questionId: { type: Number, required: true }, // Reference to the question
      userAnswer: mongoose.Schema.Types.Mixed, // User's answer (can be string, number, or boolean)
      isCorrect: { type: Boolean, required: true }, // Whether the answer was correct
    },
  ],
  attemptDate: { type: Date, default: Date.now }, // Date and time of the attempt
});

export default attemptSchema;
