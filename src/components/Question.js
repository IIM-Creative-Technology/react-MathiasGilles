import React, { useState } from 'react';
import "../scss/layout/_question.scss"
import Input from "./Input";
import Error from "./Error";

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

    // State
    const [step, setStep] = useState(0);
    const [error, setError] = useState(false);
    const [answer, setAnswer] = useState();

    // Map on the questions
    const GetAllInputs = questions[step].inputs.map( (input) => <Input key={input.key} changeEvent={SetAnswer} answer={input}></Input>);

    // Set the answer with the key
    function SetAnswer(e){
        setAnswer(e.target.value)
    }

    // Verify if there is an error
    function GetError(){
        if(answer === questions[step].answer){
            setError(false)
            return true
        }
        else{
            setError(true)
            return false
        }
    }


    // Get the next Step if existe
    function getNextStep(){
        if(GetError()){
            if(questions.length === (step + 1)){
                console.log("Question terminée")
            }
            else{
                setStep(step + 1)
            }
        }
    }


    // Return to the view
    return (
        <div className="container-question">
            <h2>{questions[step].question}</h2>
            <>{GetAllInputs}</>
            <button onClick={getNextStep}>Prochaine Question</button>
            <Error error={error}></Error>
        </div>
    );

}

export default Question