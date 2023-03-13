import AnswerBox from "@/components/AnswerBox.component";
import axios from 'axios'
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

export default function TakeQuiz(props: any){

  const router = useRouter()

  const[answers, setAnswers] = useState<string[]>([]);
  const[index, setIndex] = useState(0);
  const[name, setName] = useState("");
  const[questions, setQuestions] = useState<any>([]);

  const testId = "313133";

  useEffect(() => {
    console.log(testId);
    axios.post("/api/load-quiz", { testId: testId }).then(response => {
      console.log(response.data[index].question)
      setQuestions(response.data)
    })
  }, [])

  const questions_length = questions.length;

  const addAnswers = (answer : string) => {
    setIndex(index + 1);
    let newAnswers = [...answers, answer];
    setAnswers(newAnswers);
  }

  const nameChange = (event: any) => {
    setName(event.target.value);
  }

  const submit = () => {
    axios.post("/api/submit-quiz", { 
      testId: testId,
      name: name,
      responses: answers
    })
  }

  return(
    <div>
      {(
        index == 0 ? 
        <>
          <h2> Name </h2>
          <input
            value = {name}
            onChange = {nameChange}
          />
        </>
        :
        <></>
      )}
      {(
        questions[0] != undefined ?
          <>
            <AnswerBox
            question = {questions[index].question}
            index = {index}
            questions_length = {questions_length}
            addAnswers = {addAnswers}
          />
        </>
        :
        <>
        <div>Loading...</div>
        </> 
      )}
      {(index == questions_length - 1 ? 
        <button onClick = {submit}> Submit </button> : <></>
      )}
    </div>
  )
}