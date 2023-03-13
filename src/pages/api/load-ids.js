import {getTestIds} from '../../server'

export default function handler(req, res){
    if (req.method === 'POST'){
        const testIds = getTestIds();
        res.status(200).json(testIds);
    }
}