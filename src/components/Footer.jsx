import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white py-6 mt-auto">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Social Media Links */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">
                            {t("footer.connect")}
                        </h3>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/dmkmseattle/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a
                                href="https://www.youtube.com/@seattledebremihretkidusmic1710"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                aria-label="YouTube"
                            >
                                <FaYoutube className="text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/p/Seattle-Debre-Mihret-StMichael-Ethiopian-Orthodox-Tewahedo-Church-100064480521183/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-300 hover:text-white transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-3">
                        <h3 className="text-lg font-semibold">
                            {t("church.name")}
                        </h3>
                        <div className="space-y-1 text-sm text-gray-300">
                            <p>{t("footer.address")}</p>

                            <p>Email: {t("footer.email")}</p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-6 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
                    <p>
                        © {new Date().getFullYear()} {t("church.name")}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
