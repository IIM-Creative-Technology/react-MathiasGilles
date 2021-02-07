import React from 'react';
import Question from "./../data/questions.json";

import "../scss/layout/_questionnaire.scss";

function Questionnaire() {
    const data = Question.All
    const Questionnaire = Object.keys(data).map((questionnaire, index) => {
        let route = "/surveys/" + {index}.index
        return (
            <article key={index}><a href={route}>{questionnaire}</a></article>
        )
    })
    return (
        <section id="surveys" className="surveys-container">
            {Questionnaire}
        </section>
    )

}

export default Questionnaire;