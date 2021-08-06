import "./LabelAndPinButton.scss";
import Pin from "../Pin/Pin";

const LabelAndPinButton = function ({ label, direction, positionClass }) {

  return (
    <button className={`button button__label-and-pin ${positionClass}`}>
      {label}
      <Pin type="flat" direction={direction} parentClass="button__pin"/>
    </button>
  );
};

export default LabelAndPinButton;
