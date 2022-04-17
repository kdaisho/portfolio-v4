import React, { FunctionComponent, useState } from 'react'
import { filterItems, tooling } from './tooling-data'
import { FilterableSection } from '@src/components/types'
import { connect } from 'react-redux'
import devIcons from '../../svg/devIcons'
import './tooling.css'

const Tooling: FunctionComponent<FilterableSection> = ({
  openPane,
  togglePane,
  handleFilterChange,
  theme,
}) => {
  const [filterTerms, setFilterTerms] = useState([])

  const renderStars = (num: number) => {
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
              Enthusiastic about JavaScript, TypeScript, Nodejs, Jest. I enjoy
              both writing and reviewing.
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
                    name={item.name}
                    onChange={({ target }) =>
                      handleFilterChange({
                        target,
                        value: item.stars,
                        filterTerms,
                        setFilterTerms,
                      })
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
            .filter((tool: { name: string; stars: number }) => {
              return filterTerms.length
                ? filterTerms.includes(tool.stars)
                : true
            })
            .map(({ name, stars }) => (
              <div key={name} className='tool'>
                {devIcons[name]}
                <span className='separator'></span>
                <span className='stars'>{renderStars(stars)}</span>
                <p className='tool-name'>{name}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }: { theme: string }) => ({
  theme,
})

export default connect(mapStateToProps)(Tooling)
