import * as quizAttemptDao from "./dao.js";

export default function quizAttemptsRoutes(app) {
  app.post("/api/quizes/:quizID/attempt/:userID/new", async (req, res) => {
    try {
      const newQuizAttempt = req.body;
      const { quizID, userID } = req.params;
      const quizes = await quizAttemptDao.createQuizAttempt(newQuizAttempt);
      res.send(quizes);
    } catch (e) {
      res.send(e);
    }
  });

  app.get("/api/quizes/:quizId/attempts/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const quizAttemptData = await quizAttemptDao.findQuizAttemptForUser(quizId, userId);
    res.send(quizAttemptData);
  });

  app.get("/api/quizes/attempts/all/:userId", async (req, res) => {
    const { userId } = req.params;
    const quizAttemptData = await quizAttemptDao.findAllQuizAttemptForUser( userId);
    res.send(quizAttemptData);
  });
}
