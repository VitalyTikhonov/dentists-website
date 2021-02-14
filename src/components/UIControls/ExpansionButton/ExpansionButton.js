import "./ExpansionButton.scss";
// import RightChevron from "../../../images/UI-control-elements/svg/SvgComponents/RightChevron";
import PinBlueDown from "../../../images/UI-control-elements/svg/SvgComponents/PinBlueDown";
import PinBlueUp from "../../../images/UI-control-elements/svg/SvgComponents/PinBlueUp";

const ExpansionButton = function (props) {
  const { isOpen } = props;

  return (
    <button className="button__svg-container-button button__expansion aux">
      {isOpen ? (
        <PinBlueUp
          oultlineclass="svg-outline-elem"
          fillclass="svg-fill-elem"
        />
      ) : (
        <PinBlueDown
          oultlineclass="svg-outline-elem"
          fillclass="svg-fill-elem"
        />
      )}
    </button>
  );
};

export default ExpansionButton;
