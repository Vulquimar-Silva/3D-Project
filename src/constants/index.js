import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  electron,
  reactnative
} from "../assets";

export const navLinks = [
  {
    id: "Sobre",
    title: "Sobre",
  },
  {
    id: "Projetos",
    title: "Projetos",
  },
  {
    id: "Contato",
    title: "Contato",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: reactjs,
  },
  {
    title: "Desktop Developer",
    icon: electron,
  },
  {
    title: "Backend Developer",
    icon: nodejs,
  },
  {
    title: "Mobile Developer",
    icon: reactnative,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Projetos React.js",
    company_name: "Front-end",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Janeiro 2023 - até o momento",
    points: [
      "Um clone do instagram utilizando Graphql, JWT, Formik, Yup, Sass e Semantic UI, ainda está em desenvolvimento.",
      "Esse portfólio aqui, nele utilizei a biblioteca Three.js, Motion, Tailwind e Emailjs.",
      "Um ecomerce voltado para pets, ainda está em desenvolvimento.",
      "Um chat em real time utilizando Socket.io, ainda está em desenvolvimento.",
    ],
  },
  {
    title: "Projetos Node.js",
    company_name: "Back-end",
    icon: nodejs,
    iconBg: "#E6DEDD",
    date: "Janeiro 2023 - até o momento",
    points: [
      "Desenvolvi uma API para rede social com o framework Express, Mysql, JWT.",
      "Desenvolvi um CRUD simples com Express, Postgres, Docker e Kubernetes.",
      "Estou desenvolvendo uma API utilizando GraphQL, JWT, MongoDB e AWS.",
      "Estou desenvolvendo um app Serverless com TypeScript utilizando serviços e frameworks da AWS.",
    ],
  },
  {
    title: "Projetos Electron.js",
    company_name: "Desktop",
    icon: electron,
    iconBg: "#383E56",
    date: "Fevereiro 2020 - Dezembro 2021",
    points: [
      "Desenvolvi um Spotify clone, nele utilizei React.js, Sass e Firebase.",
      "Desenvolvi um app que coleta dados da maquina e efetua testes completo de conexão, nesse projeto utilizei Next.js, Tailwind, Node.js e Powershell.",
      "Desenvolvi um app para auxiliar o usuário antes de logar no sistema operacional, esse app coleta dados da máquina, efetua instalações, verifica conexão e insere a máquina no domínio, tudo isso na tela de bloqueio do windows.",
      "Desenvolvi um chat bot integrado com o framework do telegram, esse app efetua instalação de aplicações client pelo chat.",
    ],
  },
  {
    title: "Projetos React Native",
    company_name: "Mobile",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Janeiro 2022 - até o momento",
    points: [
      "Estou desenvolvendo um app bem parecido com o whatsapp, nele estou utilizando socket.io, Formik, Yup, JWT.",
      "Desenvolvi o app Smart Money, esse app é voltado para controle financeiro. Nele contem gráficos, categorias, últimos lançamentos",
      "Desenvolvi o app Ignite Gym, esse app auxilia a pessoa na hora dos treinamentos na academia.",
      "Desenvolvi o app DevPost, esse app é uma rede social bem simples.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };