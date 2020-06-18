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

export default Main;
