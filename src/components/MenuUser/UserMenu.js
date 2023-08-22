import { useAuth } from 'hooks/useAuth';
import React from 'react';
import css from './userMenu.module.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { logOutUser } from 'redux/auth/operations';
import { logOut } from 'redux/auth/userSlice';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={css.flexParent}>
            <Link to="/contacts" className={css.contacts}>My contacts</Link>
            <div className={css.wrapper}>
                <p className={css.email}>{user.email}</p>
                <button
                    type="button"
                    onClick={handleLogOut}
                    className={css.button}
                >LogOut</button>
            </div>
        </div>
    )
}

export default UserMenu