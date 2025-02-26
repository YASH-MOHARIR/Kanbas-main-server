import mongoose from "mongoose";
import model from "./model.js";

//create
export async function createQuiz(newQuiz) {
  const createdQuiz = await model.create(newQuiz);
  return createdQuiz;
}

//   find all
export async function findQuizesInCourse(courseID) {
  const courseQuizes = await model.find({ course: new mongoose.Types.ObjectId(courseID) });
  return courseQuizes;
}

// find 1 quiz by Id
export async function findQuizById(courseId, quizId) {

    const quiz = await model.findOne({
      course: courseId,
      _id: quizId,
    });
    return quiz;

}

// Update

export async function updateQuiz(qid, updatedQuiz) {
  const updatedAssignment = await model.findByIdAndUpdate(
    qid, // Match the assignment by its ID
    updatedQuiz, // Update data
    { new: true } // Return the updated document
  );
  return updatedAssignment;
}

// delete quiz

export async function deleteQuiz(courseID, quizID) {
  const result = await model.deleteOne({
    _id: quizID,
    course: courseID,
  });
  return result;
}
