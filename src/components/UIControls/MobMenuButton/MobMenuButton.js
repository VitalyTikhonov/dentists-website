import "./MobMenuButton.scss";
import MenuIcon from "../svgReactComponents/MenuBurger";

function MobMenuButton(props) {
  const { onClick } = props;

  return (
    <button
      className="button button_type_icon-only button__mob-menu-open-button"
      onClick={onClick}
    >
      <MenuIcon className="button__mob-menu-open-button-icon" />
    </button>
  );
}

export default MobMenuButton;
