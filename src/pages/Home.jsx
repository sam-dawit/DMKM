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
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="text-xl leading-relaxed">
                            {t("pages.home.content")}
                        </p>
                    </div>
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
