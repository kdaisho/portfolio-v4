import React, { Component } from "react";
import { Router } from "@reach/router";
import Main from "./components/Main";
import "./app.css";

class App extends Component {
    state = {};

    render() {
        return (
            <Router>
                <Main path="/" />
            </Router>
        );
    }
}

export default App;
