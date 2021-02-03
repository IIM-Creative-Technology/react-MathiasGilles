import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Questionnaire from "./Questionnaire";

function Routes() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/surveys">Questionnaires</Link>
                    </li>
                </ul>

                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/counter">
                        <Questionnaire/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;