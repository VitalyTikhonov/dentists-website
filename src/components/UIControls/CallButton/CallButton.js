import "./CallButton.scss";
import CallIcon from "../../../images/UI-control-elements/svg/SvgComponents/Call";

const CallButton = function () {

  return (
    <button className="button button__call aux">
      <CallIcon className="button__icon-left-to-label"/>
      Записаться через&nbsp;колл-центр
    </button>
  );
};

export default CallButton;
