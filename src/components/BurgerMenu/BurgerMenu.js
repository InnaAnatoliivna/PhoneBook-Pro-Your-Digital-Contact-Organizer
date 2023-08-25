import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from 'redux/selectors';
import css from './menu.module.css';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';
import UserMenu from 'components/MenuUser/UserMenu';
import AuthMenu from 'components/MenuAuth/AuthMenu';
import { MdOutlineClose } from 'react-icons/md';
import { closeMenu } from 'redux/reducers/menuSlice';


const BurgerMenu = () => {
    const isOpenMenu = useSelector(selectMenu);
    const dispatch = useDispatch();
    const { isLoggedIn } = useAuth();

    const addedClass = isOpenMenu ? 'open' : 'close';

    const handleCloseMenu = () => dispatch(closeMenu());

    return (
        <div className={`burger-menu ${addedClass}`}>
            <div className={css.wrapper}>
                <button
                    type='button'
                    onClick={handleCloseMenu}
                    className={css.button}>
                    <MdOutlineClose className={css.icon} />
                </button>
                <Link to="/" className={css.link}>Home</Link>
            </div>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
        </div>
    )
}

export default BurgerMenu;