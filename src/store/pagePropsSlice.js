import { createSlice } from '@reduxjs/toolkit';

export const pagePropsSlice = createSlice({
  name: 'pageProps',
  initialState: {
    value: {},
  },
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    setPageProps: (state, action) => {
      state.value = { ...state.value, ...action.payload};
    }
  },
});

export const { setPageProps } = pagePropsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
export const selectPageProps = state => state.pageProps.value;

export default pagePropsSlice.reducer;
