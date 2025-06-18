import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
    {
        image: "/assets/Church1.png",
        alt: "Sunday School Church Activity 1",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church2.png",
        alt: "Sunday School Church Activity 2",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church3.png",
        alt: "Sunday School Church Activity 3",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church4.png",
        alt: "Sunday School Church Activity 4",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church5.jpg",
        alt: "Sunday School Church Activity 5",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church6.jpg",
        alt: "Sunday School Church Activity 6",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church7.jpg",
        alt: "Sunday School Church Activity 7",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church8.jpg",
        alt: "Sunday School Church Activity 8",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church9.jpg",
        alt: "Sunday School Church Activity 9",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/assets/Church10.jpg",
        alt: "Sunday School Church Activity 10",
        link: "/sundaySchool/gallery",
    },
];

const SuperFlowSwiper = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleImageClick = (index) => {
        setCurrentImageIndex(index);
        setIsLightboxOpen(true);
    };

    const handleNext = () => {
        setCurrentImageIndex((prev) => (prev + 1) % slides.length);
    };

    const handlePrev = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    const handleKeyDown = (e) => {
        if (e.key === "Escape") {
            setIsLightboxOpen(false);
        } else if (e.key === "ArrowRight") {
            handleNext();
        } else if (e.key === "ArrowLeft") {
            handlePrev();
        }
    };

    return (
        <>
            <div className="flex justify-center py-8 bg-gray-900 min-h-[300px]">
                <Swiper
                    modules={[EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={1}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    coverflowEffect={{
                        rotate: 30,
                        stretch: 10,
                        depth: 150,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    className="w-full max-w-[880px]"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative h-[300px] rounded-md overflow-hidden cursor-pointer"
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage: `url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                                }}
                                role="img"
                                aria-label={slide.alt}
                                onClick={() => handleImageClick(index)}
                            >
                                <div className="absolute inset-0 z-10 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 opacity-0 hover:opacity-100 transition-opacity duration-300">
                                        <svg
                                            className="w-6 h-6 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lightbox Modal */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                    onClick={() => setIsLightboxOpen(false)}
                    onKeyDown={handleKeyDown}
                    tabIndex={0}
                >
                    {/* Close button */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsLightboxOpen(false);
                        }}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-2"
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
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handlePrev();
                        }}
                        className="absolute left-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-3"
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>

                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNext();
                        }}
                        className="absolute right-4 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-3"
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>

                    {/* Image container */}
                    <div
                        className="relative w-full h-full flex items-center justify-center p-4"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={slides[currentImageIndex].image}
                            alt={slides[currentImageIndex].alt}
                            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Counter */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg bg-black/50 px-4 py-2 rounded-full">
                        {currentImageIndex + 1} / {slides.length}
                    </div>
                </div>
            )}
        </>
    );
};

export default SuperFlowSwiper;
