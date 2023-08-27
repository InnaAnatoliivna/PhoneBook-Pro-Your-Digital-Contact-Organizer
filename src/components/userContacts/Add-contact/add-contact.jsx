import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getRandomId } from 'components/random-id'
import css from 'components/userContacts/Add-contact/add-contact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../../redux/selectors';
import { addContact } from '../../../redux/operations';
import { validationAddContactForm } from 'components/validationSchemes';

const nameInputId = getRandomId();
const numerInputId = getRandomId();

const AddContactForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const onChangeInput = evt => {
        const { name, value } = evt.target;
        if (name === 'name') setName(value);
        if (name === 'number') setNumber(value);
    }

    const onAddToContacts = e => {
        e.preventDefault();
        const dataFields = { name: name, number: number };
        //Validation check with yup
        try {
            validationAddContactForm.validateSync(dataFields);
            const isContact = contacts.find(contact => contact.name === dataFields.name);
            !isContact
                ? dispatch(addContact(dataFields))
                : toast.warn(`${name} is already in contacts`);
            setName('');
            setNumber('');
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <>
            <form className={css.form} onSubmit={onAddToContacts}>
                <label className={css.label} htmlFor={nameInputId}>
                    Name
                </label>
                <input
                    className={css.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChangeInput}
                    required
                />
                <label className={css.label} htmlFor={numerInputId}>
                    Number
                </label>
                <input
                    className={css.input}
                    type="tel"
                    name="number"
                    value={number}
                    onChange={onChangeInput}
                    required
                />
                <button type="submit" className={css.button}>
                    Add contact
                </button>
            </form>
        </>
    )
}

export default AddContactForm;