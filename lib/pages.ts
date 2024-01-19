export const pages = [
    {
        label: "Mission",
        href: "/mission"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Projects",
        href: "/projects"
    },
    {
        label: "Contacts",
        href: "/contacts"
    },
]

export const MetadataLayout = {
    title: {
        template: `%s | ${process.env.WEBSITE_NAME}`,
        default: `${process.env.WEBSITE_NAME}`
    },
    description: `${process.env.WEBSITE_DESCRIPTION}`
};

/*--------------*/
/* MISSION PAGE */
export const MetadataMissionPage = {
    title: "Mission",
    description: "Descrizione mission page"
};

/*------------*/
/* ABOUT PAGE */
export const MetadataAboutPage = {
    title: "About",
    description: "Descrizione about page"
};

/*---------------*/
/* SERVICES PAGE */
export const MetadataServicesPage = {
    title: "Services",
    description: "Descrizione services page"
};

/*---------------*/
/* PROJECTS PAGE */
export const MetadataProjectsPage = {
    title: "Projects",
    description: "Descrizione projects page"
};

/*---------------*/
/* CONTACTS PAGE */
export const MetadataContactsPage = {
    title: "Cotacts",
    description: "Descrizione contacts page"
};

/*------------*/
/* LOGIN PAGE */
export const MetadataLoginPage = {
    title: "Login",
    description: "Descrizione login page"
}

/*---------------*/
/* REGISTER PAGE */
export const MetadataRegisterPage = {
    title: "Register",
    description: "Descrizione register page"
}

/*---------------*/
/* DASHBOARD PAGE */
export const MetadataDashboardPage = {
    title: "Dashboard",
    description: "Descrizione Dashboard page"
}

/*---------------*/
/* SETTINGS PAGE */
export const MetadataSettingsPage = {
    title: "Settings",
    description: "Descrizione Settings page"
}
