'use client';

import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const { darkMode } = useTheme();

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>© 2025 Justine Rhei Torres. All rights reserved.</p>
            <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Built with Next.js &amp; Shadcn</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;