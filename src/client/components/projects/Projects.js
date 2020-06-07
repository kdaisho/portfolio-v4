import React, { Component } from "react";
import { projects, filterItems } from "./projects-data.js";
import Modal from "../modal/Modal";
import Loading from "../../svg/Loading";
import { Desktop, Github } from "../../svg/Icons";
import bg from "../../images/projects/test-bg.jpg";
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
        vanillajs: false,
        selectedProject: {},
        loading: false
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

    toggleModal = ({ title, subtitle, stack, url, description }) => {
        this.setState({
            // loading: true,
            selectedProject: Object.keys(this.state.selectedProject).length
                ? {}
                : {
                      title,
                      subtitle,
                      description,
                      stack,
                      url
                  }
        });
    };

    render() {
        const { selectedProject, loading } = this.state;
        return (
            <section className="section is-projects">
                <div className="content-wrap is-side-by-side">
                    <div className="right-side">
                        <div className="title-group has-filters">
                            <h2 className="title">Pet Projects</h2>
                            <p className="subtitle font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <button
                            className="toggle-filter outline-button"
                            onClick={() => this.props.togglePane("projects")}
                        >
                            Filters
                        </button>
                        <fieldset
                            className={`filter-section ${
                                this.props.openPane === "projects" ? "active" : ""
                            }`}
                        >
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
                                    className="card"
                                    onClick={() => this.toggleModal(project)}
                                >
                                    <div
                                        className="top"
                                        style={{
                                            background: `#444 url(${bg}) no-repeat center`,
                                            backgroundSize: "cover"
                                        }}
                                    ></div>
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
                    {!!Object.keys(selectedProject).length && (
                        <Modal>
                            <div className={`loading-wrap ${loading ? "active" : ""}`}>
                                <Loading />
                            </div>
                            <div className="backdrop" onClick={this.toggleModal}>
                                <div
                                    className={`content bit-style ${loading ? "" : "active"}`}
                                    onClick={(event) => event.stopPropagation()}
                                >
                                    <div
                                        className="top"
                                        style={{
                                            background: `#333 url(${bg})`,
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
                                                <button className="link is-desktop-icon">
                                                    {Desktop()} Visit The Website
                                                </button>
                                                <button className="link is-github-icon">
                                                    {Github()}View Github Repo
                                                </button>
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
