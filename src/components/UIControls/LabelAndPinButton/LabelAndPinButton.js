import "./LabelAndPinButton.scss";
import Pin from "../Pin/Pin";

const LabelAndPinButton = function (props) {
  const { label, direction } = props;
  console.log('label', label);
  console.log('direction', direction);

  return (
    <button className="button button__label-and-pin aux">
      {label}
      <Pin
        className={`button__pin button__pin_direction_${direction} button__pin_on-right-in-button`}
      />
    </button>
  );
};

export default LabelAndPinButton;
