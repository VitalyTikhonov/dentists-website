import { configureStore } from '@reduxjs/toolkit';
import mobileHeaderViewReducer from './mobileHeaderViewSlice';
import screenTypeReducer from './screenTypeSlice';
import authButtonVisibilityReducer from './authButtonVisibilitySlice';
import coverMenuVisibilityReducer from './coverMenuVisibilitySlice';
import pagePropsReducer from './pagePropsSlice';
import openBarIndexReducer from './openBarIndexSlice';

export default configureStore({
  reducer: {
    mobileHeaderView: mobileHeaderViewReducer,
    screenType: screenTypeReducer,
    authButtonVisibility: authButtonVisibilityReducer,
    coverMenuVisibility: coverMenuVisibilityReducer,
    openBarIndex: openBarIndexReducer,
    pageProps: pagePropsReducer,
  },
});
