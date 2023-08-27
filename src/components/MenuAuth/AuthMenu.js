import React from 'react'
import css from './authMenu.module.css'
import { NavLink } from 'react-router-dom'

const AuthMenu = ({ handleCloseMenu }) => {
    return (
        <div className={css.wrapper}>
            <NavLink to="/register" className={css.item} onClick={handleCloseMenu}>Sign Up</NavLink>
            <NavLink to="/login" className={css.item} onClick={handleCloseMenu}>Log In</NavLink>
        </div>
    )
}

export default AuthMenu