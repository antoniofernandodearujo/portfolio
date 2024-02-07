//Vou mostrar apenas 4 projetos principais, o
// restante pode ser trazido da api github

export const ListProjects = [
    {
        title: "Projeto de Estrutura de Dados",
        media: [ // pois pode ser uma imagem ou um vídeo
            {
                src: "https://picsum.photos/200/300",
                alt: "imagem 1"
            },
            
            {
                src: "https://picsum.photos/200/300",
                alt: "imagem 2"
            }
        ],
        description: "Academic project developed for a data structure course, where the knowledge acquired about basic structures was put into practice, so that users could interact and see in a practical way how it works.",
        link: "https://project-ed.netlify.app",
        techs: [
            "ReactJS",
            "NextJS",
            "TypeScript",
            "Styled Components",
            "Bootstrap",
            "Yarn",
        ]
    },

    {
        title: "Chá de Casa Nova",
        description: "Website developed on a freelance basis for a new house shower event, where I displayed a list of gifts, and each gift will become unavailable once the person adds their name.",
        link: "https://tea-new-home.netlify.app",
        techs: [
            "ReactJS",
            "TypeScript",
            "NextJS",
            "Styled Components",
            "Bootstrap",
            "Firebase",
            "Yarn",
        ]
    },
    
    {
        title: "JPA Data Recovery",
        description: "Freelance website for HD data recovery company, using forms to understand the user, and provide more accurate service because of this.",
        link: "https://jpadatarecovery.com",
        techs: [
            "ReactJS",
            "TypeScript",
            "NextJS",
            "Styled Components",
            "Bootstrap",
            "Firebase",
            "Yarn",
        ]
    },

    {
        title: "Site de Eventos",
        description: "Site developed to learn and use Firebase tools to use in web and mobile projects, more efficiently.",
        link: "https://public-events-app.netlify.app",
        techs: [
            "ReactJS",
            "JavaScript",
            "NextJS",
            "Styled Components",
            "Bootstrap",
            "Firebase",
            "Yarn",
        ]
    }
]