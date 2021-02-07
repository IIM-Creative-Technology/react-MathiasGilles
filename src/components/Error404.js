import NavBarre from "./Nav";

import "../scss/layout/_error_404.scss"


function Error404(){
    return(
        <div>
            <NavBarre/>
            <section className="error-container">
                <h1>Page introuvable </h1>
                <p>Vous pouvez retourner au menus en cliquant <a href="/">ici</a> !</p>
            </section>
        </div>
    )
}

export default Error404