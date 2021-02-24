// import { useState } from "react";
import "./MobMenu.scss";
import FocusMenu from "../FocusMenu/FocusMenu";

const MobMenu = function (props) {
  return <FocusMenu menuType="mob" {...props} />;
};

export default MobMenu;
