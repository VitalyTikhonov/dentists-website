import { useState, useEffect } from "react";
import { HashRouter, NavLink } from "react-router-dom";
// import "./FocusMenu.scss";
import ServicesIcon from "../svgReactComponents/DentistryServices";
import AppointmentIcon from "../svgReactComponents/DentistAppointment";
import FemaleDentistIcon from "../svgReactComponents/FemaleDentist";
import FeatherPen from "../svgReactComponents/FeatherPen";
import Doctors from "../svgReactComponents/Doctors";
import DoubleChevronLeft from "../svgReactComponents/DoubleChevronLeft";
import AccountIcon from "../svgReactComponents/MockAvatar";
import LogoutIcon from "../svgReactComponents/LogoutThinner";
import LoginIcon from "../svgReactComponents/LoginThinner";
import Signup from "../svgReactComponents/AddUserThinner";

import useElemOnScreen from "../../../hooks/useElemOnScreen";
import { useDispatch } from "react-redux";
import { setCoverMenuVisibility } from "../../../store/coverMenuVisibilitySlice";

const FocusMenu = function (props) {
  const { menuType, onCloseButtonClick, showAccountButtons } = props;
  const [loggedIn] = useState(false); // const loggedIn = useSelector(selectLoggedIn);

  const dispatch = useDispatch();
  const [elemRef, elemOnScreenResult] = useElemOnScreen();

  useEffect(() => {
    if (menuType === "cover") {
      dispatch(setCoverMenuVisibility(elemOnScreenResult));
    }
  }, [elemOnScreenResult, dispatch]);


  return (
    <nav
      // className={`${menuType}-menu ${props.parentClass}`}
      className={`${menuType}-menu`}
      aria-labelledby="header-navigation"
      ref={elemRef} 
    >
      <h2 className={`ariaLabelledTitle`} id="header-navigation">
        Центральное меню на обложке сайта
      </h2>

      {/* <button
        className={`button ${menuType}-menu__close-button`}
        onClick={onCloseButtonClick}
      >
        <DoubleChevronLeft className={`${menuType}-menu__close-icon`} />
      </button> */}

      <ul className={`${menuType}-menu__list list-unstyling`}>
        <HashRouter
          // basename="/" // после хеша
          hashType="noslash"
        >
          <li className={`${menuType}-menu__item button`}>
            <NavLink
              to="services"
              className={`${menuType}-menu__link link-unstyling`}
              activeClassName={`${menuType}-menu__link_active`}
            >
              <ServicesIcon className={`${menuType}-menu__icon`} />
              Услуги
            </NavLink>
          </li>
          <li className={`${menuType}-menu__item button`}>
            <NavLink
              to="book_appointment"
              className={`${menuType}-menu__link link-unstyling`}
              activeClassName={`${menuType}-menu__link_active`}
            >
              <AppointmentIcon className={`${menuType}-menu__icon ${menuType}-menu__icon_wider`} />
              Запись на приём
            </NavLink>
          </li>
          <li className={`${menuType}-menu__item ${menuType}-menu__item_order_first button`}>
            <NavLink
              to="/about_doctor"
              className={`${menuType}-menu__link link-unstyling`}
              activeClassName={`${menuType}-menu__link_active`}
            >
              <FemaleDentistIcon className={`${menuType}-menu__icon ${menuType}-menu__icon_larger`} />
              Обо мне
            </NavLink>
          </li>
        </HashRouter>
        {true && (
          <li className={`${menuType}-menu__item button`}>
            <NavLink
              to="blog"
              className={`${menuType}-menu__link link-unstyling`}
              activeClassName={`${menuType}-menu__link_active`}
            >
              <FeatherPen className={`${menuType}-menu__icon`} />
              Мой блог
            </NavLink>
          </li>
        )}
        {true && (
          <li className={`${menuType}-menu__item button`}>
            <NavLink
              to="blog/for_colleagues"
              className={`${menuType}-menu__link link-unstyling`}
              activeClassName={`${menuType}-menu__link_active`}
            >
              <Doctors className={`${menuType}-menu__icon`} />
              Коллегам
            </NavLink>
          </li>
        )}
        {showAccountButtons && (
          loggedIn ? (
            <>
              <li className={`${menuType}-menu__item button`}>
                <NavLink
                  to="account"
                  className={`${menuType}-menu__link link-unstyling`}
                  activeClassName={`${menuType}-menu__link_active`}
                >
                  <AccountIcon className={`${menuType}-menu__icon`} />
                  Личный кабинет
                </NavLink>
              </li>
              <li className={`${menuType}-menu__item button`}>
                <NavLink
                  to="logout"
                  className={`${menuType}-menu__link link-unstyling`}
                  activeClassName={`${menuType}-menu__link_active`}
                >
                  <LogoutIcon className={`${menuType}-menu__icon`} />
                  Выйти
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className={`${menuType}-menu__item button`}>
                <NavLink
                  to="signup"
                  className={`${menuType}-menu__link link-unstyling`}
                  activeClassName={`${menuType}-menu__link_active`}
                >
                  <Signup className={`${menuType}-menu__icon`} />
                  Регистрация
                </NavLink>
              </li>
              <li className={`${menuType}-menu__item button`}>
                <NavLink
                  to="login"
                  className={`${menuType}-menu__link link-unstyling`}
                  activeClassName={`${menuType}-menu__link_active`}
                >
                  <LoginIcon className={`${menuType}-menu__icon`} />
                  Войти
                </NavLink>
              </li>
            </>
          ))}
      </ul>
    </nav>
  );
};

export default FocusMenu;
