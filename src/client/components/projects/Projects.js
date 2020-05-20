import React, { Component } from "react";
// import { projects, filterItems } from "./projects-data.js";
import "./projects.css";

class Projects extends Component {
    state = {
        filterTerms: [],
        js: false,
        markup: false,
        graphicsEditor: false,
        tools: false,
        platform: false,
        database: false,
        textEditor: false
    };

    handleChange = (type) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.checked });
        const copy = [...this.state.filterTerms];
        if (event.target.checked) {
            this.setState((prevState) => ({ filterTerms: [...prevState.filterTerms, type] }));
        } else {
            const index = this.state.filterTerms.indexOf(type);
            if (index >= 0) {
                copy.splice(index, 1);
                this.setState({ filterTerms: copy });
            }
        }
    };

    renderStars = (num) => {
        let str = "";
        for (let i = 0; i < num; i++) {
            str += String.fromCharCode(9733);
        }
        return str;
    };

    render() {
        return (
            <section className="section is-projects">
                <div className="content-wrap is-side-by-side">
                    <div className="right-side">
                        <div className="title-group">
                            <h2 className="title font-extra-large">Technologies</h2>
                            <p className="subtitle is-text-grey font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <fieldset className="filter-section">
                            <legend className="is-text-grey">Filters</legend>
                            <div className="filters">
                                {/* {filterItems.map((item) => (
                                    <label
                                        key={item.type}
                                        className={this.state[item.type] ? "active" : ""}
                                    >
                                        <input
                                            type="checkbox"
                                            name={item.type}
                                            checked={this.state.type}
                                            onChange={() => this.handleChange(item.type)}
                                        />
                                        <span className="dummy"></span>
                                        {item.name}
                                    </label>
                                ))} */}
                            </div>
                        </fieldset>
                    </div>
                    <div className="projects left-side">
                        <div className="card">
                            <div className="top"></div>
                            <div className="bottom">
                                <button className="cta">View Details</button>
                                <div className="text-group">
                                    <h2 className="title">JavaScript Best</h2>
                                    <span className="separator"></span>
                                    <p className="desc">Online course reviews</p>
                                </div>
                                <ul className="tech-stack">
                                    <li className="js">J</li>
                                    <li className="js">N</li>
                                    <li className="markup">H</li>
                                    <li className="css">S</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
