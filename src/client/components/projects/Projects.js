import React, { Component } from "react";
import { projects, filterItems } from "./projects-data.js";
import "./projects.css";

class Projects extends Component {
    state = {
        filterTerms: [],
        angular: false,
        cssGrid: false,
        less: false,
        live: false,
        mongodb: false,
        nodejs: false,
        php: false,
        react: false,
        sass: false,
        vanillajs: false
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

    isIncludes = (stack, filterTerms) => {
        let counter = 0;
        for (let i = 0; i < filterTerms.length; i++) {
            stack.includes(filterTerms[i]) ? counter++ : "";
        }
        return filterTerms.length === counter ? true : false;
    };

    render() {
        return (
            <section className="section is-projects">
                <div className="content-wrap is-side-by-side">
                    <div className="right-side">
                        <div className="title-group has-filters">
                            <h2 className="title">Pet Projects</h2>
                            <p className="subtitle is-text-grey font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <button
                            className="toggle-filter outline"
                            onClick={() => this.props.togglePane("projects")}
                        >
                            Filters
                        </button>
                        <fieldset
                            className={`filter-section ${
                                this.props.openPane === "projects" ? "active" : ""
                            }`}
                        >
                            <legend className="is-text-grey">(AND) Filters</legend>
                            <div className="filters">
                                {filterItems.map((item) => (
                                    <label
                                        key={item.tech}
                                        className={`tag ${this.state[item.tech] ? "active" : ""}`}
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
                                    ? this.isIncludes(project.stack, this.state.filterTerms)
                                    : true;
                            })
                            .map((project) => (
                                <div key={project.id} className="card">
                                    <div className="top"></div>
                                    <div className="bottom">
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
