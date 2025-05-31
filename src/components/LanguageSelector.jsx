import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const languages = [
        { code: "en", name: "English" },
        { code: "am", name: "አማርኛ" },
    ];

    const currentLanguage =
        languages.find((lang) => lang.code === i18n.language) || languages[0];

    const handleLanguageChange = (languageCode) => {
        i18n.changeLanguage(languageCode);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors focus:outline-none"
                aria-label="Select language"
            >
                <FaGlobe className="text-xl" />
                <span>{currentLanguage.name}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                    {languages.map((language) => (
                        <button
                            key={language.code}
                            onClick={() => handleLanguageChange(language.code)}
                            className={`block w-full text-left px-4 py-2 text-sm ${
                                currentLanguage.code === language.code
                                    ? "bg-blue-50 text-blue-600"
                                    : "text-gray-700 hover:bg-gray-50"
                            }`}
                        >
                            {language.name}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
