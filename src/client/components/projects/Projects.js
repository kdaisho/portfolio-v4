import React, { Component } from "react";
import { projects, filterItems } from "./projects-data.js";
import Modal from "../modal/Modal";
import { Desktop, Github } from "../../svg/Icons";

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
        vanillajs: false,
        selectedProject: {},
        activeCardId: ""
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

    toggleModal = ({ id, title, subtitle, description, hero, stack, url, githubUrl }, delay) => {
        this.setState({ activeCardId: id }, () => {
            setTimeout(() => {
                this.setState({
                    selectedProject: Object.keys(this.state.selectedProject).length
                        ? {}
                        : {
                              title,
                              subtitle,
                              description,
                              hero,
                              stack,
                              url,
                              githubUrl
                          }
                });
            }, delay);
        });
    };

    render() {
        const { selectedProject } = this.state;
        return (
            <section className="section is-projects">
                <div className="content-wrap is-side-by-side">
                    <div className="right-side">
                        <div className="title-group has-filters">
                            <h2 className="title">Side Projects</h2>
                            <p className="subtitle font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <fieldset
                            className={`filter-section ${
                                this.props.openPane === "projects" ? "active" : ""
                            }`}
                        >
                            <button
                                className="toggle-filter outline-button"
                                onClick={() => this.props.togglePane("projects")}
                            >
                                Filters
                            </button>
                            <legend>(AND) Filters</legend>
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
                                <div
                                    key={project.id}
                                    className={`card ${
                                        this.state.activeCardId === project.id ? "active" : ""
                                    }`}
                                    onClick={() => this.toggleModal(project, 100)}
                                >
                                    <div
                                        className="top"
                                        style={{
                                            background: `#444 url(${project.thumb}) no-repeat center`,
                                            backgroundSize: "cover"
                                        }}
                                    >
                                        <div className="glass"></div>
                                    </div>

                                    <div className="bottom">
                                        <div className="text-group">
                                            <h2 className="title">{project.title}</h2>
                                            <span className="separator"></span>
                                            <p className="desc">{project.subtitle}</p>
                                        </div>
                                        <ul className="tech-stack">
                                            {project.stack.map((tech) => {
                                                return (
                                                    tech !== "live" && (
                                                        <li
                                                            key={tech}
                                                            className={`tool ${tech}`}
                                                            data-tip={tech}
                                                        >
                                                            {tech.slice(0, 1).toUpperCase()}
                                                        </li>
                                                    )
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                    </div>
                    {!!Object.keys(selectedProject).length && (
                        <Modal>
                            <div className="backdrop" onClick={this.toggleModal}>
                                <div
                                    className="content bit-style active"
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <div
                                        className="top"
                                        style={{
                                            background: `#333 url(${selectedProject.hero})`,
                                            backgroundSize: "cover"
                                        }}
                                    ></div>
                                    <div className="bottom">
                                        <div className="text-group">
                                            <h1 className="title">{selectedProject.title}</h1>
                                            <p className="subtitle">{selectedProject.subtitle}</p>
                                            <p className="description">
                                                {selectedProject.description}
                                            </p>
                                            <div className="links">
                                                {selectedProject.url && (
                                                    <a
                                                        href={selectedProject.url}
                                                        title={selectedProject.title}
                                                        className="link is-desktop-icon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {Desktop()} Visit The Website
                                                    </a>
                                                )}
                                                {selectedProject.githubUrl && (
                                                    <a
                                                        href={selectedProject.githubUrl}
                                                        title={`${selectedProject.title} github repository`}
                                                        className="link is-github-icon"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        {Github()}View Github Repo
                                                    </a>
                                                )}
                                            </div>
                                        </div>
                                        <div className="tech-stack">
                                            {selectedProject.stack.map((tech) => {
                                                return tech === "live" ? (
                                                    false
                                                ) : (
                                                    <span key={tech} className="tech">
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                        </div>

                                        <button className="close" onClick={this.toggleModal}>
                                            &#10005;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </section>
        );
    }
}

export default Projects;
