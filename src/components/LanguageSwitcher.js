import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')} className="flag-button">
        <img src={`${process.env.PUBLIC_URL}/images/english-flag.svg`} alt="English" className="flag-icon" />
      </button>
      <button onClick={() => changeLanguage('pl')} className="flag-button">
        <img src={`${process.env.PUBLIC_URL}/images/polish-flag.svg`} alt="Polish" className="flag-icon" />
      </button>
    </div>
  );
}

export default LanguageSwitcher;
