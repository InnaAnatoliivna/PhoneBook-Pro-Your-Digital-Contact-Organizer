//contactsSlice

export const selectContacts = state => state.contacts.items;
export const selectErrorContacts = state => state.contacts.error;
export const selectLoaderContacts = state => state.contacts.isLoading;

//filterSlice

export const selectFilter = state => state.filter;

//menuSlise

export const selectMenu = state => state.menu.isOpen;


