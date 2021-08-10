import { createSlice } from '@reduxjs/toolkit';

export const authButtonVisibilitySlice = createSlice({
  name: 'authButtonVisibility',
  initialState: {
    value: true,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setAuthButtonVisibility: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setAuthButtonVisibility } = authButtonVisibilitySlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectAuthButtonVisibility = state => state.authButtonVisibility.value;

export default authButtonVisibilitySlice.reducer;
