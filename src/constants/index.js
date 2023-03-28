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
  reactnative,
  kubernetes,
  aws,
  itsocial,
  nubank,
  spiderman,
  vulksfy,
  vulksAutomation
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
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "electron",
    icon: electron,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "aws",
    icon: aws,
  }
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
      "Esse portfólio, nele utilizei a biblioteca Three.js, Motion, Tailwind e Emailjs.",
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
      "Eu pensei que era impossível fazer um site tão bonito quanto o nosso produto, mas o Vulks provou que eu estava errado.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Nunca conheci um desenvolvedor web que realmente se preocupasse com o sucesso de seus clientes como Vulks.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Depois que o Vulks otimizou nosso site, nosso tráfego aumentou 50%. Não podemos agradecê-los o suficiente!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "IT.Social",
    description:
      "Uma rede social somente para quem é da área de TI, seja empresas ou pessoas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "orange-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "jwt",
        color: "green-text-gradient",
      },
    ],
    image: itsocial,
    source_code_link: "https://github.com/Vulquimar-Silva/client-itsocial",
  },
  {
    name: "Spiderman",
    description:
      "Esse projeto foi construido no curso Frontpush que é focado 100% em Front-end.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
    ],
    image: spiderman,
    source_code_link: "https://github.com/Vulquimar-Silva/land-spiderman",
  },
  {
    name: "Vulksfy",
    description:
      "Esse projeto é inspirado 100% no spotify, foi construido no curso do Agustin Galdon.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "electronjs",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: vulksfy,
    source_code_link: "https://github.com/Vulquimar-Silva/Spotify-Client",
  },
  {
    name: "Vulks Automation",
    description:
      "Projeto desenvolvido com foco na coleta de dados e teste de conexão.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "electronjs",
        color: "blue-text-gradient",
      },
      {
        name: "powershell",
        color: "pink-text-gradient",
      },
    ],
    image: vulksAutomation,
    source_code_link: "https://github.com/Vulquimar-Silva/vulks-automation",
  },
  {
    name: "Nubank",
    description:
      "Esse projeto é um clone melhorado do Nubank, foi construido no curso Front push.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "motion",
        color: "green-text-gradient",
      },
    ],
    image: nubank,
    source_code_link: "https://github.com/Vulquimar-Silva/clone-nubank",
  },
];

export { services, technologies, experiences, testimonials, projects };