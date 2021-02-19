import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../components/v1/counter/counterSlice';
import mobileViewReducer from '../components/v1/Header/headerSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mobileView: mobileViewReducer,
  },
});
