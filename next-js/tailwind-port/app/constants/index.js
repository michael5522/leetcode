import { facebook, instagram, shieldTick, support, truckFast, twitter, city, email, phone } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

import { bootstrap, css3, express, html, javascript, jquery, next, node, postgresql, reactIMG , styled, tailwind } from "../assets/logos";
export const logos = [
  {
    imgURL: javascript,
    name: "JavaScript",
    href: "https://www.javascript.com/"
  },
  {
    imgURL: html,
    name: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
  },
  {
    imgURL: css3,
    name: "CSS",
    href: "https://www.w3schools.com/html/html_css.asp"
  },
  {
    imgURL: reactIMG,
    name: "React",
    href: "https://react.dev/"
  },
  {
    imgURL: node,
    name: "Node.js",
    href: "https://nodejs.org/en"
  },
  {
    imgURL: express,
    name: "Express",
    href: "https://expressjs.com/"
  },
  {
    imgURL: tailwind,
    name: "Tailwind",
    href: "https://tailwindcss.com/"
  },
  {
    imgURL: postgresql,
    name: "Postgresql",
    href: "https://www.postgresql.org/"
  },
  {
    imgURL: next,
    name: "NextJS",
    href: "https://nextjs.org/"
  },
  {
    imgURL: styled,
    name: "Styled Component",
    href: "https://styled-components.com/docs/basics"
  },
  {
    imgURL: bootstrap,
    name: "Bootstrap",
    href: "https://getbootstrap.com/"
  },
  {
    imgURL: jquery,
    name: "jQuery",
    href: "https://jquery.com/"
  }
]

import { aws, babel, git, github, npmImg, slack, vscode, webpack} from "../assets/tools-images";
export const toolimages = [
  {
    imgURL: aws,
    name: "AWS",
    href:"https://aws.amazon.com/"
  },
  {
    imgURL: babel,
    name: "Babel",
    href: "https://babeljs.io/"
  },
  {
    imgURL: git,
    name: "Git",
    href: "https://git-scm.com/"
  },
  {
    imgURL: github,
    name: "Github",
    href: "https://github.com/"
  },
  {
    imgURL: npmImg,
    name: "npm",
    href: "https://www.npmjs.com/"
  },
  {
    imgURL: slack,
    name: "Slack",
    href: "https://www.npmjs.com/"
  },
  {
    imgURL: vscode,
    name: "VSCode",
    href: "https://code.visualstudio.com/"
  },
  {
    imgURL: webpack,
    name: "Webpack",
    href: "https://webpack.js.org/"
  }
]

import { desktopquote, desktopwedding, mobilequote, mobilewedding, dMobile, dDesktop } from "../assets/project-images";
export const projectInfo = [
  {
    thumbnail: mobilequote,
    bigImage: desktopquote,
    title: "Supurb Quote",
    stack: "#html #css #javascript #ajax",
    desc: "A custom quote generating website that allows users to receive personally catered quotes. User has the ability to generate random quotes or select their own using various API endpoints via AJAX using XMLHttpRequests",
    href: "https://michael5522.github.io/supurb-quotes/"
  },
  {
    thumbnail: mobilewedding,
    bigImage: desktopwedding,
    title: "A-List Wedding",
    stack: "#reactjs #bootstrap #postgreSQL #nodejs #express",
    desc: "A mobile responsive full stack application using ReactJS to give users the tools to plan their wedding. Designed wireframes using Figma and database schema to provide functionality and database structure. User login and data stored in secure PostgreSQL database.",
    href: "https://a-list-wedding.michaelkchang.com/"
  },
  {
    thumbnail: dMobile,
    bigImage: dDesktop,
    title: "Random BCE",
    stack: "#nextjs #tailwindcss",
    desc: "Using the latest next.js and tailwind css to create this portfolio website",
    href: "https://tailwindcss.com/docs/border-radius"
  }
]

export const footerInfo = [
  {
    info: "Orange County",
    pic: email,
    link: "https://www.google.com/maps/place/Orange+County,+CA/@33.6410077,-118.0496294,10z/data=!3m1!4b1!4m5!3m4!1s0x80dc925c54d5f7cf:0xdea6c3618ff0d607!8m2!3d33.7174708!4d-117.8311428"
  },
  {
    info: "michaelkuochang@gmail.com",
    pic: phone,
    link: "mailto:michaelkuochang@gmail.com"
  },
  {
    info: "949-276-1910",
    pic: city,
    link: "tel:949-276-1910"
  },
]
