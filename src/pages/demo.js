import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
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

  return(
    <div className={styles.demoPage}>
      <DemoQuestion />
      <div>
        {questions.map(question => {
          return (
            <DemoNavbar
            question = {question.question}
            answer = {question.answer}
          />
          )
        })}
      </div>
    </div>
  )
}