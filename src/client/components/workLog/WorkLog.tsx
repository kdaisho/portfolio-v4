import React, { FunctionComponent } from 'react'
import { Theme } from '@src/components/types'
import cards from './workLog-data'
import { connect } from 'react-redux'
import './worklog.css'

type cardProps = {
  id: string
  company: string
  period: string
  title: string
  location: string
  what: string
  tasks: string[]
  techStack: string[]
}

const WorkLog: FunctionComponent<{ theme: string }> = ({ theme }) => {
  return (
    <section id='toWorkLog' className={`section is-education ${theme}`}>
      <div className='content-wrap is-side-by-side'>
        <div className='title-group'>
          <h2 className='title'>Work Log</h2>
          <p className='subtitle font-large'>
            I've learned processes and best practices it takes to be an
            effective developer while working in these great teams.
          </p>
        </div>
        <div className='cards'>
          {cards.map((card: cardProps) => (
            <div key={card.id} className='card'>
              <div className='side is-front'>
                <h2 className='company'>{card.company}</h2>
                <div className='summary'>
                  <h3 className='position'>{card.title}</h3>
                  <span className='separator'></span>
                  <p>{card.period}</p>
                  <p>{card.location}</p>
                </div>
              </div>
              <div className='side is-back'>
                <div className='list'>
                  <p>{card.what}</p>
                  <ul>
                    {card.tasks.map(task => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div className='list'>
                  <p>Using</p>
                  <ul>
                    {card.techStack.map(tech => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }: Theme) => ({
  theme,
})

export default connect(mapStateToProps)(WorkLog)
