import React, { Component } from "react";
import cards from "./edu-data";
import "./education.css";

class Education extends Component {
    // const Education = () => {

    render() {
        return (
            <section className="section is-education">
                <div className="content-wrap is-side-by-side">
                    <div className="title-group">
                        <h2 className="title font-extra-large">Education</h2>
                        <p className="subtitle is-text-grey font-large">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
                            Quisque volutpat mattis eros.
                        </p>
                    </div>
                    <div className="cards">
                        {cards.map((card) => (
                            <div key={card.institution} className={`card is-${card.institution}`}>
                                <div className={`side is-front ${card.institution}`}>
                                    <img src={card.src} alt={card.institution} />
                                    <div className="summary">
                                        <h3 className="edu-title">{card.title}</h3>
                                        <span className="separator"></span>
                                        <p>{card.period}</p>
                                        <p>{card.location}</p>
                                    </div>
                                </div>
                                <div className={`side is-back ${card.institution}`}>
                                    <div className="align-center">
                                        <p>{card.description}</p>
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
