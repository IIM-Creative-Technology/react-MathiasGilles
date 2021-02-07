import NavBarre from "./Nav";
import Questionnaire from "./Questionnaire";
import Presentation from "./Presentation";

function HomePage(){
    return(
        <main>
            <NavBarre/>
            <Presentation/>
            <Questionnaire/>
        </main>
    )
}

export default HomePage;