import "./LabelAndPinButton.scss";
import Pin from "../Pin/Pin";

const LabelAndPinButton = function (props) {
  const { label, direction } = props;

  return (
    <button className="button button__label-and-pin aux">
      {label}
      <Pin type="flat" direction={direction} parentClass="button__pin button__pin_type_right-to-label"/>
    </button>
  );
};

export default LabelAndPinButton;
