import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
// import { selectContacts, selectNameFilter } from "./selectors";

const casePending = (state) => {
  state.loading = true;
  state.error = null;
};

const caseRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: { items: [], loading: false, error: null },
    extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, casePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, caseRejected)
      .addCase(addContact.pending, casePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, caseRejected)
      .addCase(deleteContact.pending, casePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, caseRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;


// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectNameFilter],
//     (contacts, filter) => {
//         return contacts.filter(contact =>
//       contact.name.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   }
// );