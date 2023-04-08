import { createSlice } from '@reduxjs/toolkit';
// import { testContacts } from 'data';

import { fetchContacts } from './operations';

const handlePending = state => {
  state.isLoading = true;
};
const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, handleRejected),
  // reducers: {
  // addContact: {
  //   reducer(state, action) {
  //     state.push(action.payload);
  //     // return [...state, action.payload];
  //   },
  //   prepare({ name, number }) {
  //     return {
  //       payload: {
  //         id: nanoid(5),
  //         name,
  //         number,
  //       },
  //     };
  //   },
  // },
  // deleteContact(state, action) {
  //   return state.filter(contact => contact.id !== action.payload);
  // },
  // },
});

// export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
