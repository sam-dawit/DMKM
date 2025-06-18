import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import MediaLightbox from "./MediaLightbox";

const reels = [
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DKo62tCR8XG/embed",
    },
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DKo6DZ6xblP/embed",
    },
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DKo42UzxHYa/embed",
    },
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DI8joTqxpAR/embed",
    },
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DI8i8bxxj9n/embed",
    },
    {
        type: "instagram",
        reelUrl: "https://www.instagram.com/p/DIqLJJ4OJDr/embed",
    },
];

const InstagramCarousel = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const handleMediaClick = (index) => {
        setCurrentMediaIndex(index);
        setIsLightboxOpen(true);
    };

    const handleNext = () => {
        setCurrentMediaIndex((prev) => (prev + 1) % reels.length);
    };

    const handlePrev = () => {
        setCurrentMediaIndex(
            (prev) => (prev - 1 + reels.length) % reels.length
        );
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
                    {reels.map((reel, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative h-[300px] rounded-md overflow-hidden cursor-pointer"
                        >
                            <div
                                className="absolute inset-0 z-10"
                                onClick={() => handleMediaClick(index)}
                            />
                            <div className="w-full h-full bg-black">
                                <iframe
                                    src={reel.reelUrl}
                                    className="w-full h-full pointer-events-none"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency="true"
                                    allow="encrypted-media"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <MediaLightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                media={reels[currentMediaIndex]}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={currentMediaIndex}
                totalItems={reels.length}
            />
        </>
    );
};

export default InstagramCarousel;
