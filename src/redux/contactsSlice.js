import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, getContacts } from "./contactsOps";

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: { items: [], isLoading: false, error: null },
    extraReducers: builder => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.isLoadingloading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice.reducer;