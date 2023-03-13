import { useState } from "react"

export default function CreateQuestion(props: any){

  const[questionValue, setQuestionValue] = useState("");
  const[answerValue, setAnswerValue] = useState("");

  const handleChangeQuestion = (event: any) => {
    setQuestionValue(event.target.value);
  }

  const handleChangeAnswer = (event: any) => {
    setAnswerValue(event.target.value)
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.addQuestion(questionValue, answerValue);
    setQuestionValue("");
    setAnswerValue("");
  }
  
  return(
    <form onSubmit={handleSubmit}>
      <div>
      <h2> Question </h2>
      <textarea
        value = {questionValue}
        onChange={handleChangeQuestion}
      />
      <h2> Answer </h2>
      <textarea
        value = {answerValue}
        onChange={handleChangeAnswer}
      />
      </div>
      <button> Create Question </button>
    </form>
  )
  }