import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdLanguage } from "react-icons/md";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const image = "../assets/youtube.png";
    const navItems = [
        {
            path: "/about",
            label: t("nav.about"),
            dropdownItems: [
                { path: "/about/history", label: t("nav.aboutHistory") },
                { path: "/about/leadership", label: t("nav.aboutLeadership") },
            ],
        },
        {
            path: "/payments",
            label: t("nav.payments"),
            dropdownItems: [
                { path: "/payments/tithe", label: t("nav.tithe") },
                { path: "/payments/offering", label: t("nav.offering") },
            ],
        },
        {
            path: "/sundaySchool",
            label: t("nav.sundaySchool"),
            dropdownItems: [
                { path: "/sundaySchool/classes", label: t("nav.classes") },
                { path: "/sundaySchool/teachers", label: t("nav.teachers") },
            ],
        },
        {
            path: "/sermon",
            label: t("nav.sermon"),
            dropdownItems: [
                { path: "/sermon/archive", label: t("nav.sermonArchive") },
                { path: "/sermon/upcoming", label: t("nav.upcomingSermons") },
            ],
        },
        {
            path: "/contact",
            label: t("nav.contact"),
            dropdownItems: [
                { path: "/contact/location", label: t("nav.location") },
                { path: "/contact/feedback", label: t("nav.feedback") },
            ],
        },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleLanguageMenu = () => {
        setIsLanguageMenuOpen(!isLanguageMenuOpen);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsLanguageMenuOpen(false);
    };

    return (
        <header className=" shadow-md">
            <img src="" alt="" />
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    {/* Logo and Title */}
                    <Link to="/" className="flex items-center space-x-4 group">
                        <img
                            src={logo}
                            alt="Church Logo"
                            className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110 rounded-full border-2 border-gray-300 shadow-lg p-1"
                        />
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                {t("church.name")}
                            </h1>
                            <h2 className="text-sm text-gray-600 group-hover:text-blue-500 transition-colors duration-300">
                                {t("church.nameAmharic")}
                            </h2>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navItems.map((item) => (
                            <div key={item.path} className="relative group">
                                <Link
                                    to={item.path}
                                    className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                                        location.pathname.startsWith(item.path)
                                            ? "text-blue-600 font-medium"
                                            : ""
                                    }`}
                                >
                                    {item.label}
                                </Link>
                                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                    {item.dropdownItems.map((dropdownItem) =>
                                        dropdownItem.isExternal ? (
                                            <a
                                                key={dropdownItem.path}
                                                href={dropdownItem.path}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {dropdownItem.label}
                                            </a>
                                        ) : (
                                            <Link
                                                key={dropdownItem.path}
                                                to={dropdownItem.path}
                                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                            >
                                                {dropdownItem.label}
                                            </Link>
                                        )
                                    )}
                                </div>
                            </div>
                        ))}
                        <div className="relative">
                            <button
                                onClick={toggleLanguageMenu}
                                className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                aria-label="Change language"
                            >
                                <MdLanguage className="text-xl" />
                                <span>
                                    {i18n.language === "en" ? "EN" : "አማ"}
                                </span>
                            </button>
                            {isLanguageMenuOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                                    <button
                                        onClick={() => changeLanguage("en")}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        English
                                    </button>
                                    <button
                                        onClick={() => changeLanguage("am")}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        አማርኛ
                                    </button>
                                </div>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-600 hover:text-blue-600 transition-colors duration-300"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <FaTimes size={24} />
                        ) : (
                            <FaBars size={24} />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 py-4 border-t border-gray-200">
                        <nav className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <div key={item.path} className="flex flex-col">
                                    <Link
                                        to={item.path}
                                        className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                                            location.pathname.startsWith(
                                                item.path
                                            )
                                                ? "text-blue-600 font-medium"
                                                : ""
                                        }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                    <div className="ml-4 mt-2 space-y-2">
                                        {item.dropdownItems.map(
                                            (dropdownItem) =>
                                                dropdownItem.isExternal ? (
                                                    <a
                                                        key={dropdownItem.path}
                                                        href={dropdownItem.path}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                    >
                                                        {dropdownItem.label}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={dropdownItem.path}
                                                        to={dropdownItem.path}
                                                        className="block text-gray-600 hover:text-blue-600 transition-colors duration-300"
                                                        onClick={() =>
                                                            setIsMenuOpen(false)
                                                        }
                                                    >
                                                        {dropdownItem.label}
                                                    </Link>
                                                )
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className="flex items-center space-x-2">
                                <MdLanguage className="text-xl text-gray-600" />
                                <button
                                    onClick={() => changeLanguage("en")}
                                    className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                                        i18n.language === "en"
                                            ? "text-blue-600 font-medium"
                                            : ""
                                    }`}
                                >
                                    English
                                </button>
                                <span className="text-gray-300">|</span>
                                <button
                                    onClick={() => changeLanguage("am")}
                                    className={`text-gray-600 hover:text-blue-600 transition-colors duration-300 ${
                                        i18n.language === "am"
                                            ? "text-blue-600 font-medium"
                                            : ""
                                    }`}
                                >
                                    አማርኛ
                                </button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
