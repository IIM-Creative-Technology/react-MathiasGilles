// REACT
import React, { useState } from 'react';

// SCSS
import "../scss/layout/_question.scss"

//COMPONENTS
import Input from "./Input";
import Score from "./Score";

import Questions from "../data/questions.json";

import {useParams} from "react-router-dom";


// const questions = [
//     {
//         'question': "Voici la question numero 1",
//         'answer' : 'test2',
//         'inputs': [
//             {
//                 "key": "test1",
//                 "question": "je suis le input 1"
//             },
//             {
//                 "key": "test2",
//                 "question": "je suis le input 2"
//             },
//             {
//                 "key": "test3",
//                 "question": "je suis le input 3"
//             },
//             {
//                 "key": "test4",
//                 "question": "je suis le input 4"
//             }
//         ]
//     },
//     {
//         'question': "Voici la question numero 2",
//         'answer' : 'test2',
//         'inputs': [
//             {
//                 "key": "test1",
//                 "question": "je suis  1"
//             },
//             {
//                 "key": "test2",
//                 "question": "je suis  2"
//             },
//             {
//                 "key": "test3",
//                 "question": "je suis  3"
//             },
//             {
//                 "key": "test4",
//                 "question": "je suis  4"
//             }
//         ]
//     },
//     {
//         'question': "Terminé, Voici votre score",
//         'answer' : '',
//         'inputs': [
//
//         ]
//     },
// ]

function Question() {

    // State
    const [step, setStep] = useState(0);
    const [answer, setAnswer] = useState();
    const [mark, setMark] = useState(0);

    const id = useParams().id;
    const questions = Questions.All.[id].questionnaire;
    
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