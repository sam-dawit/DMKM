import { useTranslation } from "react-i18next";

const Payments = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
                        {t("pages.payments.title")}
                    </h1>
                    <div className="prose prose-lg mx-auto text-gray-600">
                        <p className="text-xl leading-relaxed">
                            {t("pages.payments.content")}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payments;
