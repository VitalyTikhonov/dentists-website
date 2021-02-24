// import { useState } from "react";
import "./CoverMenu.scss";
import FocusMenu from "../FocusMenu/FocusMenu";

const CoverMenu = function (props) {
  return <FocusMenu menuType="cover" {...props} />;
};

export default CoverMenu;
