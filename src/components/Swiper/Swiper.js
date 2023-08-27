import React, { useEffect, useRef } from 'react';
// import Swiper core and required modules
import { Navigation, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
//image
import screenPhoneBook1 from 'images/nav-1.jpg';
import screenPhoneBook2 from 'images/singup-2.jpg';
import screenPhoneBook3 from 'images/login-3.jpg';
import screenPhoneBook4 from 'images/user-4.jpg';
import screenPhoneBook5 from 'images/contacts-4.jpg';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const SwiperHomes = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        const swiperInstance = swiperRef.current.swiper;
        const autoplayInterval = setInterval(() => {
            if (swiperInstance) {
                swiperInstance.slideNext();
            }
        }, 4000);
        return () => clearInterval(autoplayInterval);
    }, []);

    return (
        <div>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, A11y, EffectFade, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={false}
                navigation={true}
                mousewheel={true}
                loopedSlides={5}
                // effect="fade"
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                }}
            >
                <SwiperSlide>
                    <img src={screenPhoneBook1}
                        alt='navigation'
                        srcSet={`
                            ${screenPhoneBook1} 320w,
                            ${screenPhoneBook1} 700w, 
                            ${screenPhoneBook1} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 700px, 
                            (max-width: 1280px) 1280"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={screenPhoneBook2}
                        alt='how to sign up'
                        srcSet={`
                            ${screenPhoneBook2} 320w, 
                            ${screenPhoneBook2} 700w, 
                            ${screenPhoneBook2} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 700px, 
                            (max-width: 1280px) 1280"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={screenPhoneBook3}
                        alt='how to login'
                        srcSet={`
                            ${screenPhoneBook3} 320w, 
                            ${screenPhoneBook3} 700w, 
                            ${screenPhoneBook3} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 700px, 
                            (max-width: 1280px) 1280"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={screenPhoneBook4}
                        alt='user account'
                        srcSet={`
                            ${screenPhoneBook4} 320w, 
                            ${screenPhoneBook4} 700w, 
                            ${screenPhoneBook4} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 700px,
                            (max-width: 1280px) 1280"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={screenPhoneBook5}
                        alt='your contacts'
                        srcSet={`
                            ${screenPhoneBook5} 320w, 
                            ${screenPhoneBook5} 700w, 
                            ${screenPhoneBook5} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 700px, 
                            (max-width: 1280px) 1280"
                    />
                </SwiperSlide>
            </Swiper>
        </div>)
}

export default SwiperHomes;