import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
 name : '',
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;