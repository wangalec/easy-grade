import { checkAnswer } from '../../demo-server';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const data = req.body;
        const promise = await checkAnswer(data.input, data.answer).then(response => response.json())
            .then(data => {
                res.status(200).json(data);
        })
        console.log('gfdgfdgfd');
    }
  }