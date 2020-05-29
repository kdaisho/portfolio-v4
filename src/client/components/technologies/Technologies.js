import React, { Component } from "react";
import { technologies, filterItems } from "./tech-data.js";
import icons from "../../svg/icons";
import "./technologies.css";

// const Technologies = () => {
class Technologies extends Component {
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
            <section className="section is-technologies">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side">
                        <div className="title-group has-filters">
                            <h2 className="title">Technologies</h2>
                            <p className="subtitle is-text-grey font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <button
                            className="toggle-filter outline"
                            onClick={() => this.props.togglePane("tech")}
                        >
                            Filters
                        </button>
                        <fieldset
                            className={`filter-section ${
                                this.props.openPane === "tech" ? "active" : ""
                            }`}
                        >
                            <legend className="is-text-grey">(OR) Filters</legend>
                            <div className="filters">
                                {filterItems.map((item) => (
                                    <label
                                        key={item.type}
                                        className={`tag ${this.state[item.type] ? "active" : ""}`}
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
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <div className="technologies right-side">
                        {technologies
                            .filter((tech) => {
                                return this.state.filterTerms.length
                                    ? this.state.filterTerms.includes(tech.genre)
                                    : true;
                            })
                            .map((tech) => (
                                <div key={tech.id} className="tech">
                                    {icons[tech.id]}
                                    <span className="separator"></span>
                                    <span className="stars">{this.renderStars(tech.stars)}</span>
                                    <p className="tech-name">{tech.name}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Technologies;
