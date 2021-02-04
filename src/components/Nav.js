import {Link} from "react-router-dom";
import React from "react";

function NavBarre() {
    return (
        <nav>
            <div>
                <Link to="/">Home</Link>
            </div>
        </nav>
    )
}

export default NavBarre;