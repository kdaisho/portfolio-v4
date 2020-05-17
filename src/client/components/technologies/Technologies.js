import React from "react";
import technologies from "./tech-data.js";
import "./technologies.css";

const Technologies = () => {
    return (
        <section className="section is-technologies">
            <div className="title-group">
                <h2 className="title font-extra-large">Technologies</h2>
                <p className="subtitle is-text-grey font-large">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros.
                </p>
            </div>
            <div className="technologies">
                {technologies.map((tech) => (
                    <div key={tech.id} className="tech">
                        <img className="icon" src={tech.src} alt={tech.name} />
                        <span className="separator"></span>
                        <p>{tech.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Technologies;
