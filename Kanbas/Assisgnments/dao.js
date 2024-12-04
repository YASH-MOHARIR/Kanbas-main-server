import model from "./model.js";

export async function findCourseAssignment(courseID) {
  const courseAssignments = await model.find({ course: courseID });
  return courseAssignments;
}

export async function findAssignmentByID(courseID, assignmentID) {
  const assignment = await model.findOne({
    _id: assignmentID,
    course: courseID,
  });
  return assignment;
}

export async function deleteAssignment(courseID, assignmentID) {
  const result = await model.deleteOne({
    _id: assignmentID,
    course: courseID,
  });
  return result; 
}

export async function createAssignmetn(newAssignment) {

  const createdAssignment = await model.create(newAssignment);
  return createdAssignment;
}

export async function updateAssignment(aid, newAssignment) {

  const updatedAssignment = await model.findByIdAndUpdate(
    aid, // Match the assignment by its ID
    newAssignment, // Update data
    { new: true } // Return the updated document
  );
  return updatedAssignment; 
}
