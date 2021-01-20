import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import mobileViewReducer from '../components/Header/headerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mobileView: mobileViewReducer,
  },
});
