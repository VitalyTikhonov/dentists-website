import { useState } from "react";
import styles from "./UIControls.module.scss";
import cn from "classnames";
import AccountButtonGroup from "./AccountButtonGroup/AccountButtonGroup";
import CoverButtonPanel from "./CoverButtonPanel/CoverButtonPanel";
import LabelAndPinButton from "./LabelAndPinButton/LabelAndPinButton";
import Pin from "./Pin/Pin";

const UIControls = function (props) {
  const [loggedIn] = useState(false);

  return (
    <div className={cn(styles.UIDevContainer)}>
      <div
        className={cn(
          styles.UIDevContainer__pageWidthSection,
          styles.UIDevContainer__sectionWithPhotoBg
        )}
      >
        <AccountButtonGroup loggedIn={loggedIn} />
        <CoverButtonPanel loggedIn={loggedIn} />
      </div>
      <div className={cn(styles.UIDevContainer__columnContainer)}>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgBlue
          )}
        ></div>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgLightBlue
          )}
        >
          <LabelAndPinButton label={"Свернуть"} direction="up" />
          <LabelAndPinButton label={"Подробнее"} direction="down" />
          <LabelAndPinButton label={"Примеры работ"} direction="right" />
        </div>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgWallpaper
          )}
        >
          <div className={cn(styles.UIDevContainer__textDimmerOnBgWallpaper)}>
            <Pin className="button__pin button__pin_direction_right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UIControls;
