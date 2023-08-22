// import Login from 'pages/Login/Login'
import SignUpForm from 'components/SignUpForm/SignUpForm'
import React from 'react'
// import { Link } from 'react-router-dom'
// import { signUpUser } from 'redux/auth/operations';

const SignUpPage = () => {

    return (
        <div className='container'>
            <h2 className='form-suptext'>Create account</h2>
            <SignUpForm />
        </div>
    )
}

export default SignUpPage