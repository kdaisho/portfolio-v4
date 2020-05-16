import React from "react";
import cards from "./cards";
import "./education.css";

const Education = () => {
    console.log("cards", Array.isArray(cards));
    return (
        <section className="section is-education">
            <div className="title-group">
                <h2 className="title">Education</h2>
                <p className="subtitle is-text-grey">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque
                    volutpat mattis eros.
                </p>
            </div>
            <div className="cards">
                {cards.map((card) => (
                    <div key={card.institution} className="card">
                        <div className={`side-a ${card.institution} card-style`}>
                            <img src={card.url} alt={card.institution} />
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
