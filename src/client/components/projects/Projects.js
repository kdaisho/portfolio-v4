import React, { Component } from "react";
import { projects, filterItems } from "./projects-data.js";
import "./projects.css";

class Projects extends Component {
    state = {
        filterTerms: [],
        js: false,
        vanillajs: false,
        react: false,
        angular: false,
        markup: false,
        graphicsEditor: false,
        tools: false,
        platform: false,
        database: false,
        textEditor: false
    };

    handleChange = (tech) => {
        const name = event.target.name;
        this.setState({ [name]: event.target.checked });
        const copy = [...this.state.filterTerms];
        if (event.target.checked) {
            this.setState((prevState) => ({ filterTerms: [...prevState.filterTerms, tech] }));
        } else {
            const index = this.state.filterTerms.indexOf(tech);
            if (index >= 0) {
                copy.splice(index, 1);
                this.setState({ filterTerms: copy });
            }
        }
    };

    isIncludes = (stack, filterList) => {
        console.count();
        const arr = [];
        for (let i = 0; i < stack.length; i++) {
            if (filterList.indexOf(stack[i]) >= 0) {
                arr.push(filterList.indexOf(stack[i]));
            }
        }
        console.log("????", arr);
    };

    render() {
        return (
            <section className="section is-projects">
                <div className="content-wrap is-side-by-side">
                    <div className="right-side">
                        <div className="title-group">
                            <h2 className="title font-extra-large">Projects</h2>
                            <p className="subtitle is-text-grey font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <fieldset className="filter-section">
                            <legend className="is-text-grey">Filters</legend>
                            <div className="filters">
                                {filterItems.map((item) => (
                                    <label
                                        key={item.tech}
                                        className={this.state[item.tech] ? "active" : ""}
                                    >
                                        <input
                                            type="checkbox"
                                            name={item.tech}
                                            checked={this.state.tech}
                                            onChange={() => this.handleChange(item.tech)}
                                        />
                                        <span className="dummy"></span>
                                        {item.name}
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <div className="cards left-side">
                        {projects
                            .filter((project) => {
                                return this.state.filterTerms.length
                                    ? // ? this.isIncludes(this.state.filterTerms, project.stack)
                                      this.isIncludes(project.stack, this.state.filterTerms)
                                    : true;
                            })
                            .map((project) => (
                                <div key={project.id} className="card">
                                    <div className="top"></div>
                                    <div className="bottom">
                                        <button className="cta">View Details</button>
                                        <div className="text-group">
                                            <h2 className="title">{project.title}</h2>
                                            <span className="separator"></span>
                                            <p className="desc">{project.subtitle}</p>
                                        </div>
                                        <ul className="tech-stack">
                                            {project.stack.map((tech) => (
                                                <li key={tech} className={tech}>
                                                    {tech.slice(0, 1).toUpperCase()}
                                                </li>
                                            ))}
                                            {/* <li className="js">J</li>
                                            <li className="js">N</li>
                                            <li className="markup">H</li>
                                            <li className="css">S</li> */}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;
