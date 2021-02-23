import { createSlice } from '@reduxjs/toolkit';

export const tabletViewSlice = createSlice({
  name: 'tabletView',
  initialState: {
    value: false,
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    toggleTabletView: (state, action) => {
      state.value = action.payload;
    },
    // disallowtabletView: state => {
    //   state.value = false;
    // },
  },
});

export const { toggleTabletView } = tabletViewSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectTabletView = state => state.tabletView.value;

export default tabletViewSlice.reducer;
