import jsbestHero from "../../images/projects/opt/jsbest-hero.jpg";
import jsbestThumb from "../../images/projects/opt/jsbest-thumb.jpg";
import portfolioHero from "../../images/projects/opt/portfolio-hero.jpg";
import portfolioThumb from "../../images/projects/opt/portfolio-thumb.jpg";
import qc3Hero from "../../images/projects/opt/qc3-hero.jpg";
import qc3Thumb from "../../images/projects/opt/qc3-thumb.jpg";
import mybraillerHero from "../../images/projects/opt/mybrailler-hero.jpg";
import mybraillerThumb from "../../images/projects/opt/mybrailler-thumb.jpg";
import ebHero from "../../images/projects/opt/eb-hero.jpg";
import ebThumb from "../../images/projects/opt/eb-thumb.jpg";
import suicideHero from "../../images/projects/opt/suicide-hero.jpg";
import suicideThumb from "../../images/projects/opt/suicide-thumb.jpg";
import nonbreakingHero from "../../images/projects/opt/nonbreaking-hero.jpg";
import nonbreakingThumb from "../../images/projects/opt/nonbreaking-thumb.jpg";
import countdownHero from "../../images/projects/opt/countdown-hero.jpg";
import countdownThumb from "../../images/projects/opt/countdown-thumb.jpg";
import drumkitHero from "../../images/projects/opt/drumkit-hero.jpg";
import drumkitThumb from "../../images/projects/opt/drumkit-thumb.jpg";
import archiveHero from "../../images/projects/opt/archive-hero.jpg";
import archiveThumb from "../../images/projects/opt/archive-thumb.jpg";

export const projects = [
    {
        id: 0,
        title: "JavaScriptBest",
        subtitle: "Online Course Review App",
        description:
            "JavaScriptBest can keep your overviews of favourite online couses in one place. Built with only JavaScript from UI to backend while providing great performance thans to nginx.",
        stack: ["nodejs", "vanillajs", "live", "mongodb"],
        hero: jsbestHero,
        thumb: jsbestThumb,
        url: "https://javascriptbest.com"
    },
    {
        id: 1,
        title: "Portofolio",
        subtitle: "My portofolio site",
        description:
            'My portfolio is a showcase of what I do and what I\'m good at. Built with React and Nodejs (Express) without "create-react-app" black magic.',
        stack: ["react", "nodejs", "live", "less"],
        hero: portfolioHero,
        thumb: portfolioThumb,
        url: "https://daishodesign.com"
    },
    {
        id: 2,
        title: "Quebec3",
        subtitle: "CMS with Laravel",
        description:
            "Quebec3 is CMS built with PHP and Laravel from scratch. It's up and running since 2015.",
        stack: ["php", "sass", "live"],
        hero: qc3Hero,
        thumb: qc3Thumb,
        url: "https://quebec3.com"
    },
    {
        id: 3,
        title: "My Brailler",
        subtitle: "Electronic braille typewriter",
        description:
            "My Brailler is a training application for visually impaired to practice Perkins Brailler. By using My Brailler, you don't need to reach out to paper in order to check if you've made typos anymore because My Brailler can speak what you just typed.",
        stack: ["angular", "live"],
        hero: mybraillerHero,
        thumb: mybraillerThumb,
        url: "https://mybrailler.com"
    },
    {
        id: 4,
        title: "Email Builder",
        subtitle: "HTML email builder for non-coders",
        description:
            "Email Builder was originally built just for myself to cheat while I was assiged a bunch of emails everyday in previous workplace. But found out Email Builder can help non-coders build HTML email all by themselves. Building email is basically filling a template with different contents (text and images). This boring task should be automated",
        stack: ["angular"],
        hero: ebHero,
        thumb: ebThumb,
        url: ""
    },
    {
        id: 5,
        title: "Suicide in Japan",
        subtitle: "Beatiful visualization for beautiful country",
        description:
            "So I have my version of the game up here. So if you click this and open it, our game is gonna look something like this. Which looks really nice, right? It's got buttons that work, just like you know how the Tamagotchi had three buttons, and it was really annoying, and the worst UX ever.",
        stack: ["cssGrid", "live"],
        hero: suicideHero,
        thumb: suicideThumb,
        url: "https://kdaisho.github.io/Infographic/"
    },
    {
        id: 6,
        title: "Non-breaking Injector",
        subtitle: "Sick of '&nbsp;' by hand?",
        description:
            "So I have my version of the game up here. So if you click this and open it, our game is gonna look something like this. Which looks really nice, right? It's got buttons that work, just like you know how the Tamagotchi had three buttons, and it was really annoying, and the worst UX ever.",
        stack: ["vanillajs", "less"],
        hero: nonbreakingHero,
        thumb: nonbreakingThumb,
        url: "https://kdaisho.github.io/French-Formatter/"
    },
    {
        id: 7,
        title: "Global Countdown Timer",
        subtitle: "Everybody ends at the same time anywhere on earth",
        description:
            "So I have my version of the game up here. So if you click this and open it, our game is gonna look something like this. Which looks really nice, right? It's got buttons that work, just like you know how the Tamagotchi had three buttons, and it was really annoying, and the worst UX ever.",
        stack: ["vanillajs"],
        hero: countdownHero,
        thumb: countdownThumb,
        url: "https://github.com/kdaisho/Countdown"
    },
    {
        id: 8,
        title: "Japanese Drum Kit",
        subtitle: "Just a simple fun project",
        description:
            "So I have my version of the game up here. So if you click this and open it, our game is gonna look something like this. Which looks really nice, right? It's got buttons that work, just like you know how the Tamagotchi had three buttons, and it was really annoying, and the worst UX ever.",
        stack: ["vanillajs", "live"],
        hero: drumkitHero,
        thumb: drumkitThumb,
        url: "https://kdaisho.github.io/Japan_Sound_Board/"
    },
    {
        id: 9,
        title: "Archive Everything",
        subtitle: "Archiving tool using file system",
        description:
            "So I have my version of the game up here. So if you click this and open it, our game is gonna look something like this. Which looks really nice, right? It's got buttons that work, just like you know how the Tamagotchi had three buttons, and it was really annoying, and the worst UX ever.",
        stack: ["nodejs", "react"],
        hero: archiveHero,
        thumb: archiveThumb,
        url: ""
    }
];

export const filterItems = [
    {
        name: "Live",
        tech: "live"
    },
    {
        name: "VanillaJs",
        tech: "vanillajs"
    },
    {
        name: "Nodejs",
        tech: "nodejs"
    },
    {
        name: "React",
        tech: "react"
    },
    {
        name: "Angular",
        tech: "angular"
    },
    {
        name: "Sass",
        tech: "sass"
    },
    {
        name: "Less",
        tech: "less"
    },
    {
        name: "Css Grid",
        tech: "cssGrid"
    },
    {
        name: "PHP",
        tech: "php"
    },
    {
        name: "mongoDB",
        tech: "mongodb"
    }
];
