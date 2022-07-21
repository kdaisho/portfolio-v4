import React, { FunctionComponent, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import cat from '@src/images/hero/cat-body-opt.svg'
import catAction from '@src/images/hero/cat-actions-opt.svg'
import { Theme } from '@src/components/types'
import './hero.css'

const Hero: FunctionComponent<{ theme: string }> = ({ theme }) => {
  const [animation, setAnimation] = useState(true)
  const [innerWidth, setInnerWidth] = useState(0)
  const options = {
    passive: true,
    capture: true,
  }

  useEffect(() => {
    setTimeout(() => setAnimation(false), 5000)
    addEventListener('load', handleResize, options)
    addEventListener('resize', handleResize, options)

    return () => {
      window.removeEventListener('load', handleResize, options)
      window.removeEventListener('resize', handleResize, options)
    }
  }, [window.innerWidth])

  const handleResize = () => {
    setInnerWidth(window.innerWidth)
  }

  const renderGreetings = () => {
    return (
      <div className={`greetings-wrap ${animation ? 'slide' : ''}`}>
        <div className='clip-path'></div>
        <p className='greetings'>
          Hi, my name's Daisho Komiyama and I'm a software development engineer
          based in Montreal with {new Date().getFullYear() - 2014} years of
          experience. Enthusiastic about JavaScript, TypeScript and Node.js. I'm
          an effective developer who ships clean code regularly.
        </p>
      </div>
    )
  }

  return (
    <section id='pageTop' className={`is-hero ${theme}`}>
      <div className='content-wrap is-side-by-side'>
        <div className='left-side'>
          <div className='typewriter'>
            <h1>Who am I?</h1>
          </div>
        </div>
        <div className='right-side' style={{ backgroundImage: `url(${cat})` }}>
          <div
            className='sequence'
            style={{ background: `url(${catAction}) 0 0 no-repeat` }}
          ></div>
          {innerWidth >= 769 && renderGreetings()}
        </div>
        {innerWidth <= 768 && renderGreetings()}
      </div>
    </section>
  )
}

const mapStateToProps = ({ theme }: Theme) => ({
  theme,
})

export default connect(mapStateToProps)(Hero)
