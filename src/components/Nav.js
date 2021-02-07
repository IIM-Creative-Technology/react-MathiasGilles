import {Link} from "react-router-dom";
import React from "react";

import logoHome from "../images/accueil.svg";

import "../scss/layout/_nav.scss";

function NavBarre() {
    return (
        <nav>
            <div>
                <Link to="/"><img src={logoHome} alt=""/></Link>
            </div>
        </nav>
    )
}

export default NavBarre;