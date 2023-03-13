import axios from "axios"
import { useEffect, useState } from "react"


interface studentResponse{
    question: string,
    answer: string,
    similarity: number
}

export default function QuizOverview(){
    
    const results: {responses: studentResponse[], score: number, name: string}[] = 
    [
        {
            "responses": 
            [{
                "question": "q1",
                "answer": "a1",
                "similarity": .56
            }], 
            "score": 69,
            "name": "n1"
        },
    ]

    // const testIds : any = useEffect(() => {
    //     axios.post("/api/load-ids")
    // }, [])
    const testIds = ["123456", "458788", "458789"];
    const [currTestId, setCurrTestId] = useState(testIds[0]);

    // const responses : any = useEffect(() => {
    //     axios.post("/api/load-responses", {testId: testIds[index] })
    // }, [])

    const testIdsList = testIds.map((id : string) => (
        <li>
            <button onClick={() => setCurrTestId(id)}> ID: {id} </button>
        </li>
    ))

    // const responsesList = responses.map((response : any) => (
    //     <li>
    //         <h2> Name: {response.name} </h2>
    //         <h2> Score: {response.score} </h2>
    //     </li>
    // ))

    const resultsList = results.map((result) => (
        <li>
            <h2> Name: {result.name} </h2>
            <h2> Score: {result.score} </h2>
        </li>
    ))

    return(
        <div>  
            <ul>
                {testIdsList}
            </ul>
            <h2> Current ID: {currTestId}</h2>
            <ul>
                {resultsList}
            </ul>
        </div>
    )

}


