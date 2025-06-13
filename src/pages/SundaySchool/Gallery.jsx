import React from "react";
import ImageCarousel from "../../components/ImageCarousel";
import InstagramCarousel from "../../components/InstagramCarousel";

const Gallery = () => {
    return (
        <div className="w-full min-h-screen bg-blue-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Sunday School Gallery
                </h1>

                {/* Images Section */}
                <div className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                        Photo Gallery
                    </h2>
                    <ImageCarousel />
                </div>

                {/* Instagram Reels Section */}
                <div className="mb-16">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                        Instagram Reels
                    </h2>
                    <InstagramCarousel />
                </div>

                <div className="text-center">
                    <p className="text-gray-600 text-lg">
                        View our collection of photos and videos from Sunday
                        School activities and events.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
