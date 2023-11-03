import { facebook, instagram, shieldTick, support, truckFast, twitter } from "../assets/icons";
import { bigShoe1, bigShoe2, bigShoe3, customer1, customer2, shoe4, shoe5, shoe6, shoe7, thumbnailShoe1, thumbnailShoe2, thumbnailShoe3 } from "../assets/images";
export const navLinks = [
  { href: "#about-me", label: "About Me" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "$200.20",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "$210.20",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "$220.20",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "$230.20",
  }
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service."
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext: "Experience worry-free transactions with our secure payment options."
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way."
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: 'Morich Brown',
    rating: 4.5,
    feedback: "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!"
  },
  {
    imgURL: customer2,
    customerName: 'Lota Mongeskar',
    rating: 4.5,
    feedback: "The product not only met but exceeded my expectations. I'll definitely be a returning customer!"
  }
];


export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
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
    bigShoe: desktopquote,
    title: "Supurb Quote",
    stack: "#html #css #javascript #ajax",
    desc: "A custom quote generating website that allows users to receive personally catered quotes. User has the ability to generate random quotes or select their own using various API endpoints via AJAX using XMLHttpRequests",
    href: "https://michael5522.github.io/supurb-quotes/"
  },
  {
    thumbnail: mobilewedding,
    bigShoe: desktopwedding,
    title: "A-List Wedding",
    stack: "#reactjs #bootstrap #postgreSQL #nodejs #express",
    desc: "A mobile responsive full stack application using ReactJS to give users the tools to plan their wedding. Designed wireframes using Figma and database schema to provide functionality and database structure. User login and data stored in secure PostgreSQL database.",
    href: "https://a-list-wedding.michaelkchang.com/"
  },
  {
    thumbnail: dMobile,
    bigShoe: dDesktop,
    title: "Random BCE",
    stack: "#nextjs #tailwindcss",
    desc: "Using the latest next.js and tailwind css to create this portfolio website",
    href: "https://tailwindcss.com/docs/border-radius"
  }

]
