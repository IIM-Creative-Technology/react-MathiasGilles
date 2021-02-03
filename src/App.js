import './App.css';
import Questionnaire from "./components/Questionnaire";
import Question from "./data/questions.json"


function App() {
    console.log(Question.All)
  return (
    <div className="App">
      <Questionnaire/>
    </div>
  );
}

export default App;
