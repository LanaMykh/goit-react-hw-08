import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: { items: [], loading: false, error: null },
    extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state) => {
        console.log("p");
        
        state.loading = true;
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        console.log("f");
        
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        console.log("e");
        
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;