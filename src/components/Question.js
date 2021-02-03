import "../scss/layout/_question.scss"
import Input from "./Input";

const question = {
    'question': "Voici la question",
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
}

const Question = () => {
    return (
        <div className="container-question">
            <h2>Ceci est un test zeubi</h2>
            <>{GetAllInputs}</>
        </div>
    );
}

const GetAllInputs = question.inputs.map( (input) => <Input key={input.key} changeEvent={SetAnswer} answer={input}></Input>);

function SetAnswer(e){
    console.log('cliquer sur :', e.target.value)
}


export default Question