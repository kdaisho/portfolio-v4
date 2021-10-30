import jsbestHero from '@src/images/projects/opt/jsbest-hero.jpg'
import jsbestThumb from '@src/images/projects/opt/jsbest-thumb.jpg'
import portfolioHero from '@src/images/projects/opt/portfolio-hero.jpg'
import portfolioThumb from '@src/images/projects/opt/portfolio-thumb.jpg'
import qc3Hero from '@src/images/projects/opt/qc3-hero.jpg'
import qc3Thumb from '@src/images/projects/opt/qc3-thumb.jpg'
import mybraillerHero from '@src/images/projects/opt/mybrailler-hero.jpg'
import mybraillerThumb from '@src/images/projects/opt/mybrailler-thumb.jpg'
import ebHero from '@src/images/projects/opt/eb-hero.jpg'
import ebThumb from '@src/images/projects/opt/eb-thumb.jpg'
import suicideHero from '@src/images/projects/opt/suicide-hero.jpg'
import suicideThumb from '@src/images/projects/opt/suicide-thumb.jpg'
import nonbreakingHero from '@src/images/projects/opt/nonbreaking-hero.jpg'
import nonbreakingThumb from '@src/images/projects/opt/nonbreaking-thumb.jpg'
import countdownHero from '@src/images/projects/opt/countdown-hero.jpg'
import countdownThumb from '@src/images/projects/opt/countdown-thumb.jpg'
import drumkitHero from '@src/images/projects/opt/drumkit-hero.jpg'
import drumkitThumb from '@src/images/projects/opt/drumkit-thumb.jpg'
import archiveHero from '@src/images/projects/opt/archive-hero.jpg'
import archiveThumb from '@src/images/projects/opt/archive-thumb.jpg'

export const projects = [
  {
    id: 0,
    title: 'JavaScriptBest',
    subtitle: 'Online Course Review App',
    description:
      'JavaScriptBest can keep your overviews of favourite online couses in one place. Built with only JavaScript from UI to backend while providing great performance thanks to nginx.',
    stack: ['nodejs', 'vanillajs', 'sass', 'live', 'mongodb'],
    hero: jsbestHero,
    thumb: jsbestThumb,
    url: '',
    githubUrl: 'https://github.com/kdaisho/javascriptbest',
  },
  {
    id: 1,
    title: 'Portofolio',
    subtitle: 'My portofolio site',
    description:
      'My portfolio is a showcase of what I do and what I\'m good at. Built with React and Nodejs (Express) without "create-react-app" black magic.',
    stack: ['react', 'nodejs', 'live', 'less'],
    hero: portfolioHero,
    thumb: portfolioThumb,
    url: 'https://daishodesign.com',
    githubUrl: 'https://github.com/kdaisho/portfolio-v4',
  },
  {
    id: 2,
    title: 'Quebec3',
    subtitle: 'CMS with Laravel',
    description:
      "Quebec3 is CMS built with PHP and Laravel from scratch. It's up and running since 2015.",
    stack: ['php', 'sass', 'live'],
    hero: qc3Hero,
    thumb: qc3Thumb,
    url: 'https://quebec3.com',
    githubUrl: 'https://github.com/kdaisho/quebec3',
  },
  {
    id: 3,
    title: 'My Brailler',
    subtitle: 'Electronic braille typewriter',
    description:
      "My Brailler is a training application for visually impaired to practice Perkins Brailler. By using My Brailler, you don't need to reach out to paper in order to check if you've made typos anymore because My Brailler can speak what you just typed.",
    stack: ['angular', 'live'],
    hero: mybraillerHero,
    thumb: mybraillerThumb,
    url: '',
    githubUrl: 'https://github.com/kdaisho/brailler',
  },
  {
    id: 4,
    title: 'Email Builder',
    subtitle: 'HTML email builder for non-coders',
    description:
      'Email Builder was originally built just for myself in order to spend less time on building HTML emails and more time on site updates. It reduces time from 50 minutes to 7 minutes on average per single email. Email Builder also enables non-coders build HTML email all by themselves. Built with Angular 4x.',
    stack: ['angular', 'regex'],
    hero: ebHero,
    thumb: ebThumb,
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
    hero: suicideHero,
    thumb: suicideThumb,
    url: 'https://kdaisho.github.io/Infographic/',
    githubUrl: 'https://github.com/kdaisho/Infographic',
  },
  {
    id: 6,
    title: 'Non-breaking Injector',
    subtitle: 'Save you time from French grammar police',
    description:
      'Non-breaking Injector auto-inserts non-breakins space (as HTML entity) into where French grammar requires (i.e. 30 %)',
    stack: ['vanillajs', 'less', 'regex'],
    hero: nonbreakingHero,
    thumb: nonbreakingThumb,
    url: 'https://kdaisho.github.io/French-Formatter/',
    githubUrl: 'https://github.com/kdaisho/Infographic',
  },
  {
    id: 7,
    title: 'Global Countdown Timer Widget',
    subtitle: 'Everybody ends at the same time anywhere on earth',
    description:
      'Global Countdown Timer allows you to implement a countdown widget that displays the same hours in different time zones without server setup. Implementation is a walk in the park to all level of Front-end devs.',
    stack: ['vanillajs'],
    hero: countdownHero,
    thumb: countdownThumb,
    url: 'https://kdaisho.github.io/Countdown/',
    githubUrl: 'https://github.com/kdaisho/Countdown',
  },
  {
    id: 8,
    title: 'Japanese Drum Kit',
    subtitle: 'Just a simple fun project',
    description:
      'Japanese Drum Kit is a simple fun project. Built with vanilla JS.',
    stack: ['vanillajs', 'live'],
    hero: drumkitHero,
    thumb: drumkitThumb,
    url: 'https://kdaisho.github.io/Japan_Sound_Board/',
    githubUrl: 'https://github.com/kdaisho/Japan_Sound_Board',
  },
  {
    id: 9,
    title: 'Archive Everything',
    subtitle: 'Archiving tool using file system',
    description:
      'Archive Everithing is a documentation tool built with Nodejs and React. It provides command-line interface to help initial setup. Data is persisitent using file system so this can be handy in a workplace where you handle sensitive information or just for self documentation.',
    stack: ['nodejs', 'react'],
    hero: archiveHero,
    thumb: archiveThumb,
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
