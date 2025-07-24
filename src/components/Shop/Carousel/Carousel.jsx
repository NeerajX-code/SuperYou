import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

const Carousel = () => {
    const slides = [
        {
            product:
                "https://superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=3840",
        },
        {
            product:
                "https://superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_8a1916ec-6d32-45be-9cbb-e4f4aa314fdc.jpg?v=1731838619&width=1500",
        },
        {
            product:
                "https://superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy_2_1_692530f8-79ed-4eb6-a60c-e8d1eb3e5dfd.jpg?v=1731838619&width=1500",
        },
        {
            product:
                "https://superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy_3.jpg?v=1731838619&width=1500",
        }
    ];

    return (
        <div className="carousel">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 4000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop
                slidesPerView={1}
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="carousel__slide"
                        >
                            <img
                                src={slide.product}
                                alt={`product-${index}`}
                                className="carousel__image"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;


//superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=375 375w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=550 550w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=750 750w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=1100 1100w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=1500 1500w,  1780w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=2000 2000w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=3000 3000w, //superyou.in/cdn/shop/files/SY-About_Us-Being_Super-Desktop_copy.jpg?v=1731838619&width=3840 3840w