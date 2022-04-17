import { Project } from './types'
import archiveHero from '@src/images/projects/opt/archive-hero.jpg'
import archiveThumb from '@src/images/projects/opt/archive-thumb.jpg'
import countdownHero from '@src/images/projects/opt/countdown-hero.jpg'
import countdownThumb from '@src/images/projects/opt/countdown-thumb.jpg'
import drumkitHero from '@src/images/projects/opt/drumkit-hero.jpg'
import drumkitThumb from '@src/images/projects/opt/drumkit-thumb.jpg'
import ebHero from '@src/images/projects/opt/eb-hero.jpg'
import ebThumb from '@src/images/projects/opt/eb-thumb.jpg'
import jsbestHero from '@src/images/projects/opt/jsbest-hero.jpg'
import jsbestThumb from '@src/images/projects/opt/jsbest-thumb.jpg'
import mybraillerHero from '@src/images/projects/opt/mybrailler-hero.jpg'
import mybraillerThumb from '@src/images/projects/opt/mybrailler-thumb.jpg'
import nonbreakingHero from '@src/images/projects/opt/nonbreaking-hero.jpg'
import nonbreakingThumb from '@src/images/projects/opt/nonbreaking-thumb.jpg'
import portfolioHero from '@src/images/projects/opt/portfolio-hero.jpg'
import portfolioThumb from '@src/images/projects/opt/portfolio-thumb.jpg'
import qc3Hero from '@src/images/projects/opt/qc3-hero.jpg'
import qc3Thumb from '@src/images/projects/opt/qc3-thumb.jpg'
import suicideHero from '@src/images/projects/opt/suicide-hero.jpg'
import suicideThumb from '@src/images/projects/opt/suicide-thumb.jpg'

export const projects: Project[] = [
  {
    id: 0,
    title: 'JavaScriptBest',
    subtitle: 'Online Course Review App',
    description:
      'JavaScriptBest can keep your overviews of favourite online couses in one place. Built with only JavaScript from UI to backend while providing great performance thanks to nginx.',
    stack: ['nodejs', 'handlebars', 'sass', 'live', 'mongodb'],
    hero: jsbestHero as string,
    thumb: jsbestThumb as string,
    url: '',
    githubUrl: 'https://github.com/kdaisho/javascriptbest',
  },
  {
    id: 1,
    title: 'Portofolio',
    subtitle: 'My portofolio',
    description:
      "A showcase of what I do and I'm good at. Built with React for UI and Nodejs for mail service. No scaffolding from create-react-app.",
    stack: ['react', 'nodejs', 'live', 'less'],
    hero: portfolioHero as string,
    thumb: portfolioThumb as string,
    url: 'https://daishodesign.com',
    githubUrl: 'https://github.com/kdaisho/portfolio-v4',
  },
  {
    id: 2,
    title: 'Quebec3',
    subtitle: 'Blog',
    description:
      'Quebec3 is a blog built with Gatsby: a static site generator. Super light, super fast.',
    stack: ['gatsby', 'react', 'graphql', 'live'],
    hero: qc3Hero as string,
    thumb: qc3Thumb as string,
    url: 'https://quebec3.com',
    githubUrl: 'https://github.com/kdaisho/quebec3-v2',
  },
  {
    id: 3,
    title: 'My Brailler',
    subtitle: 'Electronic braille typewriter',
    description:
      "My Brailler is a training application for the visually impaired who uses Perkins brailler. Traditional Perkins brailler can't tell the user when they make a typo. My Brailler does as it speaks!",
    stack: ['angular'],
    hero: mybraillerHero as string,
    thumb: mybraillerThumb as string,
    url: '',
    githubUrl: 'https://github.com/kdaisho/brailler',
  },
  {
    id: 4,
    title: 'Email Builder',
    subtitle: 'HTML email builder for someone busy',
    description:
      'Once I worked for a company that required me to do many HTML emails and website updates. Building emails was easy, but it was redundant and time-consuming; I had little time for other stuff. So I built this. The average time for making a single email was reduced from 50 min to 7 min.',
    stack: ['angular', 'regex'],
    hero: ebHero as string,
    thumb: ebThumb as string,
    url: '',
    githubUrl: '',
  },
  {
    id: 5,
    title: 'Suicide in Japan',
    subtitle: 'Data visualization for a Halloween project',
    description:
      "Suicide in Japan is an infographic inspired by Japan's high suicide rate. Built with plain HTML and CSS Grid.",
    stack: ['cssGrid', 'live'],
    hero: suicideHero as string,
    thumb: suicideThumb as string,
    url: 'https://kdaisho.github.io/Infographic/',
    githubUrl: 'https://github.com/kdaisho/Infographic',
  },
  {
    id: 6,
    title: 'French Formatter',
    subtitle: 'Saves you from French grammar police',
    description:
      'French Formatter inserts a non-breaking space (&ngsp;) where French grammar requires. (i.e., 30&ngsp;%) Humans are not good at this type of repetition. Let computers do.',
    stack: ['vanillajs', 'less', 'regex'],
    hero: nonbreakingHero as string,
    thumb: nonbreakingThumb as string,
    url: 'https://kdaisho.github.io/French-Formatter/',
    githubUrl: 'https://github.com/kdaisho/Infographic',
  },
  {
    id: 7,
    title: 'Global Countdown Timer',
    subtitle: 'Everybody ends at the same time anywhere on earth',
    description:
      "Global Countdown Timer lets you quickly implement a countdown widget for your applications. It is battle-tested by one of the major Canadian apparel retailers. It's best for advertising limited-time offers; it displays the same hours regardless of different time zones. It doesn't require API support; stand-alone.",
    stack: ['vanillajs'],
    hero: countdownHero as string,
    thumb: countdownThumb as string,
    url: 'https://kdaisho.github.io/Countdown/',
    githubUrl: 'https://github.com/kdaisho/Countdown',
  },
  {
    id: 8,
    title: 'Japanese Drum Kit',
    subtitle: 'For fun',
    description: 'A simple fun project. Built with vanilla JavaScript.',
    stack: ['vanillajs', 'live'],
    hero: drumkitHero as string,
    thumb: drumkitThumb as string,
    url: 'https://kdaisho.github.io/japan-sound-board/',
    githubUrl: 'https://github.com/kdaisho/japan-sound-board',
  },
  {
    id: 9,
    title: 'Archive Everything',
    subtitle: 'Archiving tool using file system',
    description:
      "Archive Everything is a documentation tool built with Nodejs and React. It provides a command-line interface to help initial setup. Data is persistent using a local file system, so it's best for a workplace where you handle sensitive information or just for self-documentation.",
    stack: ['nodejs', 'react'],
    hero: archiveHero as string,
    thumb: archiveThumb as string,
    url: '',
    githubUrl: 'https://github.com/kdaisho/archiving-app',
  },
]

export const filterItems: { name: string; tech: string }[] = [
  {
    name: 'Live',
    tech: 'live',
  },
  {
    name: 'VanillaJs',
    tech: 'vanillajs',
  },
  {
    name: 'Nodejs',
    tech: 'nodejs',
  },
  {
    name: 'React',
    tech: 'react',
  },
  {
    name: 'Angular',
    tech: 'angular',
  },
  {
    name: 'Sass',
    tech: 'sass',
  },
  {
    name: 'Less',
    tech: 'less',
  },
  {
    name: 'Css Grid',
    tech: 'cssGrid',
  },
  {
    name: 'PHP',
    tech: 'php',
  },
  {
    name: 'mongoDB',
    tech: 'mongodb',
  },
]
