import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParam
} from "react-router-dom";
import HomePage from "./Home";
import Question from "./Question";

function Routes() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route exact path="/surveys/:id">
                        <Question/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Routes;