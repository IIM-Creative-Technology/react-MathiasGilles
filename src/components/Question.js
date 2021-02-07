// REACT
import React, { useState } from 'react';

// SCSS
import "../scss/layout/_question.scss"

//COMPONENTS
import Input from "./Input";
import Score from "./Score";

import Questions from "../data/questions.json";

import {useParams} from "react-router-dom";

function Question() {

    // State
    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState();
    const [mark, setMark] = useState(0);

    const id = useParams().id;
    const questions = Questions.All.[id].questionnaire;
    console.log(questions[0].options[0].name)
    // Map on the questions
    const GetAllInputs = questions[step].options.map( (options) => <Input key={options.key} changeEvent={SetAnswer} answer={options}></Input>);
    // Set the answer with the key
    function SetAnswer(e){
        setAnswer(e.target.value)
    }

    // Verify if there is an error
    function GetError(){
        if(answer === questions[step].answer){
            return false
        }
        else{
            return true
        }
    }

    // Get the next Step if existe
    function getNextStep(){
        if(GetError()){
            setMark(mark - 0.25)
            if(questions.length !== (step + 1)){
                setStep(step + 1)
            }
        }
        else{
            setMark(mark + 1)
            if(questions.length !== (step + 1)){
                setStep(step + 1)
            }
        }
    }

    // Return to the view
    return (
        <div className="container-question">
            <h2>{questions[step].question}</h2>
            <Score mark={mark} questionLength={questions.length - 1}></Score>
            <>{GetAllInputs}</>
            <button className="button-next-step" onClick={getNextStep}>{(questions.length - 1) === step ? "Revenir a la landing" : "Continuer"}</button>
        </div>
    );

}

export default Question