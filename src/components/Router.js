import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import Questionnaire from "./Questionnaire";
import HomePage from "./Home";

function Routes() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/surveys">Questionnaires</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/surveys">
                        <Questionnaire/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;