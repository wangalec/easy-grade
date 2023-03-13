import { getQuiz } from "../../server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const testId = req.body.testId;

    await getQuiz(testId).then((data) => {
      res.status(200).json(eval(data.Items[0].questions.S));
    });
  }
}
