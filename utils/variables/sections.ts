interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
}

interface AboutContent {
    tagline: string;
    title: string;
    description: string;
    experience: string;
    expertiseFrontend: string[];
    expertiseBackend: string[];
    databases: string[];
}

interface Section {
    sectionTitle: string;
    badgeTitle?: string;
    socialLinks?: SocialLinks;
    aboutContent?: AboutContent;
}

const sectionArr: Section[] = [
    {
        sectionTitle: 'Hero',
        badgeTitle: 'Open to Opportunities',
        socialLinks: {
            github: 'https://github.com/schienieder',
            linkedin: 'https://www.linkedin.com/in/justine-rhei-torres-02b21822a',
            email: 'justinerheitorres'
        }
    },
    {
        sectionTitle: 'About',
        aboutContent: {
            tagline: 'About me',
            title: 'Kumusta? I am Justine Rhei Torres',
            description: 'A Software Developer based in the Philippines with 3 years of experience in the software development industry. I specialize in building modern web applications using microservice architecture.',
            experience: '3 years of experience',
            expertiseFrontend: ['ReactJS', 'Next.js'],
            expertiseBackend: ['ExpressJS', 'Django Rest Framework'],
            databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase']
        }
    }
]

export {
    sectionArr,
}

export type {
    Section,
    SocialLinks,
    AboutContent
}