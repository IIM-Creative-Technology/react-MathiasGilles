import React, { useState } from 'react';
import "../scss/layout/_question.scss"
import Input from "./Input";

const questions = [
    {
        'question': "Voici la question numero 1",
        'answer' : 'test2',
        'inputs': [
            {
                "key": "test1",
                "question": "je suis le input 1"
            },
            {
                "key": "test2",
                "question": "je suis le input 2"
            },
            {
                "key": "test3",
                "question": "je suis le input 3"
            }
        ]
    },
    {
        'question': "Voici la question numero 2",
        'answer' : 'test2',
        'inputs': [
            {
                "key": "test1",
                "question": "je suis  1"
            },
            {
                "key": "test2",
                "question": "je suis  2"
            },
            {
                "key": "test3",
                "question": "je suis  3"
            }
        ]
    },
]

const Question = () => {
    const [step, setStep] = useState(0);

    const GetAllInputs = questions[step].inputs.map( (input) => <Input key={input.key} changeEvent={SetAnswer} answer={input}></Input>);

    return (
        <div className="container-question">
            <h2>{questions[step].question}</h2>
            <>{GetAllInputs}</>
            <button onClick={getNextStep}>Prochaine Question</button>
        </div>
    );

    function SetAnswer(e){
        console.log('cliquer sur :', e.target.value)
    }
    
    function getNextStep(){
        if(questions.length === (step + 1)){
            console.log("Question terminée")
        }
        else{
            setStep(step + 1)
        }
    }
}




export default Question