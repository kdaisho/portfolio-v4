import React, { Component } from "react";
import { Router } from "@reach/router";
import Main from "./components/Main";
import Match from "./components/match/Match";
import "./global-style/reset.css";
import "./global-style/general.css";
import "./global-style/tooltip.css";

class App extends Component {
    state = {};

    render() {
        return (
            <Router>
                <Main path="/" />
                <Match path="/match" />
            </Router>
        );
    }
}

export default App;
