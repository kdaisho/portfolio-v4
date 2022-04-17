import React, { useEffect, useState } from 'react'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import WorkLog from './components/workLog/WorkLog'
import Tooling from './components/tooling/Tooling'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ReactGA from 'react-ga4'
import './app.css'

const App = () => {
  const [openPane, setOpenPane] = useState('')

  useEffect(() => {
    ReactGA.initialize('G-KC8D7SR0BP')
    ReactGA.send('pageview')
  }, [])

  const togglePane = name => {
    setOpenPane(openPane ? '' : name)
  }

  const scrollTo = destinationId => {
    const button = event.target
    button.classList.add('active')
    setTimeout(() => button.classList.remove('active'), 150)
    document
      .getElementById(destinationId)
      .scrollIntoView({ behavior: 'smooth' })
  }

  const handleFilterChange = ({
    target,
    value,
    filterTerms,
    setFilterTerms,
  }) => {
    const copy = [...filterTerms]
    if (target.checked) {
      setFilterTerms(prevFilterWords => [...prevFilterWords, value])
    } else {
      const index = filterTerms.indexOf(value)
      if (index >= 0) {
        copy.splice(index, 1)
        setFilterTerms(copy)
      }
    }
  }

  return (
    <div className='component-wrap'>
      {openPane && (
        <div className='backdrop' onClick={() => togglePane(openPane)}></div>
      )}
      <Header togglePane={togglePane} openPane={openPane} scrollTo={scrollTo} />
      <Hero />
      <WorkLog />
      <Tooling
        togglePane={togglePane}
        openPane={openPane}
        handleFilterChange={handleFilterChange}
      />
      <Projects
        togglePane={togglePane}
        openPane={openPane}
        handleFilterChange={handleFilterChange}
      />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
