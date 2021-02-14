import { memo } from "react";
import { Link } from "react-router-dom";
import "./AccountButtonGroup.scss";
import AccountIcon from "../../../images/UI-control-elements/svg/SvgComponents/MockAvatar";
import LogoutIcon from "../../../images/UI-control-elements/svg/SvgComponents/Logout";
import LoginIcon from "../../../images/UI-control-elements/svg/SvgComponents/Login";
import Signup from "../../../images/UI-control-elements/svg/SvgComponents/AddUser";

const AccountButtonGroup = memo(function (props) {
  return (
    <nav className="cover__menu-overlay-right" aria-labelledby="header-navigation">
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Дополнительное меню на обложке сайта – авторизация и аккаунт
      </h2>
      <ul className="list-unstyling">
        {props.loggedIn ? (
          <>
            <li className="cover__menu-item cover__menu-item_principal list-item-unstyling" >
              <Link
                to="account"
                className="button button__overCover button__ic-lab_type_account link-unstyling"
              >
                <AccountIcon className="cover__menu-icon" />
                Личный кабинет
              </Link>
            </li>
            <li className="cover__menu-item cover__menu-item_secondary list-item-unstyling" >
              <button
                type="button"
                className="button button__overCover button__ic-lab_type_logout"
              >
                <LogoutIcon className="cover__menu-icon" />
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="cover__menu-item cover__menu-item_principal list-item-unstyling" >
              <Link
                to="login"
                className="button button__overCover button__ic-lab_type_login link-unstyling"
              >
                <LoginIcon className="cover__menu-icon" />
                Войти
              </Link>
            </li>
            <li className="cover__menu-item cover__menu-item_secondary list-item-unstyling" >
              <Link
                to="signup"
                className="button button__overCover button__ic-lab_type_signup link-unstyling"
              >
                <Signup className="cover__menu-icon" />
                Регистрация
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
});

export default AccountButtonGroup;
