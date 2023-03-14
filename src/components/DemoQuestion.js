import React, { useState } from 'react'
import axios from 'axios';
import styles from '../styles/DemoQuestion.module.css'
export default function DemoQuestion({question, answer}) {

    const[score, setScore] = useState(0);
    const[answerValue, setAnswerValue] = useState("");

    const handleChange = (e) => {
        console.log(e.target.value);
        setAnswerValue(e.target.value)
    }

    //check button to check for accuracy
    const onCheck = () => {
        axios.post("/api/demo-check-answer", { input: answerValue, answer: answer }).then((data) => {
            console.log(data.data[0]);
            setScore(data.data[0].toFixed(2));
        })
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.questionContainer}>
                <div className={styles.question}>
                    <h2> {question} </h2>
                </div>
                <div className={styles.questionInner}>
                <div className={styles.textBox}>
                    <textarea 
                    className={styles.textBox}
                    value={answer} 
                    />
                </div>
                <div className={styles.textBox}>
                    <textarea
                        value={answerValue}
                        onChange={(e) => {setAnswerValue(e.target.value)}} 
                    />
                </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div>
                    <div className={styles.scoreContainer}>
                        <div className={styles.score}>
                            Score: {score}
                        </div>
                        <div className={styles.pass}>
                            {
                                score >= 0.9 ? <h2> Correct </h2> : 
                                score >= 0.8 ? <h2> Unsure </h2> : 
                                <h2> Incorrect </h2>
                            }
                        </div>
                    </div>
                    <button className={styles.check} onClick={onCheck}> Check </button>
                </div>
            </div>
        </div>
    )
  }