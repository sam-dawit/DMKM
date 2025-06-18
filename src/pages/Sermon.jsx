import { useTranslation } from "react-i18next";
import { FaYoutube, FaInstagram, FaVideo, FaHistory } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sermon = () => {
    const { t } = useTranslation();

    return (
        <div className="w-full min-h-screen  bg-blue-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
                        {t("pages.sermon.title")}
                    </h1>

                    {/* Live Stream Section */}
                    <div className="mb-12">
                        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                            Live Stream
                        </h2>
                        <div
                            className="relative w-full"
                            style={{ paddingBottom: "56.25%" }}
                        >
                            <iframe
                                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                                src="https://www.youtube.com/embed/d7OKwYFbDcQ"
                                title="Seattle Debre Mihret Kidus Michael is live!"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Navigation Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        {/* Sermons Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <FaVideo className="text-blue-600 text-3xl mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Sermons
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Access our collection of recorded sermons and
                                teachings.
                            </p>
                            <Link
                                to="https://www.youtube.com/@seattledebremihretkidusmic1710/videos"
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                            >
                                View Sermons
                            </Link>
                        </div>

                        {/* Past Live Streams Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <FaHistory className="text-purple-600 text-3xl mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Past Live Streams
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Watch recordings of our previous live streams
                                and services.
                            </p>
                            <Link
                                to="https://www.youtube.com/@seattledebremihretkidusmic1710/streams"
                                target="_blank"
                                className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
                            >
                                View Past Streams
                            </Link>
                        </div>
                    </div>

                    {/* Social Media Links */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* YouTube Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <FaYoutube className="text-red-600 text-3xl mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    YouTube Channel
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Subscribe to our YouTube channel for more
                                sermons and updates.
                            </p>
                            <a
                                href="https://www.youtube.com/@seattledebremihretkidusmic1710"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                            >
                                Subscribe
                            </a>
                        </div>

                        {/* Instagram Section */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex items-center mb-4">
                                <FaInstagram className="text-pink-600 text-3xl mr-3" />
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    Instagram
                                </h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Follow us on Instagram for updates and reels.
                            </p>
                            <a
                                href="https://www.instagram.com/dmkmseattle/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors"
                            >
                                Follow
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sermon;
