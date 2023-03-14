import React, { useState } from 'react'

export default function DemoQuestion({question, answer}) {

    const[score, setScore] = useState(0);
    const[answerValue, setAnswerValue] = useState("");

    const handleChange = (e) => {
        setAnswerValue(e.target.value)
    }

    //check button to check for accuracy
    const onCheck = () => {
        
    }

    return (
        <div>
            <div>
                <div className='question'>
                    <h2> {question} </h2>
                </div>
                <div className='answer'>
                    <h2> {answer} </h2>
                </div>
                <div className='input'>
                    <textarea
                        value={answerValue}
                        onChange={(e) => {setAnswerValue(e.target.value)}} 
                    />
                </div>
            </div>
            <div>
                <div className='right-container'>
                    <div className='score-container'>
                        <div className='score'>
                            Score: {score}
                        </div>
                        <div className='pass'>
                            {
                                score >= 0.9 ? <h2> Correct </h2> : 
                                score >= 0.8 ? <h2> Unsure </h2> : 
                                <h2> Incorrect </h2>
                            }
                        </div>
                    </div>
                    <button onClick={onCheck}> Check </button>
                </div>
            </div>
        </div>
    )
  }