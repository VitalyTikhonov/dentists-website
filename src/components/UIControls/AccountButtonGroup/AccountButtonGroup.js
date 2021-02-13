import { memo } from "react";
import { Link } from "react-router-dom";
import "./AccountButtonGroup.scss";

const AccountButtonGroup = memo(function (props) {
  return (
    <nav className="cover__menu-overlay-right" aria-labelledby="header-navigation">
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Дополнительное меню на обложке сайта – авторизация и аккаунт
      </h2>
      <ul>
        {props.loggedIn ? (
          <>
            <li className="cover__menu-item cover__menu-item_principal list-item-unstyling" >
              <Link
                to="account"
                className="button button__overCover button__ic-lab_type_account link-unstyling"
              >
                Личный кабинет
              </Link>
            </li>
            <li className="cover__menu-item cover__menu-item_secondary list-item-unstyling" >
              <button
                type="button"
                className="button button__overCover button__ic-lab_type_logout"
              >
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
                Войти
              </Link>
            </li>
            <li className="cover__menu-item cover__menu-item_secondary list-item-unstyling" >
              <Link
                to="signup"
                className="button button__overCover button__ic-lab_type_signup link-unstyling"
              >
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
