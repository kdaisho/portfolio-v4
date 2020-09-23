import React from "react";
import { connect } from "react-redux";
import cards from "./workLog-data";
import "./worklog.css";

const WorkLog = ({ theme }) => {
  return (
    <section id="toWorkLog" className={`section is-education ${theme}`}>
      <div className="content-wrap is-side-by-side">
        <div className="title-group">
          <h2 className="title">Work Log</h2>
          <p className="subtitle font-large">
            I've learned processes and best practices it takes to be an effective developer while
            working in these great teams.
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
};

const mapStateToProps = ({ theme }) => ({
  theme,
});

export default connect(mapStateToProps)(WorkLog);
