import { configureStore } from '@reduxjs/toolkit';
import mobileHeaderViewReducer from '../components/Header/mobileHeaderViewSlice';
import tabletViewReducer from '../components/Header/tabletViewSlice';
import counterReducer from '../components/v1/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mobileHeaderView: mobileHeaderViewReducer,
    tabletView: tabletViewReducer,
  },
});
