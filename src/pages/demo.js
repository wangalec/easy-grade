import { useState, useEffect } from "react";
import axios from 'axios';

import DemoQuestion from "../components/DemoNavbar";
import DemoNavbar from "../components/DemoQuestion";

export default function Demo(){
  const questions = [
    {
      question: "Molecular Biology",
      answer: "the study of living processes in terms of the chemicals involved"
    }
  ]
  const check = () => {

  }

  return(
    <>
    <DemoNavbar />
    <div>
      {questions.map(question => {
        return (
          <DemoQuestion
          questionName = {question.question}
          answer = {question.answer}
          />
        )
      })}
    </div>
        </>
  )
}