import { useState } from 'react';

const Sidebarfooter = () => {
  const [language, setLanguage] = useState('English');

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'English' ? 'Mongolian' : 'English'));
  };

  return (
    <div>
      <div className="mt-8 px-7 space-y-2 text-xs">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs mb-1" aria-label="Legal">Legal</a>
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs" aria-label="Safety & Privacy Center">Safety & Privacy Center</a>
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs" aria-label="Privacy Policy">Privacy Policy</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs" aria-label="Cookies">Cookies</a>
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs mb-2" aria-label="About Ads">About Ads</a>
          <a href="#" className="hover:underline text-[rgba(179,179,179)] text-xs" aria-label="Accessibility">Accessibility</a>
        </div>
        <a href="#" className="hover:underline text-white text-xs" aria-label="Cookies">Cookies</a>
      </div>
      <div className="mt-4 flex items-center space-x-[7%]">
        <i className="fas fa-globe" aria-hidden="true"></i>
        <button 
          className="bg-gray-800 px-4 py-2 rounded-full text-white text-sm" 
          onClick={toggleLanguage} 
          aria-label={`Change language to ${language === 'English' ? 'Mongolian' : 'English'}`}
        >
          {language}
        </button>
      </div>
    </div>
  );
}

export default Sidebarfooter;