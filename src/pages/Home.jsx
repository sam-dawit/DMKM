import { useTranslation } from "react-i18next";
import Location from "../location/Location";
import SuperFlowSwiper from "../components/SuperFlowSwiper";

const Home = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 h-full">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-6">
                        {t("pages.home.title")}
                    </h1>
                    <div className="prose prose-lg mx-auto text-gray-600 mb-8">
                        <p className="text-xl leading-relaxed">
                            {t("pages.home.content")}
                        </p>
                    </div>
                    <a
                        href="https://www.paypal.com/donate/?hosted_button_id=AXFVB9445SNEY"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors duration-300 font-medium text-lg"
                    >
                        Donate
                    </a>
                </div>
                <div className="h-full">
                    <SuperFlowSwiper className="rounded-2xl" />
                </div>
                <br />
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        Church Location
                    </h2>
                    <Location />
                </div>
            </div>
        </div>
    );
};

export default Home;
