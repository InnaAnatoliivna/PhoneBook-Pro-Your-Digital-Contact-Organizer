import React from 'react'
import css from './authMenu.module.css'
import { NavLink } from 'react-router-dom'

const AuthMenu = () => {
    return (
        <div className={css.wrapper}>
            <NavLink to="/register" className={css.item}>Sign Up</NavLink>
            <NavLink to="/login" className={css.item}>Log In</NavLink>
        </div>
    )
}

export default AuthMenu