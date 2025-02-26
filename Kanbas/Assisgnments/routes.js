import * as   assignmentsDao from "./dao.js";
 
export default function AssignmentRoutes(app) {

    app.get("/api/assignments/:courseID",async (req,res) =>{
        const { courseID } = req.params;
        const assignments = await await assignmentsDao.findCourseAssignment(courseID);
        res.send(assignments);
    });

    app.get("/api/assignments/:courseID/:assignmentID",async  (req,res) =>{
        const { courseID , assignmentID } = req.params;
        const assignment = await await assignmentsDao.findAssignmentByID(courseID,assignmentID);
        res.send(assignment);
    });

    app.delete("/api/assignments/:courseID/:assignmentID",async (req,res) =>{
        const { courseID ,assignmentID} = req.params;
        const assignments = await assignmentsDao.deleteAssignment(courseID,assignmentID);
        res.send(assignments);
    });

    app.post("/api/assignments/new",async (req,res) =>{
        const newAssignment = req.body 
        const assignments = await assignmentsDao.createAssignmetn(newAssignment);
        res.send(assignments);
    });

    app.put("/api/assignments/update",async (req,res) =>{
        const assignment = req.body;
        const aid = assignment._id; 
        const assignments = await assignmentsDao.updateAssignment(aid,assignment);
        res.send(assignments);
    });

   
 

  }