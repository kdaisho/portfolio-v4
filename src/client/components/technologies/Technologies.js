import React, { Component } from "react";
import technologies from "./tech-data.js";
import icons from "./icons";
import "./technologies.css";

// const Technologies = () => {
class Technologies extends Component {
    state = {
        filterTerms: []
    };

    handleChange = (type) => {
        console.log(type, event.target.checked);
        event.target.checked
            ? this.setState(
                  (prevState) => ({ filterTerms: [...prevState.filterTerms, type] }),
                  () => console.log("NEW STATE:", this.state.filterTerms)
              )
            : "";
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
                <div className="title-group">
                    <h2 className="title font-extra-large">Technologies</h2>
                    <p className="subtitle is-text-grey font-large">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros.
                    </p>
                </div>
                <div className="filters">
                    <label>
                        <input type="checkbox" onChange={() => this.handleChange("js")} />
                        JavaScript
                    </label>
                </div>
                <div className="technologies">
                    {/*technologies// .filter((tech) => this.state.filterTerms.includes(tech.genre))*/}
                    {technologies
                        .filter((tech) => {
                            if (this.state.filterTerms.length) {
                                console.log("ADDING", tech.genre);
                                return this.state.filterTerms.includes(tech.genre);
                            } else {
                                true;
                            }
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
            </section>
        );
    }
}

export default Technologies;
