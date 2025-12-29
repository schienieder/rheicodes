import { sectionArr, Section, AboutContent } from "../variables/sections";

const getSectionObj = (sectionTitle: string): Section | undefined => {
    return sectionArr.find(
        (section) => section.sectionTitle.toLowerCase() === sectionTitle.toLowerCase()
    );
}

export {
    getSectionObj
}