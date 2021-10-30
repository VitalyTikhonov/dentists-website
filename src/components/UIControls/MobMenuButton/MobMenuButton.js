import "./MobMenuButton.scss";
import MenuIcon from "../svgReactComponents/MenuBurger";
import CloseIcon from "../svgReactComponents/Cross";

function MobMenuButton({ onClick, mobileMenuOpen }) {
  return (
    <button
      className="button button_type_icon-only button__mob-menu-open-button"
      onClick={onClick}
    >
      {!mobileMenuOpen
        ? <MenuIcon className="button__mob-menu-open-button-icon" />
        : <CloseIcon className="button__mob-menu-open-button-icon" />
      }
    </button>
  );
}

export default MobMenuButton;
