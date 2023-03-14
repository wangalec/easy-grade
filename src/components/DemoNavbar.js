import React from 'react'

export default function DemoQuestion({question, answer}) {

    return (
        <div>
            <div>
                <div className='question'></div>
                <div className='answer'></div>
                <div className='input'></div>
            </div>
            <div>
                <div className='right-container'>
                    <div className='score-container'>
                        <div className='score'></div>
                        <div className='pass'>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }