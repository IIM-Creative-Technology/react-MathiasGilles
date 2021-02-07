import {Link} from "react-router-dom";
import React from "react";

import "../scss/layout/_nav.scss";

function NavBarre() {
    return (
        <nav>
            <div>
                <Link to="/"><img src="../images/accueil.svg" alt=""/></Link>
            </div>
        </nav>
    )
}

export default NavBarre;