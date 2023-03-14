import axios from "axios";

export async function checkAnswer(input, answer) {
    const apiUrl = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b";
    const apiKey = "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";

    const payload = {
        "inputs": {
            "source_sentence": `${answer}`,
            "sentences": [
                `${input}`
            ]
        }
    }
    const promise = await fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload)
    })
    return promise;
}