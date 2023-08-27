import React from 'react';
import css from './singUpForm.module.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { signUpUser } from 'redux/auth/operations';
import { validationSchemaSignUp } from 'components/validationSchemes';

const SignUpForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const handleSubmit = (values, { resetForm }) => {
        dispatch(signUpUser(values));
        resetForm();
    };

    return (
        <div className={css.wrapper}>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchemaSignUp}
                onSubmit={handleSubmit}
            >
                {formikProps => (
                    <Form className={css.form}>
                        <label className={css.label} htmlFor="name">Name</label>
                        <Field
                            className={css.input}
                            type="text"
                            id="name"
                            name="name"
                            placeholder="John"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className={css.error}
                        />

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

                        <button type="submit" className={css.button}>Sign Up</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default SignUpForm;
