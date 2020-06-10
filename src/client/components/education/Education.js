import React, { Component } from "react";
import cards from "./edu-data";
import "./education.css";

class Education extends Component {
    render() {
        return (
            <section className="section is-education">
                <div className="content-wrap is-side-by-side">
                    <div className="title-group">
                        <h2 className="title">Work Log</h2>
                        <p className="subtitle font-large">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                        </p>
                    </div>
                    <div className="cards">
                        {cards.map((card) => (
                            <div key={card.id} className={`card is-${card.id}`}>
                                <div className={`side is-front ${card.id}`}>
                                    <h2 className="company">{card.company}</h2>
                                    <div className="summary">
                                        <h3 className="position">{card.title}</h3>
                                        <span className="separator"></span>
                                        <p>{card.period}</p>
                                        <p>{card.location}</p>
                                    </div>
                                </div>
                                <div className={`side is-back ${card.id}`}>
                                    <div className="list">
                                        <p>{card.what}</p>
                                        <ul>
                                            {card.tasks.map((task) => (
                                                <li key={task}>{task}</li>
                                            ))}
                                            <p>{card.description}</p>
                                        </ul>
                                    </div>
                                    <div className="list">
                                        <p>Using</p>
                                        <ul>
                                            {card.techStack.map((tech) => (
                                                <li key={tech}>{tech}</li>
                                            ))}
                                            <p>{card.description}</p>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    }
}

export default Education;
