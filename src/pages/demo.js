import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import axios from 'axios';

import DemoQuestion from "../components/DemoQuestion";
import DemoNavbar from "../components/Navbar";

export default function Demo(){
  const questions = [
    {
      question: "Molecular Biology",
      answer: "the study of living processes in terms of the chemicals involved"
    }
  ]

  return(
    <div className={styles.demoPage}>
      <DemoNavbar />
      <div>
        {questions.map(question => {
          return (
            <DemoQuestion
            question = {question.question}
            answer = {question.answer}
          />
          )
        })}
      </div>
    </div>
  )
}