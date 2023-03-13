import { addQuiz } from '../../server' 

export default function handler(req, res) {
  if (req.method === 'POST') {
    const testId = req.body.testId.toString();
    const questions = JSON.stringify(req.body.questions);

    console.log(questions);
    console.log('test id:' + testId);

    addQuiz(testId, questions)
    res.status(200);
  }
}