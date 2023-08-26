// import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import css from './menu.module.css';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/MenuUser/UserMenu';
import AuthMenu from 'components/MenuAuth/AuthMenu';
import { MdOutlineClose } from 'react-icons/md';
import { closeMenu } from 'redux/reducers/menuSlice';


const BurgerMenu = () => {
    const isOpenMenu = useSelector(selectMenu);
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();
    // const menuRef = useRef(null);

    const addedClass = isOpenMenu ? 'open' : 'close';

    const handleCloseMenu = () => dispatch(closeMenu());
    //---

    // useEffect(() => {
    //     const handleOutsideClick = event => {
    //         if (menuRef.current && !menuRef.current.contains(event.target)) {
    //             dispatch(closeMenu());
    //         }
    //     };
    //     if (isOpenMenu) {
    //         document.body.classList.add('no-scroll'); // Додати клас для блокування прокручування
    //     } else {
    //         document.body.classList.remove('no-scroll'); // Видалити клас для блокування прокручування
    //     }

    //     document.addEventListener('click', handleOutsideClick);
    //     return () => {
    //         document.removeEventListener('click', handleOutsideClick);
    //         document.body.classList.remove('no-scroll'); // Видалити клас при закритті меню
    //     };
    // }, [isOpenMenu, dispatch]);
    // //--

    return (
        <div className={`burger-menu ${addedClass}`}>
            <div className={css.wrapper}>
                <button
                    type='button'
                    onClick={handleCloseMenu}
                    className={css.button}>
                    <MdOutlineClose className={css.icon} />
                </button>
                <NavLink to="/" className={css.link}>Home</NavLink>
            </div>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
    )
}

export default BurgerMenu;