
import "../scss/components/_redline.scss"
import React from "react";

const Redline = (props) =>{

    const GetOneQuestion = props.answerd.map((answer) => <div key={"question-menu-" + answer.key} className={`question ${getStyle(answer.answer)}`}>{answer.question}</div>)

    function getStyle(value){
        if(value === true){
            return "question-validate"
        }
        else if(value === false){
            return "question-wrong"
        }
        else{
            return " "
        }
    }

    return(
        <div className="container-red-line">
            <p className="title-question">Questions :</p>
            <>{GetOneQuestion}</>
        </div>
    )
}

export default Redline