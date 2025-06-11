import React from "react";
import SuperFlowSwiper from "../../components/SuperFlowSwiper";

const Gallery = () => {
    return (
        <div className="w-full min-h-screen bg-blue-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
                    Sunday School Gallery
                </h1>
                <div className="mb-12">
                    <SuperFlowSwiper />
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
