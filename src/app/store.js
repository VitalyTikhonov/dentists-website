import { configureStore } from '@reduxjs/toolkit';
import mobileHeaderViewReducer from '../components/Header/mobileHeaderViewSlice';
import screenTypeReducer from '../components/Header/screenTypeSlice';
import authButtonVisibilityReducer from '../components/Header/authButtonVisibilitySlice';
import coverMenuVisibilityReducer from '../components/Header/coverMenuVisibilitySlice';

export default configureStore({
  reducer: {
    mobileHeaderView: mobileHeaderViewReducer,
    screenType: screenTypeReducer,
    authButtonVisibility: authButtonVisibilityReducer,
    coverMenuVisibility: coverMenuVisibilityReducer,
  },
});
