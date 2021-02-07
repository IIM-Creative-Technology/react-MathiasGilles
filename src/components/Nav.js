import {Link} from "react-router-dom";
import React from "react";

import "../scss/layout/_nav.scss";

function NavBarre() {
    return (
        <nav>
            <div>
                <Link to="/"><img src="http://place-hold.it/50x50" alt=""/></Link>
            </div>
        </nav>
    )
}

export default NavBarre;