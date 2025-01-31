import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from 'react-icons/fa';
import { FiFileText, FiUser, FiExternalLink } from 'react-icons/fi';

import cer_1 from './assets/certification_1.pdf'
import cer_2 from './assets/certification_2.pdf'

import Work1 from './assets/Homepage.png';
import Work2 from './assets/simongame.png';
import Work3 from './assets/smart.png';
import Work4 from './assets/blog.png';
import Work5 from './assets/certification_1.png';
import Work6 from './assets/certification_2.png';
import Work7 from './assets/Secret.png'

import Theme1 from './assets/purple.png';
import Theme2 from './assets/red.png';
import Theme3 from './assets/blueviolet.png';
import Theme4 from './assets/blue.png';
import Theme5 from './assets/goldenrod.png';
import Theme6 from './assets/magenta.png';
import Theme7 from './assets/yellowgreen.png';
import Theme8 from './assets/orange.png';
import Theme9 from './assets/green.png';
import Theme10 from './assets/yellow.png';

export const links = [
  {
    id: 1,
    name: 'Home',
    icon: <FaHome className='nav__icon' />,
    path: '/',
  },

  {
    id: 2,
    name: 'About',
    icon: <FaUser className='nav__icon' />,
    path: '/about',
  },

  {
    id: 3,
    name: 'Portfolio',
    icon: <FaFolderOpen className='nav__icon' />,
    path: '/portfolio',
  },

  {
    id: 4,
    name: 'Contact',
    icon: <FaEnvelopeOpen className='nav__icon' />,
    path: '/contact',
  },
];

export const personalInfo = [
  {
    id: 1,
    title: 'First Name : ',
    description: 'Patcharapon',
  },

  {
    id: 2,
    title: 'Last Name : ',
    description: 'Prompes',
  },

  {
    id: 3,
    title: 'Age : ',
    description: '21 Years',
  },

  {
    id: 4,
    title: 'Nationality : ',
    description: 'Thai',
  },

  {
    id: 5,
    title: 'Purpose : ',
    description: "Full Stack developer",
  },

  {
    id: 6,
    title: 'Address : ',
    description: 'Nakorn Si Thammarat',
  },

  {
    id: 7,
    title: 'Phone : ',
    description: '0970488464',
  },

  {
    id: 8,
    title: 'Email : ',
    description: '65200224@kmitl.ac.th',
  },

  {
    id: 9,
    title: 'Github : ',
    description: `<a href="https://github.com/kimPrompes224" target="_blank">kimPrompes224<a>`,
  },

  {
    id: 10,
    title: 'Languages : ',
    description: 'Thai, English',
  },
];

export const stats = [
  {
    id: 1,
    no: '3+',
    title: 'Amount of <br /> Certificate',
  },

  {
    id: 2,
    no: '8+',
    title: 'Completed <br /> Projects',
  },

  {
    id: 3,
    no: '3.30',
    title: 'GPA <br /> Score',
  },

  {
    id: 4,
    no: '100+',
    title: ' Passtionate <br /> Gauge',
  },
];

export const resume = [
  // {
  //   id: 1,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2018 - PRESENT',
  //   title: 'Web Developer <span> Envato </span>',
  //   desc: 'Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,',
  // },

  // {
  //   id: 2,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2013 - 2018',
  //   title: 'UI/UX Designer <span> Themeforest </span>',
  //   desc: 'Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt',
  // },

  // {
  //   id: 3,
  //   category: 'experience',
  //   icon: <FaBriefcase />,
  //   year: '2022',
  //   title: 'Frontend <span> HTML, CSS, JavaScript </span>',
  //   desc: '',
  // },

  {
    id: 4,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2022-PRESENT',
    title: 'Engineering Degree <span> KMITL Prince of Chumphon </span>',
    desc: ' My passion for computer games sparked my interest in the field of computer engineering, leading me to pursue a degree in this discipline.',
  },

  {
    id: 5,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2016-2021',
    title: 'high school <span> Satree Thungsong School </span>',
    desc: 'I completed a science and mathematics track from my junior high school years through high school graduation.',
  },

  {
    id: 6,
    category: 'education',
    icon: <FaGraduationCap />,
    year: '2010-2015',
    title: 'Primary Education <span> Thetsaban Wat Khok Sathon School </span>',
    desc: 'This is a critical period for making decisions about continuing education at the secondary level.',
  },
];

