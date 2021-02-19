import "./MobMenuButton.scss";
import MenuIcon from "../svgReactComponents/MenuBurger";

function MobMenuButton(props) {
  const { parentClass } = props;

  return (
    <button
      className={`button button_type_icon-only button__mob-menu-open-button ${parentClass}`}
    >
      <MenuIcon className="button__mob-menu-open-button-icon" />
    </button>
  );
}

export default MobMenuButton;
