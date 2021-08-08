import { configureStore } from '@reduxjs/toolkit';
import mobileHeaderViewReducer from '../components/Header/mobileHeaderViewSlice';
import screenTypeReducer from '../components/Header/screenTypeSlice';
import authButtonVisibilityReducer from '../components/Header/authButtonVisibilitySlice';
import coverMenuVisibilityReducer from '../components/Header/coverMenuVisibilitySlice';
import counterReducer from '../components/v1/counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    mobileHeaderView: mobileHeaderViewReducer,
    screenType: screenTypeReducer,
    authButtonVisibility: authButtonVisibilityReducer,
    coverMenuVisibility: coverMenuVisibilityReducer,
  },
});
