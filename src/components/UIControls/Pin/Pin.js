import Pin from "../../../images/UI-control-elements/svg/SvgComponents/Pin.js";
import "./Pin.scss";

function PinButton(props) {
  const { type, direction, parentClass, opaque } = props;

  return (
    <Pin
      className={`pin pin_type_${type} pin_direction_${direction} ${parentClass}`}
      opaque={opaque}
    />
  );
}

export default PinButton;
