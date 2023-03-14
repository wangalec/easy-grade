import { checkAnswer } from '../../demo-server';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body.questions
        const promise = await checkAnswer(data.question, data.answer).then((data) => {
            console.log(data);
        })
    }
  }