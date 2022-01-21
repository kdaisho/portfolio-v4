import React, { useState } from 'react'
import { connect } from 'react-redux'
import { tooling, filterItems } from './tooling-data.js'
import devIcons from '../../svg/devIcons'
import './tooling.css'

const Tooling = ({ openPane, togglePane, handleFilterChange, theme }) => {
  const [filterTerms, setFilterTerms] = useState([])

  const renderStars = num => {
    let str = ''
    for (let i = 0; i < num; i++) {
      str += String.fromCharCode(9733)
    }
    return str
  }

  return (
    <section id='toTooling' className={`section is-tooling ${theme}`}>
      <div className='content-wrap is-side-by-side'>
        <div className='left-side'>
          <div className='title-group has-filters'>
            <h2 className='title'>Tooling</h2>
            <p className='subtitle font-large'>
              Enthusiastic about JavaScript, TypeScript, Nodejs, Jest, both in
              writing and reviewing.
            </p>
          </div>
          <fieldset
            className={`filter-section ${openPane === 'tool' ? 'active' : ''}`}
          >
            <button
              className='toggle-filter outline-button'
              onClick={() => togglePane('tool')}
            >
              Filters
            </button>
            <legend>(OR) Filters</legend>
            <div className='filters'>
              {filterItems.map(item => (
                <label
                  key={item.stars}
                  className={`tag ${
                    filterTerms.includes(item.stars) ? 'active' : ''
                  }`}
                >
                  <input
                    type='checkbox'
                    name={item.type}
                    onChange={() =>
                      handleFilterChange(
                        item.stars,
                        filterTerms,
                        setFilterTerms
                      )
                    }
                  />
                  <span className='dummy'></span>
                  {item.name}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className='tooling right-side'>
          {tooling
            .filter(tool => {
              return filterTerms.length
                ? filterTerms.includes(tool.stars)
                : true
            })
            .map(tool => (
              <div key={tool.name} className='tool'>
                {devIcons[tool.name]}
                <span className='separator'></span>
                <span className='stars'>{renderStars(tool.stars)}</span>
                <p className='tool-name'>{tool.name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }) => ({
  theme,
})

export default connect(mapStateToProps)(Tooling)
