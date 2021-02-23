import { configureStore } from '@reduxjs/toolkit';
import mobileViewReducer from '../components/Header/mobileViewSlice';
import tabletViewReducer from '../components/Header/tabletViewSlice';
import counterReducer from '../components/v1/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mobileView: mobileViewReducer,
    tabletView: tabletViewReducer,
  },
});
