import React, { Component } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import WorkLog from "./components/workLog/WorkLog";
import Toolset from "./components/toolset/Toolset";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./app.css";

class App extends Component {
    state = {
        openPane: ""
    };

    togglePane = (name) => {
        this.setState({ openPane: this.state.openPane ? "" : name });
    };

    scrollTo = (destinationId) => {
        const button = event.target;
        button.classList.add("active");
        setTimeout(() => button.classList.remove("active"), 150);
        document.getElementById(destinationId).scrollIntoView({ behavior: "smooth" });
    };

    render() {
        return (
            <div className="component-wrap">
                {this.state.openPane && (
                    <div
                        className="backdrop"
                        onClick={() => this.togglePane(this.state.openPane)}
                    ></div>
                )}
                <Header
                    togglePane={this.togglePane}
                    openPane={this.state.openPane}
                    scrollTo={this.scrollTo}
                />
                <Hero />
                <WorkLog />
                <Toolset togglePane={this.togglePane} openPane={this.state.openPane} />
                <Projects togglePane={this.togglePane} openPane={this.state.openPane} />
                <Contact />
                <Footer />
            </div>
        );
    }
}

export default App;
