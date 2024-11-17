import { createSlice } from "@reduxjs/toolkit";
import contactsData from '../contacts.json';

// console.log(contactsData);

const INITIAL_STATE = {
  contacts: contactsData,
};

// console.log(INITIAL_STATE);

const contactsSlice = createSlice({
  name: 'contacts',
    initialState:
        INITIAL_STATE,
        //  { items: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;