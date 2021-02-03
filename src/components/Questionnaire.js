import React from 'react';
import Question from "./../data/questions.json";

function Questionnaire() {
    const data = Question.All
    const Questionnaire = Object.keys(data).map((questionnaire,index) =>{
        return(
                <li key={index}><a href="#">{questionnaire}</a></li>
        )
    })
    return (
        <div>
            <ul>
                {Questionnaire}
            </ul>
        </div>
    )

}

export default Questionnaire;