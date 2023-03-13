import { getQuiz, submitQuiz } from '../../server';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const testId = req.body.testId;
        const responses = req.body.responses;
        console.log(responses);

        const apiKey = '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'; //change to secret
        const apiUrl = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b";

        const answers = [];
        const promise = await getQuiz(testId).then((data) => {
            const questions = eval(data.Items[0].questions.S);
            questions.forEach(item => {
                answers.push(item.answer);
            })
        })

        let formattedResponse = [];
        responses.forEach(element => {
            let i = 0;
            const payload = {
                "inputs": {
                    "source_sentence": answers[i],
                    "sentences": [
                        element,
                    ]
                }
            }
            console.log(payload);
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`,
                },
                body: JSON.stringify(payload)
            }).then((response) => response.json())
            .then((data) => {
                console.log(data);
                formattedResponse.push({
                    "answer": element.answer,
                    "score": data[0]
                }) 
            })
            i++;
        });

        const calculateScore = (scores) => {
            let tally = 0;
            scores.forEach(element => {
                if (element.score >= .85) {
                    tally++;
                }
            })
            return (tally / scores.length)
        }
        console.log(testId);
        console.log(formattedResponse);
        console.log(calculateScore(formattedResponse));
        submitQuiz(testId, formattedResponse, calculateScore(formattedResponse));
        res.status(200);
    }
  }