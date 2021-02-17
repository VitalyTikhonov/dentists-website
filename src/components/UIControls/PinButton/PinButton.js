import "./PinButton.scss";
import Pin from "../Pin/Pin";

function PinButton(props) {
  const { type, direction, opaque, parentClass } = props;

  return (
    <button
      className={`button button_type_icon-only button__pin-only ${parentClass}`}
    >
      <Pin
        type={type}
        direction={direction}
        opaque={opaque}
      />
    </button>
  );
}

export default PinButton;
