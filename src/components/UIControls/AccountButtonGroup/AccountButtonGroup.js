import { useEffect } from "react";

import { Link } from "react-router-dom";
import "./AccountButtonGroup.scss";
import AccountIcon from "../svgReactComponents/MockAvatar";
import LogoutIcon from "../svgReactComponents/Logout";
import LoginIcon from "../svgReactComponents/Login";
import Signup from "../svgReactComponents/AddUser";

import useElemOnScreen from "../../../hooks/useElemOnScreen";
import { useDispatch } from "react-redux";
import { setAuthButtonVisibility } from "../../Header/authButtonVisibilitySlice";

const AccountButtonGroup = function (props) {
  const dispatch = useDispatch();
  const [elemRef, elemOnScreenResult] = useElemOnScreen();

  useEffect(() => {
    dispatch(setAuthButtonVisibility(elemOnScreenResult))
  }, [elemOnScreenResult, dispatch]);

  return (
    <nav className="cover__overlay-menu-right" aria-labelledby="header-navigation">
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Дополнительное меню на обложке сайта – авторизация и аккаунт
      </h2>
      <ul className="list-unstyling">
        {props.loggedIn ? (
          <>
            <li className="cover__overlay-menu-item cover__overlay-menu-item_principal" ref={elemRef} >
              <Link
                to="account"
                className="button cover__overlay-menu-button button__ic-lab_type_account link-unstyling"
              >
                <AccountIcon className="cover__overlay-menu-icon" />
                Личный кабинет
              </Link>
            </li>
            <li className="cover__overlay-menu-item cover__overlay-menu-item_secondary" >
              <button
                type="button"
                className="button cover__overlay-menu-button button__ic-lab_type_logout"
              >
                <LogoutIcon className="cover__overlay-menu-icon" />
                Выйти
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="cover__overlay-menu-item cover__overlay-menu-item_principal" ref={elemRef} >
              <Link
                to="login"
                className="button cover__overlay-menu-button button__ic-lab_type_login link-unstyling"
              >
                <LoginIcon className="cover__overlay-menu-icon" />
                Войти
              </Link>
            </li>
            <li className="cover__overlay-menu-item cover__overlay-menu-item_secondary" >
              <Link
                to="signup"
                className="button cover__overlay-menu-button button__ic-lab_type_signup link-unstyling"
              >
                <Signup className="cover__overlay-menu-icon" />
                Регистрация
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default AccountButtonGroup;
