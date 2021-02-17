import { useState } from "react";
import styles from "./UIControls.module.scss";
import "./_UIControlsGlobals.scss";
import cn from "classnames";
import AccountButtonGroup from "./AccountButtonGroup/AccountButtonGroup";
import CoverButtonPanel from "./CoverButtonPanel/CoverButtonPanel";
import LabelAndPinButton from "./LabelAndPinButton/LabelAndPinButton";
import PinButton from "./PinButton/PinButton";
import SocialMediaIconPanel from "./SocialMediaIconPanel/SocialMediaIconPanel";
import MobMenuButton from "./MobMenuButton/MobMenuButton";
import CallButton from "./CallButton/CallButton";

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
      <div
        className={cn(
          styles.UIDevContainer__pageWidthSection,
          styles.UIDevContainer__column_bgBlue
        )}
      >
        <MobMenuButton />
        <PinButton type="flat" direction="down" parentClass="aux" />
        <SocialMediaIconPanel />
      </div>
      <div
        className={cn(
          styles.UIDevContainer__pageWidthSection,
          styles.UIDevContainer__column_bgLightBlue
        )}
      >
        <LabelAndPinButton label={"Свернуть"} direction="up" />
        <LabelAndPinButton label={"Подробнее"} direction="down" />
        <LabelAndPinButton label={"Примеры работ"} direction="right" />
      </div>
      <div
        className={cn(
          styles.UIDevContainer__pageWidthSection,
          styles.UIDevContainer__column_bgWallpaper
        )}
      >
        <CallButton />
        <div className={cn(styles.UIDevContainer__textDimmerOnBgWallpaper)}>
          <PinButton
            type="domed"
            direction="down"
            opaque="true"
            parentClass="button__pin-only_type_opaque"
          />
        </div>
      </div>
      <div className={cn(styles.UIDevContainer__columnContainer)}></div>
    </div>
  );
};

export default UIControls;
