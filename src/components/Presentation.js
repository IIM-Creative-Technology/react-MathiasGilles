import "../scss/layout/_presentation_home.scss"

import imagePresentation from "../images/home-page-image.jpg";

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
                <img src={imagePresentation} alt="image home page"/>
            </article>
        </section>
    )
}

export default Presentation;