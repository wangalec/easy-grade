import { useState, useEffect } from "react";
import styles from '../styles/Home.module.css'
import axios from 'axios';

import DemoQuestion from "../components/DemoQuestion";
import DemoNavbar from "../components/Navbar";

export default function Demo(){
  const questions = [
    {
      question: "What is molecular biology?",
      answer: "the study of living processes in terms of the chemicals involved"
    },
    {
      question: "What is boiling point?",
      answer: "temperature at which a liquid will turn to a gas"
    },
    {
      question: "What is freezing point?",
      answer: "temperature at which a liquid turns into a solid"
    },
    {
      question: "What is collagen?",
      answer: "structural protein that forms connective tissue in animals"
    },
    {
      question: "What are nucleotides?",
      answer: "neuclic acid base pairs"
    },
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