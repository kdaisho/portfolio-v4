import React, { useState } from "react";
import { connect } from "react-redux";
import { toolset, filterItems } from "./toolset-data.js";
import icons from "../../svg/devIcons";
import "./toolset.css";

const Toolset = ({ openPane, togglePane, handleFilterChange, theme }) => {
  const [filterTerms, setFilterTerms] = useState([]);

  const renderStars = (num) => {
    let str = "";
    for (let i = 0; i < num; i++) {
      str += String.fromCharCode(9733);
    }
    return str;
  };

  return (
    <section id="toToolset" className={`section is-toolset ${theme}`}>
      <div className="content-wrap is-side-by-side">
        <div className="left-side">
          <div className="title-group has-filters">
            <h2 className="title">Toolset</h2>
            <p className="subtitle font-large">
              My current toolset includes JavaScript and other various frameworks, libraries and
              technologies related to it.
              <br />
              <span className="star">{String.fromCharCode(9733)}</span> == experience
            </p>
          </div>
          <fieldset className={`filter-section ${openPane === "tool" ? "active" : ""}`}>
            <button className="toggle-filter outline-button" onClick={() => togglePane("tool")}>
              Filters
            </button>
            <legend>(OR) Filters</legend>
            <div className="filters">
              {filterItems.map((item) => (
                <label
                  key={item.type}
                  className={`tag ${filterTerms.includes(item.type) ? "active" : ""}`}
                >
                  <input
                    type="checkbox"
                    name={item.type}
                    onChange={() => handleFilterChange(item.type, filterTerms, setFilterTerms)}
                  />
                  <span className="dummy"></span>
                  {item.name}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="toolset right-side">
          {toolset
            .filter((tool) => {
              return filterTerms.length ? filterTerms.includes(tool.genre) : true;
            })
            .map((tool) => (
              <div key={tool.id} className="tool">
                {icons[tool.id]}
                <span className="separator"></span>
                <span className="stars">{renderStars(tool.stars)}</span>
                <p className="tool-name">{tool.name}</p>
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

export default connect(mapStateToProps)(Toolset);
