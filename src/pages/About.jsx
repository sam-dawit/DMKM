import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
                        {t("pages.about.title")}
                    </h1>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="text-xl leading-relaxed">
                            {t("pages.about.content")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
