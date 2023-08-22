import React from 'react';
import css from './singUpForm.module.css'
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/operations';
// import { TextField } from '@material-ui/core';

const validationSchema = yup.object({
    name: yup
        .string('Enter your name')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

const SignUpForm = () => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            dispatch(signUpUser(values))
            resetForm();
        },
    });
    return (
        <div className={css.wrapper}>
            <form onSubmit={formik.handleSubmit} className={css.form}>
                <label className={css.label}>Name</label>
                <input
                    className={css.input}
                    id="name"
                    name="name"
                    label="name"
                    placeholder='John'
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // error={formik.touched.name && Boolean(formik.errors.name)}
                // helperText={formik.touched.name && formik.errors.name}
                />

                <label className={css.label}>Email</label>
                <input
                    className={css.input}
                    id="email"
                    name="email"
                    label="email"
                    placeholder='foobar@example.com'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // error={formik.touched.email && Boolean(formik.errors.email)}
                // helperText={formik.touched.email && formik.errors.email}
                />
                <label className={css.label}>Password</label>
                <input
                    className={css.input}
                    id="password"
                    name="password"
                    label="password"
                    type="password"
                    placeholder='foobar15'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                // error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
                />
                <button type="submit" className={css.button}>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUpForm