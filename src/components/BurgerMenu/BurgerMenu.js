import React, { useEffect, useRef } from 'react';
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
    const menuRef = useRef(null);

    const addedClass = isOpenMenu ? 'open' : 'close';

    const handleCloseMenu = () => dispatch(closeMenu());

    useEffect(() => {
        if (isOpenMenu) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpenMenu, dispatch]);

    return (
        <div className={`burger-menu ${addedClass}`} ref={menuRef}>
            <div className={css.wrapper}>
                <button
                    type='button'
                    onClick={handleCloseMenu}
                    className={css.button}>
                    <MdOutlineClose className={css.icon} />
                </button>
                <NavLink to="/" className={css.link} onClick={handleCloseMenu}>Home</NavLink>
            </div>
            {isLoggedIn
                ? <UserMenu />
                : <AuthMenu handleCloseMenu={handleCloseMenu} />}
        </div>
    )
}

export default BurgerMenu;