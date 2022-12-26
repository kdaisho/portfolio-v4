import { ChangeThemeProps, Theme } from '@src/components/types'
import React, { FunctionComponent, useEffect } from 'react'
import { menuItems, socials } from './header-data'
import { Logo } from '@src/svg/Icons'
import changeTheme from '@src/actionCreators/changeTheme'
import { connect } from 'react-redux'
import menuClose from '@src/images/nav/menu-close-opt.svg'
import menuDots from '@src/images/nav/menu-dots-opt.svg'
import './header.css'

type HeaderProps = {
  togglePane: (target: string) => void
  openPane: string
  scrollTo: (id: string) => void
  theme: string
  changeTheme: (theme: string) => void
}

const Header: FunctionComponent<HeaderProps> = ({
  togglePane,
  openPane,
  scrollTo,
  theme,
  changeTheme,
}) => {
  useEffect(() => {
    const siteTheme = localStorage.getItem('siteTheme')
    if (siteTheme && siteTheme !== theme) {
      changeTheme(siteTheme)
    }
  }, [])

  const handleTheme = () => {
    const newTheme = theme === 'bright' ? 'dark' : 'bright'
    changeTheme(newTheme)
    localStorage.setItem('siteTheme', newTheme)
  }

  return (
    <header
      className={`header ${theme} ${openPane === 'menu' ? 'high-z-index' : ''}`}
      data-host-location={window.parent?.location}
      data-host-location-origin={window.parent?.location?.origin}
      data-current-location={window.location}
    >
      <div className='content-wrap nav'>
        <div className='nav-left'>
          <button className='logo' onClick={() => scrollTo('pageTop')}>
            <Logo />
          </button>
        </div>
        <div id='navRight' className='nav-right'>
          <ul className='social-links'>
            {socials.map(item => (
              <li key={item.name} className='social-each'>
                <a
                  href={item.url}
                  title={item.name}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <img src={item.src} alt={item.name} />
                </a>
              </li>
            ))}
          </ul>
          <button
            className='menu-toggle outline-button'
            onClick={() => togglePane('menu')}
          >
            <img
              src={openPane === 'menu' ? menuClose : menuDots}
              alt={`${openPane === 'menu' ? 'close' : 'open'} menu`}
            />
          </button>
          <div className={`menu-pane ${openPane === 'menu' ? 'active' : ''}`}>
            {menuItems.map(item => (
              <button
                key={item.name}
                className='button has-shadow is-menu-item'
                onClick={() => scrollTo(item.id)}
              >
                {item.name}
              </button>
            ))}
            <div className='theme-button'>
              <button onClick={handleTheme}>
                {theme === 'bright' ? '🌙' : '☀️'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

const mapStateToProps = ({ theme }: Theme) => ({
  theme,
})

const mapDispatchToProps = (
  dispatch: (arg: ChangeThemeProps) => { payload: string }
) => ({
  changeTheme: (theme: string) => dispatch(changeTheme(theme)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
