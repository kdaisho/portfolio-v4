import { Desktop, Github } from '@src/svg/Icons'
import React, { FunctionComponent, useState } from 'react'
import { filterItems, projects } from '@src/components/projects/projects-data'
import { FilterableSection } from '@src/components/types'
import { MODAL_DURATION } from '@src/components/constants'
import Modal from '@src/components/modal/Modal'
import { Project } from './types'
import { Theme } from '@src/components/types'
import { connect } from 'react-redux'
import './projects.css'

const Projects: FunctionComponent<FilterableSection> = ({
  openPane,
  togglePane,
  handleFilterChange,
  theme,
}) => {
  const [filterTerms, setFilterTerms] = useState<string[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeCardId, setActiveCardId] = useState<number | null>(null)

  const showModal = (props: Project) => {
    if (props) {
      setActiveCardId(props.id)
      setTimeout(() => {
        setSelectedProject(props)
      }, MODAL_DURATION)
    }
  }

  const hideModal = () => {
    setActiveCardId(null)
    setSelectedProject(null)
  }

  const isIncludes = (stack: string[], filterTerms: string[]) => {
    let counter = 0
    for (let i = 0; i < filterTerms.length; i++) {
      stack.includes(filterTerms[i]) ? counter++ : ''
    }
    return filterTerms.length === counter ? true : false
  }

  return (
    <section id='toSideProjects' className={`section is-projects ${theme}`}>
      <div className='content-wrap is-side-by-side'>
        <div className='right-side'>
          <div className='title-group has-filters'>
            <h2 className='title'>Side Projects</h2>
            <p className='subtitle font-large'>
              Getting my hands dirty with technologies I don't have a chance to
              work within my day job helps me stay up to date.
            </p>
          </div>
          <fieldset
            className={`filter-section ${
              openPane === 'projects' ? 'active' : ''
            }`}
          >
            <button
              className='toggle-filter outline-button'
              onClick={() => togglePane('projects')}
            >
              Filters
            </button>
            <legend>(AND) Filters</legend>
            <div className='filters'>
              {filterItems.map(item => (
                <label
                  key={item.tech}
                  className={`tag ${
                    filterTerms.includes(item.tech) ? 'active' : ''
                  }`}
                >
                  <input
                    type='checkbox'
                    name={item.tech}
                    onChange={({ target }) =>
                      handleFilterChange({
                        target,
                        value: item.tech,
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
        <div className='cards left-side'>
          {projects
            .filter(project =>
              filterTerms.length ? isIncludes(project.stack, filterTerms) : true
            )
            .map(project => (
              <div
                key={project.id}
                className={`card ${
                  activeCardId === project.id ? 'active' : ''
                }`}
                onClick={() => showModal(project)}
                role='button'
                onKeyPress={() => {}}
                tabIndex={0}
              >
                <div
                  className='top'
                  style={{
                    background: `#444 url(${project.thumb}) no-repeat center`,
                    backgroundSize: 'cover',
                  }}
                >
                  <div className='glass'></div>
                </div>

                <div className='bottom'>
                  <div className='text-group'>
                    <h2 className='title'>{project.title}</h2>
                    <span className='separator'></span>
                    <p className='desc'>{project.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {!!Object.keys(selectedProject || {}).length && (
          <Modal>
            <div
              className='backdrop'
              onClick={hideModal}
              role='button'
              onKeyPress={() => {}}
              tabIndex={0}
            >
              <div
                className='project-details bit-style active'
                onClick={event => event.stopPropagation()}
                role='button'
                onKeyPress={() => {}}
                tabIndex={0}
              >
                <div
                  className='top'
                  style={{
                    background: `#666 url(${selectedProject?.hero})`,
                    backgroundSize: 'cover',
                  }}
                ></div>
                <div className='bottom'>
                  <div className='text-group'>
                    <h1 className='title'>{selectedProject?.title}</h1>
                    <p className='subtitle'>{selectedProject?.subtitle}</p>
                    <p className='description'>
                      {selectedProject?.description}
                    </p>
                    <div className='links'>
                      {selectedProject?.url && (
                        <a
                          href={selectedProject?.url}
                          title={selectedProject?.title}
                          className='link is-desktop-icon'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {Desktop()} Visit The Website
                        </a>
                      )}
                      {selectedProject?.githubUrl && (
                        <a
                          href={selectedProject?.githubUrl}
                          title={`${selectedProject?.title} github repository`}
                          className='link is-github-icon'
                          target='_blank'
                          rel='noopener noreferrer'
                        >
                          {Github()}View Github Repo
                        </a>
                      )}
                    </div>
                  </div>
                  <div className='tech-stack'>
                    {selectedProject?.stack.map(tech => {
                      return tech === 'live' ? (
                        false
                      ) : (
                        <span key={tech} className='tech'>
                          {tech}
                        </span>
                      )
                    })}
                  </div>
                  <button className='close' onClick={hideModal}>
                    &#10005;
                  </button>
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }: Theme) => ({
  theme,
})

export default connect(mapStateToProps)(Projects)
