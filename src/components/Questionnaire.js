import React from 'react';
import Question from "./../data/questions.json";

function Questionnaire() {
    const data = Question.All
    const Questionnaire = Object.keys(data).map((questionnaire, index) => {
        return (
            <article key={index}><a href="#">{questionnaire}</a></article>
        )
    })
    return (
        <section className="surveys-container">
            {Questionnaire}
        </section>
    )

}

export default Questionnaire;