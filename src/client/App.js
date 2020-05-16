import React, { Component } from "react";
import { Router } from "@reach/router";
// import Header from "./components/header/Header";
import Main from "./components/Main";
// import Hero from "./components/hero/Hero";
import Match from "./components/match/Match";
import "./global-style/reset.css";
import "./global-style/general.css";

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
