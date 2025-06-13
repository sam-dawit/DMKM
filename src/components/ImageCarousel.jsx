import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import MediaLightbox from "./MediaLightbox";

const images = [
    {
        type: "image",
        image: "/src/assets/church1.png",
    },
    {
        type: "image",
        image: "/src/assets/Church2.png",
    },
    {
        type: "image",
        image: "/src/assets/Church3.png",
    },
    {
        type: "image",
        image: "/src/assets/Church4.png",
    },
];

const ImageCarousel = () => {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

    const handleMediaClick = (index) => {
        setCurrentMediaIndex(index);
        setIsLightboxOpen(true);
    };

    const handleNext = () => {
        setCurrentMediaIndex((prev) => (prev + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentMediaIndex(
            (prev) => (prev - 1 + images.length) % images.length
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
                    slidesPerView={3}
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
                    className="w-[880px] max-w-full"
                >
                    {images.map((image, index) => (
                        <SwiperSlide
                            key={index}
                            className="relative h-[300px] rounded-md overflow-hidden cursor-pointer"
                            onClick={() => handleMediaClick(index)}
                        >
                            <div
                                className="w-full h-full"
                                style={{
                                    backgroundImage: `url(${image.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                                }}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <MediaLightbox
                isOpen={isLightboxOpen}
                onClose={() => setIsLightboxOpen(false)}
                media={images[currentMediaIndex]}
                onNext={handleNext}
                onPrev={handlePrev}
                currentIndex={currentMediaIndex}
                totalItems={images.length}
            />
        </>
    );
};

export default ImageCarousel;
