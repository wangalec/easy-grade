import { useState, useEffect } from "react";
import axios from 'axios';

import CreateQuestion from "@/components/CreateQuestion.component";
import SavedQuestion from "@/components/SavedQuestion.component";

interface IQuestion{
  question: string,
  answer: string
}

export default function CreateQuiz(props: any){

  const testId = Math.floor(Math.random() * (999999 - 111111) + 111111);

  const[questions, setQuestions] = useState<IQuestion[]>([]);

  const addQuestion = (question : string, answer: string) => {
    const newQuestion : {question: string, answer: string} = {question, answer};
    const newQuestions : {question: string, answer: string}[] = [...questions, newQuestion];
    setQuestions(newQuestions);
    console.log(questions)
  }

  const submit = () => {
    axios.post("/api/build-quiz", { testId: testId, questions: questions })
  }

  const questionsList = questions.map((question) => 
    <>
      <li>
        <SavedQuestion
          question = {question.question}
          answer = {question.answer}
        />
      </li>
    </>
  )

  return(
    <div>
      <div>
      <ul>
        {questionsList}
      </ul>
      </div>
      <CreateQuestion
        addQuestion = {addQuestion}
      />     
      <button onClick={submit}> Create Quiz </button>
    </div>
  )
}