import "./PinButton.scss";
import Pin from "../Pin/Pin";

function PinButton(props) {
  const { direction } = props;

  return (
    <button className="button button__pin-only">
      <Pin
        type="domed"
        direction={direction}
        parentClass="button__pin button__pin_type_parent-size"
        useOwnColorScheme={false}
      />
    </button>
  );
}

export default PinButton;
