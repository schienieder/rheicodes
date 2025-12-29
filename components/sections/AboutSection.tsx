'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { getSectionObj } from '@/utils/functions/sectionFinder';
import SectionBadge from '@/components/SectionBadge';

const AboutSection = () => {
  const { darkMode } = useTheme();
  const aboutSection = getSectionObj('About');
  const aboutContent = aboutSection?.aboutContent;

  if (!aboutContent) {
    return null;
  }

  return (
    <section
      id="about"
      className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl space-y-6">
          <SectionBadge title={aboutContent.tagline} />
          <h2 className={`mb-6 text-balance text-3xl font-bold tracking-tight md:text-5xl ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {aboutContent.title}
          </h2>
          <div className={`space-y-4 text-pretty text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <p>
              {aboutContent.description}
            </p>
            <p>
              My expertise lies in creating scalable solutions with <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{aboutContent.expertiseFrontend.join('/')}</strong> on the frontend and <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{aboutContent.expertiseBackend.join('/')}</strong> on the backend.
            </p>
            <p>
              I have hands-on experience working with various databases including <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{aboutContent.databases.slice(0, -1).join(', ')}</strong>, and <strong className={darkMode ? 'text-white' : 'text-gray-900'}>{aboutContent.databases[aboutContent.databases.length - 1]}</strong>, enabling me to choose the right tool for each project's unique requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;