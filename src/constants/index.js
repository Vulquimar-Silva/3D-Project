import { aws, backend, carrent, creator, css, docker, electron, figma, git, html, itsocial, javascript, jobit, kubernetes, meta, mobile, mongodb, nodejs, nubank, reactjs, reactnative, redux, shopify, spiderman, starbucks, tailwind, tesla, threejs, tripguide, typescript, vulksAutomation, vulksfy, web } from "../assets";

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
    title: "Desenvolvedor Full Stack JS",
    company_name: "Algar Tech",
    icon: reactjs,
    iconBg: "#383E56",
    date: "Fevereiro 2020 - Janeiro 2023",
    points: [
      "Desenvolvimento de aplicações WEB com Angular 9, ReactJS e NodeJS.",
      "Desenvolvimento de aplicações desktop com ElectronJS, NextJS, Tailwind, NodeJS e AWS.",
      "Deploy do client em ambiente operacional com Powershell.",
      "Desenvolvimento de scripts e chat bot para instalações remota no service desk.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Autônomo",
    icon: typescript,
    iconBg: "#E6DEDD",
    date: "Janeiro 2019 - até o momento",
    points: [
      "Faço aplicações WEB utilizando ReactJS/NextJS ou Angular.",
      "Faço APIs com NodeJS utilizando os padrões Rest ou GraphQL.",
      "Faço aplicações Desktops com ElectronJS.",
      "Faço apps para Android utilizando o React Native.",
    ],
  },
  {
    title: "Service Desk",
    company_name: "Callink",
    icon: nodejs,
    iconBg: "#383E56",
    date: "Junho 2014 - Julho 2018",
    points: [
      "Atendimento via ramal, chat, Hangouts e Telegram",
      "Resolução remota de incidentes em sistemas operacionais Windows 7 e Windows 10",
      "Atividades no Active Directory (Movimentação de objetos nas OUs, Desabilitar, desbloquear, ativar, resetar, add grupo de e-mail, etc..)",
      "Monitoramento de alarmes pelo sistema Zabbix, Backup e restore de arquivos na rede via Data Protector",
      "Tratativa de incidentes em sistemas de clientes",
      "Criação de scripts para automação, desenvolvimento de chat bot com Telegraf e NodeJS",
    ],
  },
  {
    title: "Sócio proprietario",
    company_name: "Mercado Novo Dia",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "Janeiro 2006 - Março 2012",
    points: [
      "Serviços bancários",
      "Compras de produtos",
      "Operador de caixa, estoquista, repositor e entregador",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "API para rede social, com upload de imagens, comentários, likes/dislikes, followers e autenticação JWT. Nesse projeto utilizo o banco Mysql.",
    name: "API REST",
    designation: "Node.js",
    company: "Express, Mysql, JWT",
    source_code_link: "https://github.com/Vulquimar-Silva/server-itsocial"
  },
  {
    testimonial:
      "CRUD simples para um projeto que irei desenvolver em NextJS/Typescript, nesse projeto utilizo Express, PostgreSQL e Docker/Kubernetes.",
    name: "CRUD",
    designation: "Node.js",
    company: "Express, PostgreSQL, Docker, Kubernetes",
    source_code_link: "https://github.com/Vulquimar-Silva/backend-crudzera"
  },
  {
    testimonial:
      "API GraphQL com modelagem de dados no Sequelize/MySQL e otimização de consultas ao banco com Data Loaders e AST.",
    name: "API GraphQL",
    designation: "Node.js",
    company: "Typescript, Express, GraphQL, JWT, Sequelize",
    source_code_link: "https://github.com/Vulquimar-Silva/api-node-graphql"
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