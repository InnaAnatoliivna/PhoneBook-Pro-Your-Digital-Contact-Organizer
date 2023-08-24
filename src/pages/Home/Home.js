import React from 'react'
// import screenPhoneBook4 from 'images/Screenshot 2023-08-22 171506-1.jpg'
import css from './home.module.css'
import SwiperHomes from 'components/Swiper/Swiper'

const HomePage = () => {

    return (
        <div className={css.wrapper}>
            <h2 className={css.title}>Welcome to PhoneBook Pro!</h2>
            <p className={css.subtext}>Please register or log in to get started!</p>
            {/* <div className={css.thumb}>
                <img src={screenPhoneBook4} alt='icon4' width="750" height="450" className={css.iconBook} />
            </div> */}
            <SwiperHomes />
        </div>
    )
}

export default HomePage