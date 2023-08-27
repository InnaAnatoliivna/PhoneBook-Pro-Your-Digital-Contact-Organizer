import * as Yup from 'yup';

export const validationAddContactForm = Yup.object().shape({
    name: Yup
        .string()
        .required('Name is required')
        .matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, "Invalid name format! Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"),
    number: Yup
        .string()
        .required('Number is required')
        .matches(/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/, "Invalid phone number format! Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"),
});

export const validationSchemaLogin = Yup.object({
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});

export const validationSchemaSignUp = Yup.object({
    name: Yup
        .string('Enter your name')
        .required('Name is required'),
    email: Yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    password: Yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
});
