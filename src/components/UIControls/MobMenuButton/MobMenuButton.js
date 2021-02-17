import "./MobMenuButton.scss";
import MenuIcon from "../../../images/UI-control-elements/svg/SvgComponents/Menu";

function MobMenuButton(props) {
  const { parentClass } = props;

  return (
    <button
      className={`button button_type_icon-only button__mob-menu ${parentClass}`}
    >
      <MenuIcon className="button__mob-menu-icon" />
    </button>
  );
}

export default MobMenuButton;
