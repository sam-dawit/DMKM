import React from "react";

const MediaLightbox = ({
    isOpen,
    onClose,
    media,
    onNext,
    onPrev,
    currentIndex,
    totalItems,
}) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
            {/* Close button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>

            {/* Navigation arrows */}
            {currentIndex > 0 && (
                <button
                    onClick={onPrev}
                    className="absolute left-4 text-white hover:text-gray-300 z-50"
                >
                    <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>
            )}
            {currentIndex < totalItems - 1 && (
                <button
                    onClick={onNext}
                    className="absolute right-4 text-white hover:text-gray-300 z-50"
                >
                    <svg
                        className="w-12 h-12"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            )}

            {/* Media container */}
            <div className="relative w-full h-full flex items-center justify-center p-4">
                {media.type === "image" ? (
                    <img
                        src={media.image}
                        alt="Gallery"
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                    />
                ) : media.type === "instagram" ? (
                    <div className="w-full h-full flex items-center justify-center">
                        <iframe
                            src={media.reelUrl}
                            className="w-[400px] h-[600px] md:w-[500px] md:h-[700px] lg:w-[600px] lg:h-[800px]"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency="true"
                            allow="encrypted-media"
                        />
                    </div>
                ) : null}
            </div>

            {/* Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
                {currentIndex + 1} / {totalItems}
            </div>
        </div>
    );
};

export default MediaLightbox;
