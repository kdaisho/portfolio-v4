import React, { Component } from "react";
import { toolset, filterItems } from "./toolset-data.js";
import icons from "../../svg/devIcons";

class Toolset extends Component {
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
            <section className="section is-toolset">
                <div className="content-wrap is-side-by-side">
                    <div className="left-side">
                        <div className="title-group has-filters">
                            <h2 className="title">Toolset</h2>
                            <p className="subtitle font-large">
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                                odio. Quisque volutpat mattis eros.
                            </p>
                        </div>
                        <fieldset
                            className={`filter-section ${
                                this.props.openPane === "tool" ? "active" : ""
                            }`}
                        >
                            <button
                                className="toggle-filter outline-button"
                                onClick={() => this.props.togglePane("tool")}
                            >
                                Filters
                            </button>
                            <legend>(OR) Filters</legend>
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
                    <div className="toolset right-side">
                        {toolset
                            .filter((tool) => {
                                return this.state.filterTerms.length
                                    ? this.state.filterTerms.includes(tool.genre)
                                    : true;
                            })
                            .map((tool) => (
                                <div key={tool.id} className="tool">
                                    {icons[tool.id]}
                                    <span className="separator"></span>
                                    <span className="stars">{this.renderStars(tool.stars)}</span>
                                    <p className="tool-name">{tool.name}</p>
                                </div>
                            ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Toolset;
