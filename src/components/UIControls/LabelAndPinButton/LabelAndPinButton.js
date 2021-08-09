import "./LabelAndPinButton.scss";
import Pin from "../Pin/Pin";

const LabelAndPinButton = function ({ label, direction, positionClass, onClick }) {

  return (
    <button className={`button button__label-and-pin ${positionClass}`} onClick={onClick} >
      {label}
      <Pin type="flat" direction={direction} parentClass="button__pin"/>
    </button>
  );
};

export default LabelAndPinButton;
