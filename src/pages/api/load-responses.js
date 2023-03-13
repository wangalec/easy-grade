import {getResponses} from '../../server.js'

export default function handler(req, res){
    if (req.method === 'POST'){

        const testId = req.body.testId;
        
        const responses = getResponses(testId);
        res.status(200).json(responses);
    }
}