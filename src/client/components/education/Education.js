import React from "react";
import cards from "./cards";
import "./education.css";

const Education = () => {
    console.log("cards", Array.isArray(cards));
    return (
        <section className="education-component">
            <div className="cards">
                {cards.map(card => (
                    <div className="card">
                        <div
                            className={`side-a ${card.institution}-a card-style`}
                        >
                            <img
                                // src={`/images/${card.url}`}
                                src={card.url}
                                alt={card.institution}
                            />
                            <p>{card.period}</p>
                            <p>{card.location}</p>
                        </div>
                        <div
                            className={`side-b ${card.institution}-b card-style`}
                        >
                            <div className="v-align">
                                <div className="edu-title">
                                    <h4>{card.title}</h4>
                                </div>
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
