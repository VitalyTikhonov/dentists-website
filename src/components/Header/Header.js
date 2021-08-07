import { useState, useEffect } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileHeaderView, selectMobileHeaderView } from "./mobileHeaderViewSlice";
import { toggleTabletView } from "./tabletViewSlice";
import "./Header.scss";
import TriangleArrowDown from "../UIControls/svgReactComponents/TriangleArrowDown";
import MobMenuButton from "../UIControls/MobMenuButton/MobMenuButton";
import MobMenu from "../UIControls/MobMenu/MobMenu";
import {
  PW_TABLET_MAX,
  PW_DESKTOP_HEADER_MIN,
} from "../../css-variables-export-to-js.module.scss";

const Header = function Header({ translateOptions }) {
  const dispatch = useDispatch();
  const mobileHeaderView = useSelector(selectMobileHeaderView);
  const [loggedIn] = useState(false); // const loggedIn = useSelector(selectLoggedIn);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    const DESKTOP_HEADER_MIN_PW = parseInt(PW_DESKTOP_HEADER_MIN, 10);
    const TABLET_MAX_PW = parseInt(PW_TABLET_MAX, 10);

    function setDislpayMode() {
      /* на данный момент переменные mobileHeaderView и tabletView вводятся для разных невзаимоискл. задач
      и поэтому могут одновременно иметь одинаковые значения. */
      window.innerWidth < DESKTOP_HEADER_MIN_PW
        ? dispatch(toggleMobileHeaderView(true))
        : dispatch(toggleMobileHeaderView(false));
      window.innerWidth <= TABLET_MAX_PW
        ? dispatch(toggleTabletView(true))
        : dispatch(toggleTabletView(false));
    }

    setDislpayMode();

    window.addEventListener("resize", setDislpayMode);
  }, [dispatch]);

  return (
    <header className="header" style={translateOptions} >
      <nav className="header__menu">
        <ul className="header__menu-list list-unstyling">
          <li className="header__menu-top-item">
            <button className="header__menu-top-label button-unstyling">
              Меню
              <TriangleArrowDown className="header__menu-triangle" />
            </button>

            <ul className="header__submenu-1 header__submenu-1_align_left list-unstyling">
              <li className="header__menu-item-1">
                <NavLink
                  className="header__menu-label link-unstyling"
                  to=""
                  activeClassName=""
                >
                  Главная
                </NavLink>

                <ul className="header__submenu-2 list-unstyling">
                  <HashRouter hashType="noslash">
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="services"
                        activeClassName=""
                      >
                        Услуги
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="about_me"
                        activeClassName=""
                      >
                        Обо мне
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="my_education"
                        activeClassName=""
                      >
                        Мое образование
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="my_certificates"
                        activeClassName=""
                      >
                        Дипломы и сертификаты
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="book_appointment"
                        activeClassName=""
                      >
                        Запись на прием
                      </NavLink>
                    </li>
                  </HashRouter>
                </ul>
              </li>

              <li className="header__menu-item-1">
                <NavLink
                  className="header__menu-label link-unstyling"
                  to="/blog"
                  activeClassName=""
                >
                  Блог
                </NavLink>
              </li>
              <li className="header__menu-item-1">
                <NavLink
                  className="header__menu-label link-unstyling"
                  to="/for_colleagues"
                  activeClassName=""
                >
                  Коллегам
                </NavLink>
              </li>
              <li className="header__menu-item-1">
                <NavLink
                  className="header__menu-label link-unstyling"
                  to="/account"
                  activeClassName=""
                >
                  Личный кабинет
                </NavLink>

                <ul className="header__submenu-2 list-unstyling">
                  <HashRouter hashType="noslash">
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="recommendations"
                        activeClassName=""
                      >
                        Персональные рекомендации
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="medical_profile"
                        activeClassName=""
                      >
                        Стоматологический профиль
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="records"
                        activeClassName=""
                      >
                        История лечения
                      </NavLink>
                    </li>
                    <li className="header__menu-item-2">
                      <NavLink
                        className="header__menu-label link-unstyling"
                        to="personal_data"
                        activeClassName=""
                      >
                        Личные данные
                      </NavLink>
                    </li>
                  </HashRouter>
                </ul>
              </li>
            </ul>
          </li>

          {/* <HashRouter hashType="noslash"> */}
          <li className="header__menu-top-item">
            <NavLink
              className="header__menu-top-label link-unstyling"
              to="services"
              activeClassName="header__menu-top-label_active"
            >
              Услуги
            </NavLink>
          </li>
          <li className="header__menu-top-item">
            <NavLink
              className="header__menu-top-label link-unstyling"
              to="book_appointment"
              activeClassName="header__menu-top-label_active"
            >
              Запись на прием
            </NavLink>
          </li>
          <li className="header__menu-top-item">
            <NavLink
              className="header__menu-top-label link-unstyling"
              to="about_me"
              activeClassName="header__menu-top-label_active"
            >
              Обо мне
            </NavLink>
          </li>
          {/* </HashRouter> */}

          <li className="header__menu-top-item">
            <NavLink
              className="header__menu-top-label link-unstyling"
              to="/blog"
              activeClassName="header__menu-top-label_active"
            >
              Блог
            </NavLink>
          </li>
          <li className="header__menu-top-item">
            <NavLink
              className="header__menu-top-label link-unstyling"
              to="/for_colleagues"
              activeClassName="header__menu-top-label_active"
            >
              Коллегам
            </NavLink>
          </li>

          {loggedIn && (
            <li className="header__menu-top-item">
              <NavLink
                className="header__menu-top-label link-unstyling"
                to="/account"
                activeClassName="header__menu-top-label_active"
              >
                Личный кабинет
                <TriangleArrowDown className="header__menu-triangle" />
              </NavLink>

              <ul className="header__submenu-1 header__submenu-1_align_right list-unstyling">
                <li className="header__menu-item-1">
                  <NavLink
                    className="header__menu-label link-unstyling"
                    to="logout"
                    activeClassName=""
                  >
                    Выйти
                  </NavLink>
                </li>
              </ul>
            </li>
          )}

          {!loggedIn && (
            <li className="header__menu-top-item">
              <NavLink
                className="header__menu-top-label link-unstyling"
                to="/login"
                activeClassName="header__menu-top-label_active"
              >
                Войти
                <TriangleArrowDown className="header__menu-triangle" />
              </NavLink>

              <ul className="header__submenu-1 header__submenu-1_align_right list-unstyling">
                <li className="header__menu-item-1">
                  <NavLink
                    className="header__menu-label link-unstyling"
                    to="signup"
                    activeClassName=""
                  >
                    Регистрация
                  </NavLink>
                </li>
              </ul>
            </li>
          )}
        </ul>
      </nav>

      <div className="header__name-bar">
        <MobMenuButton onClick={toggleMobileMenuOpen} />
        <h1 className="header__name">
          <span className="header__name-first-line">Наталья Натфуллина</span>
          Врач-стоматолог
        </h1>
      </div>

      {/* {mobileHeaderView && mobileMenuOpen && (
        <MobMenu
          onCloseButtonClick={toggleMobileMenuOpen}
          showAccountButtons={true}
        />
      )} */}
    </header>
  );
};

export default Header;
