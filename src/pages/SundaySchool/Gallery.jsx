import React from "react";
import ImageCarousel from "../../components/ImageCarousel";
import InstagramCarousel from "../../components/InstagramCarousel";
import SuperFlowSwiper from "../../components/SuperFlowSwiper";

const Gallery = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-8 sm:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                    Sunday School Gallery
                </h1>

                {/* Images Section */}
                <div className="mb-8 sm:mb-12">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                        Photo Gallery
                    </h2>
                    <SuperFlowSwiper />
                </div>

                {/* Instagram Reels Section */}
                <div className="mb-12 sm:mb-16">
                    <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">
                        Instagram Reels
                    </h2>
                    <InstagramCarousel />
                </div>

                <div className="text-center px-4">
                    <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                        View our collection of photos and videos from Sunday
                        School activities and events. Explore the memories and
                        moments that make our community special.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
