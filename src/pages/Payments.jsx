import { useTranslation } from "react-i18next";

const Payments = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white via-blue-50 to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold text-gray-900 mb-4">
                            {t("pages.payments.title")}
                        </h1>
                        <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 transform transition-all duration-300 hover:shadow-2xl">
                        <div className="prose prose-lg mx-auto text-gray-600">
                            <p className="text-xl leading-relaxed mb-8 text-center">
                                {t("pages.payments.content")}
                            </p>
                        </div>
                    </div>

                    {/* Donation Section */}
                    <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]">
                            <h2 className="text-2xl font-semibold text-white mb-6">
                                {t("pages.payments.donateTitle")}
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                                {t("pages.payments.donateDescription")}
                            </p>
                            <a
                                href="https://square.link/u/iJ3gGX6I?src=sheet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-10 py-5 text-xl font-semibold text-blue-600 bg-white rounded-xl shadow-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all duration-200 transform hover:scale-105"
                            >
                                <svg
                                    className="w-7 h-7 mr-3"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {t("pages.payments.donate")}
                            </a>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {t("pages.payments.titheTitle")}
                            </h3>
                            <p className="text-gray-600">
                                {t("pages.payments.titheDescription")}
                            </p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">
                                {t("pages.payments.offeringTitle")}
                            </h3>
                            <p className="text-gray-600">
                                {t("pages.payments.offeringDescription")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
