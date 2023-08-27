import React from 'react';
import css from './loginForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/operations';
import { validationSchemaLogin } from 'components/validationSchemes';

const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values) => {
        dispatch(loginUser(values));
    };

    return (
        <div className={css.wrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaLogin}
                onSubmit={handleSubmit}
            >
                {formikProps => (
                    <Form className={css.form}>
                        <label className={css.label} htmlFor="email">Email</label>
                        <Field
                            className={css.input}
                            type="email"
                            id="email"
                            name="email"
                            placeholder="foobar@example.com"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className={css.error}
                        />

                        <label className={css.label} htmlFor="password">Password</label>
                        <Field
                            className={css.input}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="foobar15"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className={css.error}
                        />

                        <button
                            type="submit"
                            className={css.button}
                        >
                            Login
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginForm;