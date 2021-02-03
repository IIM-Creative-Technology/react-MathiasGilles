import "../scss/layout/_question.scss"
import Input from "./Input";

const question = {
    'question': "Voici la question",
    'inputs': [
        "je suis le input 1",
        "je suis le input 2",
        "je suis le input 3",
        "je suis le input 4"
    ]
}


const Question = () => {
    return (
        <div className="container-question">
            <h2>Ceci est un test zeubi</h2>
            <>{GetAllInputs}</>
        </div>
    );
}

const GetAllInputs = question.inputs.map( (input) => <Input question={input}></Input>);


export default Question