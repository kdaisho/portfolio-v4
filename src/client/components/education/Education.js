import React from "react";
import cards from "./cards";
import "./education.css";

const Education = () => {
    console.log("cards", Array.isArray(cards));
    return (
        <section className="education-component">
            <h2 className="section-title">Education</h2>
            <div className="cards">
                {cards.map((card) => (
                    <div key={card.institution} className="card">
                        <div className={`side-a ${card.institution} card-style`}>
                            <img src={card.url} alt={card.institution} />
                            <p>{card.period}</p>
                            <p>{card.location}</p>
                        </div>
                        <div className={`side-b ${card.institution} card-style`}>
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
