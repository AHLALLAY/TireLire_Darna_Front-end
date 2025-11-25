import { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSwitcher() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language;
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: 'ar', name: 'العربية', flag: '🇲🇦', icon: '/locale/ar.png' },
        { code: 'fr', name: 'Français', flag: '🇫🇷', icon: '/locale/fr.png' },
    ];


    const handleLanguageChange = (langCode) => {
        i18n.changeLanguage(langCode);
        document.documentElement.dir = langCode === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = langCode;
        setIsOpen(false);
    };

    useEffect(() => {
        document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLang;
    }, [currentLang]);

    const currentLanguage = languages.find(lang => lang.code === currentLang);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-2 px-3 py-2 bg-neutral-dark border border-neutral rounded-lg hover:border-primary transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-neutral-dark"
                aria-label="Changer la langue"
                aria-expanded={isOpen}
            >
                <img 
                    src={currentLanguage?.icon} 
                    alt={currentLanguage?.name} 
                    className="w-5 h-5 object-contain"
                />
                <span className="text-white text-sm font-medium hidden sm:inline">
                    {currentLanguage?.name}
                </span>
                <svg 
                    className={`w-4 h-4 text-primary transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="absolute top-full left-0 mt-2 w-32 bg-neutral-dark border border-neutral rounded-lg shadow-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLanguageChange(lang.code)}
                            className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-neutral-light transition-colors duration-150 ${
                                currentLang === lang.code 
                                    ? 'bg-primary/20 text-primary border-r-2 border-primary' 
                                    : 'text-white'
                            }`}
                        >
                            <img 
                                src={lang.icon} 
                                alt={lang.name} 
                                className="w-5 h-5 object-contain"
                            />
                            <span className="text-sm font-medium">{lang.name}</span>
                            {currentLang === lang.code && (
                                <svg 
                                    className="w-4 h-4 text-primary ml-auto" 
                                    fill="currentColor" 
                                    viewBox="0 0 20 20"
                                >
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* Effet glow au hover */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-gradient-to-r from-primary/10 to-transparent blur-sm"></div>
        </div>
    );
}

export default LanguageSwitcher;
