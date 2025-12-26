interface SocialLinks {
    github: string;
    linkedin: string;
    email: string;
}

interface Section {
    sectionTitle: string;
    badgeTitle?: string;
    socialLinks?: SocialLinks;
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
    }
]

export {
    sectionArr,
}

export type {
    Section,
    SocialLinks
}