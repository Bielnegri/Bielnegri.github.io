export const languages  = {
    pt: {
        label: "Português",
        flag: "/brazil.png"
    },
    en: {
        label: "English",
        flag: "/usa.png"
    } ,
    es: {
        label: "Español",
        flag: "/spain.png"
    }
};

export const defaultLang = "pt";

export const ui = {
    pt: {
        "title.jobTitle" : "Desenvolvedor Fullstack",
        "tabs.works" : "Trabalhos",
        "tabs.projects" : "Projetos",
        "tabs.education" : "Formação",
        "contacts.title" : "Contatos"
    },

    en: {
        "title.jobTitle" : "Fullstack Developer",
        "tabs.works" : "Works",
        "tabs.projects" : "Projects",
        "tabs.education" : "Education",
        "contacts.title" : "Contacts"
    },

    es: {
        "title.jobTitle" : "",
        "tabs.works" : "",
        "tabs.projects" : "",
        "tabs.education" : "",
        "contacts.title" : ""
    }
} as const;