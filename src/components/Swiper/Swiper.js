// import React from 'react'
// //image
// import screenPhoneBook1 from 'images/nav-1.jpg'
// import screenPhoneBook2 from 'images/singup-2.jpg'
// import screenPhoneBook3 from 'images/login-3.jpg'
// import screenPhoneBook4 from 'images/user-4.jpg'
// import screenPhoneBook5 from 'images/contacts-4.jpg'
// import css from './swiper.module.css'

// import { Swiper, SwiperSlide } from 'swiper/react';

// // import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper/modules';

// // import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
// import 'swiper/swiper.min.css';
// import 'swiper/modules/autoplay/autoplay.min.css';
// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
// // Swiper.use([Navigation, Pagination, Scrollbar, A11y]); //+Autoplay
// // Styles must use direct files imports
// import 'swiper/swiper.scss'; // core Swiper
// import 'swiper/modules/navigation/navigation.scss'; // Navigation module
// import 'swiper/modules/pagination/pagination.scss'; // Pagination module

import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import css from './swiper.module.css';
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

    return (
        <div className='container'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
                autoplay={{ delay: 5000 }}
                loop={true}
                spaceBetween={20}
                slidesPerView={5}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('Зміна слайда')}
                effect="fade"
            >
                <SwiperSlide>
                    <div className={css.thumb}><img src={screenPhoneBook1} alt='navigation' width="600" height="350" className={css.iconBook} /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.thumb}><img src={screenPhoneBook2} alt='how to sign up' width="600" height="350" className={css.iconBook} /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.thumb}><img src={screenPhoneBook3} alt='how to login' width="600" height="350" className={css.iconBook} /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.thumb}><img src={screenPhoneBook4} alt='user account' width="600" height="350" className={css.iconBook} /></div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className={css.thumb}><img src={screenPhoneBook5} alt='your contacts' width="600" height="350" className={css.iconBook} /></div>
                </SwiperSlide>
            </Swiper>
        </div>)
}

export default SwiperHomes;