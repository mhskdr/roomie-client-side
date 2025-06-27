import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const HeroSection = ({ banner, scrollToRef }) => {
    const handleScroll = () => {
        scrollToRef?.current?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <div className="relative w-full h-[60vh]">
            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
                className="w-full h-full"
            >
                {banner.map((img) => (
                    <SwiperSlide key={img._id}>
                        <div className="relative w-full h-[60vh] overflow-hidden">
                            <img
                                src={img.url}
                                alt="Room Banner"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
                            <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white z-10 max-w-xl">
                                <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                                    Find Your Perfect <span className="text-accent">Roommate</span>
                                </h2>
                                <p className="text-lg md:text-xl mb-6">
                                    Discover and connect in the cities you love to live in.
                                </p>
                                <button onClick={handleScroll} className="bg-gradient-to-r from-primary to-accent text-white rounded-full px-6 py-2 hover:scale-105 transition-transform">
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSection;