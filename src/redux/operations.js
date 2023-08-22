import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://64db94af593f57e435b12a93.mockapi.io';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

// - C O N T A C T S - >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
/*
 * GET @ /contacts/fetchAll
 */
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        const token = state.auth.token;
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get('/contacts', { headers });
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
}
);
/*
 * POST @ /contacts/addContact
 * contact: { name, id, phone }
 */
export const addContact = createAsyncThunk('contacts/addContact',
    async (contact, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            const headers = { Authorization: `Bearer ${token}` };

            const { data } = await axios.post('/contacts', contact, { headers });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
/*
 * DELETE @ /contacts/deleteContact
 * idContact: string
 */
export const deleteContact = createAsyncThunk('contacts/deleteContact',
    async (idContact, thunkAPI) => {
        try {
            const state = thunkAPI.getState();
            const token = state.auth.token;
            const headers = { Authorization: `Bearer ${token}` };

            const { data } = await axios.delete(`/contacts/${idContact}`, { headers });
            return data;
        } catch (e) {
            return thunkAPI.rejectWithValue(e.message);
        }
    }
);
/*
 * PATCH @ /contacts/update
 * idContact: string
 * updateData: { name, id, phone }
 */
export const updateContact = createAsyncThunk('contacts/update', async (contact, thunkAPI) => {
    const { contactId, ...updateData } = contact;
    try {
        const { data } = await axios.patch(`/contacts/${contactId}`, updateData);
        return data;
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
});
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<