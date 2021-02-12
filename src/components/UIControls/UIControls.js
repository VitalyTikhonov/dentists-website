import { useState } from "react";
import styles from "./UIControls.module.scss";
import cn from "classnames";
import AccountButtonGroup from "./AccountButtonGroup/AccountButtonGroup";

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
        <div className={cn(styles.UIDevContainer__controlsOnTheRight)}>
          <div className={cn(styles.cover__topControlOverlay)}>
            <AccountButtonGroup loggedIn={loggedIn} />
          </div>
        </div>
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
        ></div>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgWallpaper
          )}
        ></div>
      </div>
      {/* <div className={cn(styles.)} ></div> */}
    </div>
  );
};

export default UIControls;
