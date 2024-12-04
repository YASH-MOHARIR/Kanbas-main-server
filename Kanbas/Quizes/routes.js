import * as quizesDao from "./dao.js";

export default function quizRoutes(app) {
  app.post("/api/quizes/:courseID/new", async (req, res) => {
    try{

        const newQuiz = req.body;
        const { courseID } = req.params;
        const quizes = await quizesDao.createQuiz({...newQuiz,course:courseID});
        res.send(quizes);
    }catch(e){
        res.send(e);
    }
  });

  app.get("/api/quizes/:courseID",async  (req,res) =>{
      const { courseID } = req.params;
      const quizes = await  quizesDao.findQuizesInCourse(courseID);
      res.send(quizes);
  });

  app.get("/api/quizes/:courseID/:quizId",async  (req,res) =>{
    const { courseID , quizId } = req.params;
      const quize = await  quizesDao.findQuizById(courseID,quizId);
      res.send(quize);
  });

  //delete quiz
  app.delete("/api/quizes/:courseID/:quizID",async (req,res) =>{
      const { courseID ,quizID} = req.params;
      const quiz = await quizesDao.deleteQuiz(courseID,quizID);
      res.send(quiz);
  });


//update quiz
  app.put("/api/quizes/update",async (req,res) =>{
      const updatedQuiz = req.body;
      const qid = updatedQuiz._id;
      const quiz = await quizesDao.updateAssignment(qid,updatedQuiz);
      res.send(quiz);
  });
}
