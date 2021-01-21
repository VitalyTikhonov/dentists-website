import { TOOGLE_MOB_VIEW } from '../constants/action-types';

export const toggleMobMenu = (allowMobView) => {
  return { type: TOOGLE_MOB_VIEW, payload: allowMobView };
}
