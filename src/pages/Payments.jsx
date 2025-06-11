import { useTranslation } from "react-i18next";

const Payments = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen  bg-blue-300">
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
                            <form
                                action="https://www.paypal.com/donate"
                                method="post"
                                target="_top"
                            >
                                <input
                                    type="hidden"
                                    name="hosted_button_id"
                                    value="AXFVB9445SNEY"
                                />
                                <input
                                    type="image"
                                    src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                                    border="0"
                                    name="submit"
                                    title="PayPal - The safer, easier way to pay online!"
                                    alt="Donate with PayPal button"
                                />
                                <img
                                    alt=""
                                    border="0"
                                    src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                                    width="1"
                                    height="1"
                                    onClick={() => {
                                        window.open(
                                            "https://www.paypal.com/donate/?hosted_button_id=AXFVB9445SNEY",
                                            "_blank"
                                        );
                                    }}
                                />
                            </form>
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
