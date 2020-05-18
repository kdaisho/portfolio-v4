import React, { Component } from "react";
import technologies from "./tech-data.js";
import icons from "./icons";
import "./technologies.css";

// const Technologies = () => {
class Technologies extends Component {
    renderStars = (num) => {
        console.log("HEY", num);
        let str = "";
        for (let i = 0; i < num; i++) {
            str += String.fromCharCode(9733);
        }
        return str;
    };
    render() {
        this.renderStars(2);
        return (
            <section className="section is-technologies">
                <div className="title-group">
                    <h2 className="title font-extra-large">Technologies</h2>
                    <p className="subtitle is-text-grey font-large">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros.
                    </p>
                </div>
                <div className="technologies">
                    {technologies.map((tech) => (
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
