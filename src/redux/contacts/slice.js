import { createSlice, nanoid } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [] },
  reducers: {
    addContact: {
      reducer: (state, { payload }) => {
        state.items = [payload, ...state.items];
      },
      prepare: newContact => {
        return {
          payload: { ...newContact, id: nanoid() },
        };
      },
    },
    deleteContact: (state, { payload }) => {
      state.items = state.items.filter(contact => contact.id !== payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;