export const skills = [
  {
    id: 1,
    title: 'HTML',
    percentage: '90',
  },

  {
    id: 2,
    title: 'CSS',
    percentage: '65',
  },

  {
    id: 3,
    title: 'JavaScript',
    percentage: '56',
  },

  {
    id: 4,
    title: 'Jquery',
    percentage: '60',
  },

  {
    id: 5,
    title: 'EJS',
    percentage: '63',
  },

  {
    id: 6,
    title: 'Tailwind',
    percentage: '59',
  },

  {
    id: 7,
    title: 'node.js',
    percentage: '60',
  },

  {
    id: 8,
    title: 'express.js',
    percentage: '52',
  },
  {
    id: 9,
    title: 'Python',
    percentage: '50',
  },
  {
    id: 10,
    title: 'PostgreSQL',
    percentage: '70',
  },
  {
    id: 11,
    title: 'MySQL',
    percentage: '50',
  },
  {
    id: 12,
    title: 'Docker',
    percentage: '40',
  },
  {
    id: 13,
    title: 'Postman',
    percentage: '61',
  },
  {
    id: 14,
    title: 'Firebase',
    percentage: '35',
  },
  {
    id: 15,
    title: 'Next.js',
    percentage: '20',
  },
  {
    id: 16,
    title: 'Bun.js',
    percentage: '10',
  },
];

export const portfolio = [
  {
    id: 1,
    img: Work1,
    title: 'Game-Store',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website'
      },
      {
        icon: <FiUser />,
        title: 'Github Repo : ',
        desc: '<a href="https://github.com/kimPrompes224/Game-Store_Frontend" target="_blank">Frontend<a/>, <a href="https://github.com/kimPrompes224/Game-Store_Backend" target="_blank">Backend<a/>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'React.js, node.js, express.js',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Not available',
      },
    ],
  },

  {
    id: 2,
    img: Work2,
    title: 'Simon-Game',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'GitHub Repo : ',
        desc: '<a href="https://github.com/kimPrompes224/Simon-game" target="_blank">Simon-game<a/>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript,EJS',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://londonappbrewery.github.io/Simon-Game/" target="_blank">Simon-game<a/>',
      },
    ],
  },

  {
    id: 3,
    img: Work3,
    title: 'Smart Rubbish Bin',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'IOT Website',
      },
      {
        icon: <FiUser />,
        title: 'GitHub Repo : ',
        desc: '<a href="https://github.com/kimPrompes224/Smart-Rubbish-Bin_IOT-Project" target="_blank">Smart rubbish bin<a/>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'C, JavaScript,Css,HTML',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: '<a href="https://iot-mq-135-test.web.app/" target="_blank">Demo<a/>',
      },
    ],
  },

  {
    id: 4,
    img: Work4,
    title: 'Blog-API',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Website',
      },
      {
        icon: <FiUser />,
        title: 'GitHub Repo : ',
        desc: '<a href="https://github.com/kimPrompes224/Blog-API" target="_blank">Blog-API<a/>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: 'Not available',
      },
    ],
  },

  {
    id: 5,
    img: Work5,
    title: 'Certificate',
    details: [
      {
        title: 'Certification : ',
        desc: 'Web development',
      },
      {
        title: 'Platform : ',
        desc: 'Udemy',
      },
      {
        title: 'Teacher : ',
        desc: 'Dr. Angela Yu',
      },
      {
        title: 'Preview : ',
        desc: `<a href=${cer_1} download="">demo<a/>`,
      },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: 'Certificate',
    details: [
      {
        icon: <FiFileText />,
        title: 'Certification : ',
        desc: 'Github',
      },
      {
        icon: <FiUser />,
        title: 'Platform : ',
        desc: 'Born to dev',
      },
      {
        icon: <FaCode />,
        title: 'Teacher : ',
        desc: 'Ball Born to dev',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: `<a href=${cer_2} download="">demo<a/>`,
      },
    ],
  },
  {
    id: 7,
    img: Work7,
    title: 'Secret Box',
    details: [
      {
        icon: <FiFileText />,
        title: 'Project : ',
        desc: 'Authentication Website',
      },
      {
        icon: <FiUser />,
        title: 'GitHub Repo : ',
        desc: '<a href="https://github.com/kimPrompes224/Secret-Box" target="_blank">Secret Box<a/>',
      },
      {
        icon: <FaCode />,
        title: 'Language : ',
        desc: 'JavaScript',
      },
      {
        icon: <FiExternalLink />,
        title: 'Preview : ',
        desc: `Not available`,
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: 'hsl(252, 35%, 51%)',
  },

  {
    id: 2,
    img: Theme2,
    color: 'hsl(4, 93%, 54%)',
  },

  {
    id: 3,
    img: Theme3,
    color: 'hsl(271, 76%, 53%)',
  },

  {
    id: 4,
    img: Theme4,
    color: 'hsl(225, 73%, 57%)',
  },

  {
    id: 5,
    img: Theme5,
    color: 'hsl(43, 74%, 49%)',
  },

  {
    id: 6,
    img: Theme6,
    color: 'hsl(339, 81%, 66%)',
  },

  {
    id: 7,
    img: Theme7,
    color: 'hsl(80, 61%, 50%)',
  },

  {
    id: 8,
    img: Theme8,
    color: 'hsl(19, 96%, 52%)',
  },

  {
    id: 9,
    img: Theme9,
    color: 'hsl(88, 65%, 43%)',
  },

  {
    id: 10,
    img: Theme10,
    color: 'hsl(42, 100%, 50%)',
  },
];
