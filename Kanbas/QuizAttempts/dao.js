import model from "./model.js";

// //create
export async function createQuizAttempt(newQuizAttempt) {
  try {
    // Validate input
    if (!newQuizAttempt.userId || !newQuizAttempt.quizId) {
      throw new Error("Both userId and quizId are required and must not be null.");
    }

    // Define query and update payload
    const query = {
      userId: newQuizAttempt.userId,
      quizId: newQuizAttempt.quizId,
    };

    const update = {
      $set: {
        totalScore: newQuizAttempt.totalScore,
        maxScore: newQuizAttempt.maxScore,
        answers: newQuizAttempt.answers,
        attemptDate: new Date(),
      },
      $inc: { numberOfAttempts: 1 }, // Increment attempts if the document exists
    };

    const options = {
      upsert: true, // Create if not exists
      new: true, // Return the updated document
    };

    // Perform the upsert operation
    const updatedQuizAttempt = await model.findOneAndUpdate(query, update, options);

    return updatedQuizAttempt;
  } catch (error) {
    console.error("Error creating or updating quiz attempt:", error.message);
    throw error;
  }
}

// find 1 quiz by Id
export async function findQuizAttemptForUser(quizId, userId) {
  const quizAttemptData = await model.findOne({ quizId, userId });
  return quizAttemptData;
}
export async function findAllQuizAttemptForUser( userId) {
  const quizAttemptData = await model.find({ userId });
  return quizAttemptData;
}

// //   find all
// export async function findQuizesInCourse(courseID) {
//   const courseQuizes = await model.find({ course: new mongoose.Types.ObjectId(courseID) });
//   return courseQuizes;
// }

// // Update

// export async function updateAssignment(qid, updatedQuiz) {
//   const updatedAssignment = await model.findByIdAndUpdate(
//     qid, // Match the assignment by its ID
//     updatedQuiz, // Update data
//     { new: true } // Return the updated document
//   );
//   return updatedAssignment;
// }
