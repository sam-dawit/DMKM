import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

const slides = [
    {
        image: "/src/assets/church1.jpg",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/src/assets/Church2.jpg",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/src/assets/Church3.jpg",
        link: "/sundaySchool/gallery",
    },
    {
        image: "/src/assets/Church4.jpg",
        link: "/sundaySchool/gallery",
    },
];

const SuperFlowSwiper = () => {
    return (
        <div className="flex justify-center py-8 bg-gray-900 min-h-[300px]">
            <Swiper
                modules={[EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                    rotate: 30,
                    stretch: 10,
                    depth: 150,
                    modifier: 1,
                    slideShadows: true,
                }}
                className="w-[880px] max-w-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide
                        key={index}
                        className="relative h-[300px] rounded-md overflow-hidden"
                        style={{
                            backgroundImage: `url(${slide.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            boxShadow: "0 0 20px rgba(0,0,0,0.3)",
                        }}
                    >
                        <a
                            href={slide.link}
                            className="absolute inset-0 z-10 hover:bg-black/20 transition-all duration-300"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default SuperFlowSwiper;
