import { sectionArr, Section } from "../variables";

const getSectionObj = (sectionTitle: string): Section | undefined => {
    return sectionArr.find(
        (section) => section.sectionTitle.toLowerCase() === sectionTitle.toLowerCase()
    );
}

export {
    getSectionObj
}