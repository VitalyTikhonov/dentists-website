import { useState } from "react";
import "./UIControls.scss";
import "./_UIControlsGlobals.scss";
import AccountButtonGroup from "./AccountButtonGroup/AccountButtonGroup";
import CoverMenu from "./CoverMenu/CoverMenu";
import MobMenu from "./MobMenu/MobMenu";
import LabelAndPinButton from "./LabelAndPinButton/LabelAndPinButton";
import PinButton from "./PinButton/PinButton";
import SocialMediaIconPanel from "./SocialMediaIconPanel/SocialMediaIconPanel";
import MobMenuButton from "./MobMenuButton/MobMenuButton";
import CallButton from "./CallButton/CallButton";

const UIControls = function (props) {
  const [loggedIn] = useState(false);

  return (
    <div className="ui-dev-page">
      <div className="ui-dev-page__section ui-dev-page__section_width_page ui-dev-page__section_bg_photo">
        <AccountButtonGroup loggedIn={loggedIn} />
        <CoverMenu loggedIn={loggedIn} />
        <MobMenu loggedIn={loggedIn} />
      </div>
      <div className="ui-dev-page__section ui-dev-page__section_width_page ui-dev-page__section_bg_blue">
        <MobMenuButton />
        <PinButton type="flat" direction="down" parentClass="aux" />
        <SocialMediaIconPanel />
      </div>
      <div className="ui-dev-page__section ui-dev-page__section_width_page ui-dev-page__section_bg_light-blue">
        <LabelAndPinButton label={"Свернуть"} direction="up" />
        <LabelAndPinButton label={"Подробнее"} direction="down" />
        <LabelAndPinButton label={"Примеры работ"} direction="right" />
      </div>
      <div className="ui-dev-page__section ui-dev-page__section_width_page ui-dev-page__section_bg_wallpaper">
        <CallButton />
        <div className="ui-dev-page__text-dimmer-on-wallpaper">
          <PinButton
            type="domed"
            direction="down"
            opaque="true"
            parentClass="button__pin-only_type_opaque"
          />
        </div>
      </div>
    </div>
  );
};

export default UIControls;
