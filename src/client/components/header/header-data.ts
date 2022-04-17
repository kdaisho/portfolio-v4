import githubIcon from '../../images/nav/github-opt.svg'
import linkedinIcon from '../../images/nav/linkedin-opt.svg'

const socials = [
  {
    src: linkedinIcon,
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/daisho-komiyama-6766657a/',
  },
  {
    src: githubIcon,
    name: 'github',
    url: 'https://github.com/kdaisho',
  },
]

const menuItems = [
  {
    name: 'Work Log',
    id: 'toWorkLog',
  },
  {
    name: 'Tooling',
    id: 'toTooling',
  },
  {
    name: 'Side Projects',
    id: 'toSideProjects',
  },
  {
    name: 'Contact',
    id: 'toContact',
  },
]

export { socials, menuItems }
