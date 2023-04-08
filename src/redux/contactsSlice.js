import { createSlice, nanoid } from '@reduxjs/toolkit';
import { testContacts } from 'data';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: testContacts,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
        // return [...state, action.payload];
      },
      prepare({ name, number }) {
        return {
          payload: {
            id: nanoid(5),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
