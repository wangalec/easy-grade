const fetch = (...args) =>
	import('node-fetch').then(({default: fetch}) => fetch(...args));

let api_token = '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'
const API_URL = "https://api-inference.huggingface.co/models/sentence-transformers/msmarco-distilbert-base-tas-b"
let headersIn = JSON.parse(JSON.stringify({'Content-Type': 'application/json', "Authorization": "Bearer " + api_token}))

async function query(payload){
    let response = await fetch(API_URL, payload);
    console.log(response);
    return response.json()
};

const inputData =
    {
    "inputs": {
        "source_sentence": "Here",
        "sentences": [
            "That is a happy dog",
            "That is a very happy person",
            "Today is a sunny day",
            "Bro shut the fuck pu. this shit. annoying as fuck. I don't wanna do this anymore. bruh. what. cringe.",
            "It's a beautiful day. I'm a happy guy. It's beautiful. No more seasonal depression. Give me a good score plesae."
            ]
        }
    };
const inputOptions ={
    method: 'POST',
    body: JSON.stringify(inputData),
    headers: headersIn,
    json: true
};

let results  = query(inputOptions);
results.then(function(result) {
    console.log(result)
})