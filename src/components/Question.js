import "../scss/layout/_question.scss"
import Input from "./Input";

const Question = () => {
    return (
        <div className="container-question">
            <h2>Ceci est un test zeubi</h2>
            <Input question="Voici la question"></Input>
        </div>
    );
}

export default Question