// import Database from "../Database/index.js";
import model from "./model.js";
import enrollmentsModel from "../Enrollments/model.js";


// 1. Find all courses
export function findAllCourses() {
  return model.find();
}

// 2. Find courses for an enrolled user
export async function findCoursesForEnrolledUser(userId) {
  const enrollments = await enrollmentsModel.find({ user: userId });
  const courseIds = enrollments.map((enrollment) => enrollment.course);
  return model.find({ _id: { $in: courseIds } });
}
export async function findCoursesForUser(userId) {
  const enrollments = await model.find({ user: userId }).populate("course");
  console.log("Users Courses", enrollments);
  return enrollments.map((enrollment) => enrollment.course);
}

// 3. Create a new course
export function createCourse(course) {
  delete course._id;
  return model.create(course); 
 }
 

// 4. Delete a course
export function deleteCourse(courseId) {
  return model.deleteOne({ _id: courseId });
 }
 

// 5. Update a course
export function updateCourse(courseId, courseUpdates) {
  return model.updateOne({ _id: courseId }, courseUpdates);
 }
 