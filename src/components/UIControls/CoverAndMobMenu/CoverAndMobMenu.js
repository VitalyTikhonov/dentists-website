import { HashRouter, NavLink } from "react-router-dom";
import "./CoverAndMobMenu.scss";
import ServicesIcon from "../svgReactComponents/DentistryServices";
import AppointmentIcon from "../svgReactComponents/DentistAppointment";
import FemaleDentistIcon from "../svgReactComponents/FemaleDentist";
import FeatherPen from "../svgReactComponents/FeatherPen";
import Doctors from "../svgReactComponents/Doctors";
import DoubleChevronLeft from "../svgReactComponents/DoubleChevronLeft";
import AccountIcon from "../svgReactComponents/MockAvatar";
// import LogoutIcon from "../svgReactComponents/Logout";
// import LoginIcon from "../svgReactComponents/Login";
// import Signup from "../svgReactComponents/AddUser";
import LogoutIcon from "../svgReactComponents/LogoutThinner";
import LoginIcon from "../svgReactComponents/LoginThinner";
import Signup from "../svgReactComponents/AddUserThinner";

const CoverAndMobMenu = function (props) {
  const { onCloseButtonClick } = props;

  return (
    <nav
      // className={`cover-and-mob-menu ${props.parentClass}`}
      className="cover-and-mob-menu"
      aria-labelledby="header-navigation"
    >
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Центральное меню на обложке сайта
      </h2>

      <button
        className="button cover-and-mob-menu__close-button"
        onClick={onCloseButtonClick}
      >
        <DoubleChevronLeft className="cover-and-mob-menu__close-icon" />
      </button>

      <ul className="cover-and-mob-menu__list list-unstyling">
        <HashRouter
          // basename="/" // после хеша
          hashType="noslash"
        >
          <li className="cover-and-mob-menu__item button">
            <NavLink
              to="services"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <ServicesIcon className="cover-and-mob-menu__icon" />
              Услуги
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__item button">
            <NavLink
              to="book_appointment"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <AppointmentIcon className="cover-and-mob-menu__icon" />
              Запись на приём
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__item cover-and-mob-menu__item_order_first button">
            <NavLink
              to="/about_doctor"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <FemaleDentistIcon className="cover-and-mob-menu__icon cover-and-mob-menu__icon_larger" />
              Обо мне
            </NavLink>
          </li>
        </HashRouter>
        {true && (
          <li className="cover-and-mob-menu__item button">
            <NavLink
              to="blog"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <FeatherPen className="cover-and-mob-menu__icon" />
              Мой блог
            </NavLink>
          </li>
        )}
        {true && (
          <li className="cover-and-mob-menu__item button">
            <NavLink
              to="blog/for_colleagues"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <Doctors className="cover-and-mob-menu__icon" />
              Коллегам
            </NavLink>
          </li>
        )}
        {true ? (
          <>
            <li className="cover-and-mob-menu__item button">
              <NavLink
                to="account"
                className="cover-and-mob-menu__link link-unstyling"
                activeClassName="cover-and-mob-menu__link_active"
              >
                <AccountIcon className="cover-and-mob-menu__icon" />
                Личный кабинет
              </NavLink>
            </li>
            <li className="cover-and-mob-menu__item button">
              <NavLink
                to="logout"
                className="cover-and-mob-menu__link link-unstyling"
                activeClassName="cover-and-mob-menu__link_active"
              >
                <LogoutIcon className="cover-and-mob-menu__icon" />
                Выйти
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="cover-and-mob-menu__item button">
              <NavLink
                to="login"
                className="cover-and-mob-menu__link link-unstyling"
                activeClassName="cover-and-mob-menu__link_active"
              >
                <LoginIcon className="cover-and-mob-menu__icon" />
                Войти
              </NavLink>
            </li>
            <li className="cover-and-mob-menu__item button">
              <NavLink
                to="signup"
                className="cover-and-mob-menu__link link-unstyling"
                activeClassName="cover-and-mob-menu__link_active"
              >
                <Signup className="cover-and-mob-menu__icon" />
                Регистрация
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default CoverAndMobMenu;
