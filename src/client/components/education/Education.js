import React from "react";
import cards from "./edu-data";
// import Fr from "../../images/edu/frontendmasters-logo.svg";
// import Fr from "./frontendmasters-logo.svg";
import "./education.css";

const Education = () => {
    return (
        <section className="section is-education">
            <div className="title-group">
                <h2 className="title font-extra-large">Education</h2>
                <p className="subtitle is-text-grey font-large">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros.
                </p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <div key={card.institution} className="card">
                        <div className={`side-a ${card.institution} card-style`}>
                            <img src={card.src} alt={card.institution} />
                            <div className="summary">
                                <h3 className="edu-title">{card.title}</h3>
                                <span className="separator"></span>
                                <p>{card.period}</p>
                                <p>{card.location}</p>
                            </div>
                        </div>
                        <div className={`side-b ${card.institution} card-style`}>
                            <div className="v-align">
                                <p>{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;
