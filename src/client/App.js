import React, { Component } from "react";
import { Router } from "@reach/router";
import Main from "./components/Main";
import Match from "./components/match/Match";
import "./app.css";

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
