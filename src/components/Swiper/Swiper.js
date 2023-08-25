import React, { useEffect, useRef } from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import css from './swiper.module.css';
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
    const swiperRef = useRef(null); // Створіть посилання useRef
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
        <div className='container'>
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={false}
                // pagination={{ clickable: true }}
                navigation={true}
                mousewheel={true}
                loopedSlides={5}
                effect="fade"
                className={css.swiper}
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
                    {/* <div className={css.thumb}> */}
                    <img src={screenPhoneBook1}
                        alt='navigation'
                        srcSet={`
                            ${screenPhoneBook1} 320w,
                            ${screenPhoneBook1} 768w, 
                            ${screenPhoneBook1} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 768px, 1280px"
                        className={css.iconBook} />
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={css.thumb}> */}
                    <img src={screenPhoneBook2}
                        alt='how to sign up'
                        srcSet={`
                            ${screenPhoneBook2} 320w, 
                            ${screenPhoneBook2} 768w, 
                            ${screenPhoneBook2} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 768px, 1280px"
                        className={css.iconBook} />
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={css.thumb}> */}
                    <img src={screenPhoneBook3}
                        alt='how to login'
                        srcSet={`
                            ${screenPhoneBook3} 320w, 
                            ${screenPhoneBook3} 768w, 
                            ${screenPhoneBook3} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 768px, 1280px"
                        className={css.iconBook} />
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={css.thumb}> */}
                    <img src={screenPhoneBook4}
                        alt='user account'
                        srcSet={`
                            ${screenPhoneBook4} 320w, 
                            ${screenPhoneBook4} 768w, 
                            ${screenPhoneBook4} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 768px, 1280px"
                        className={css.iconBook} />
                    {/* </div> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <div className={css.thumb}> */}
                    <img src={screenPhoneBook5}
                        alt='your contacts'
                        srcSet={`
                            ${screenPhoneBook5} 320w, 
                            ${screenPhoneBook5} 768w, 
                            ${screenPhoneBook5} 1280w`}
                        sizes="
                            (max-width: 320px) 320px, 
                            (max-width: 768px) 768px, 1280px"
                        className={css.iconBook} />
                    {/* </div> */}
                </SwiperSlide>
            </Swiper>
        </div>)
}

export default SwiperHomes;