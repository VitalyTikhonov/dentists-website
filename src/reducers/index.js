import { TOOGLE_MOB_VIEW } from '../constants/action-types';

const initialState = {
  mobileView: false,
};

export default ((state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_MOB_VIEW: {
      return { ...state, mobileView: action.payload }
    };
    default: {
      return state;
    }
  }
});
