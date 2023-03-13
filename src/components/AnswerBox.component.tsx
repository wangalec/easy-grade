import { useState } from "react";

export default function AnswerBox(props: any){
  const[value, setValue] = useState("");
  
  const handleChange = (event: any) => {
    console.log(event.target.value);
    setValue(event.target.value);
  }

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.addAnswers(value);
    setValue("");
  }

  return(
    <div>
      <h2> {props.question} </h2>
      <textarea
        value = {value}
        onChange = {handleChange}
      />
      {(props.index == props.questions_length - 1 ? 
          <></>
          : <button onClick={handleSubmit}> Next Question </button>
        )}
    </div>
  )
}