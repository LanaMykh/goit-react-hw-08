import { createSelector } from "@reduxjs/toolkit";

export const selectNameFilter = (state) => state.filters.name;
export const selectContacts = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;


export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
    (contacts, filter) => {
    //   console.log(contacts);
      
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  }
);