import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import HomePage from "./Home";

function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}

export default Routes;