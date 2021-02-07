import "../scss/layout/_presentation_home.scss"
import Weather from "./Weather";

function Presentation(){
    return(
        <section className="presentation-container">
            <article>
                <div>
                    <h1>Des Quizz incroyables</h1>
                    <p>Il n'y a pas mieux dans le milieu !</p>
                    <a href="#surveys">Voir quizz</a>
                </div>
            </article>
            <article>
                <Weather/>
            </article>
        </section>
    )
}

export default Presentation;