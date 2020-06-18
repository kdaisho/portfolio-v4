import React, { Component } from "react";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import WorkLog from "./workLog/WorkLog";
import Toolset from "./toolset/Toolset";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";

class Main extends Component {
    state = {
        openPane: ""
    };

    togglePane = (name) => {
        this.setState({ openPane: this.state.openPane ? "" : name }, () =>
            console.log("TOO::", this.state.openPane)
        );
    };

    jumpTo = (destinationId) => {
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
                    jumpTo={this.jumpTo}
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

export default Main;
