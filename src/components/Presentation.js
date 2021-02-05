import "../scss/layout/_presentation_home.scss"

function Presentation(){
    return(
        <section className="presentation-container">
            <article>
                <h1>Des Quizz incroyables</h1>
                <p>inspiré par Yanis Elmaleh</p>
                <button>Voir quizz</button>
            </article>
            <article>
                <img src="http://place-hold.it/400x400" alt=""/>
            </article>
        </section>
    )
}

export default Presentation;