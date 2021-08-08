import { useState, useEffect, useRef } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileHeaderView, selectMobileHeaderView } from "./mobileHeaderViewSlice";
import { setScreenType, selectScreenType } from "./screenTypeSlice";
import { selectAuthButtonVisibility } from "./authButtonVisibilitySlice";
import { selectCoverMenuVisibility } from "./coverMenuVisibilitySlice";
import "./Header.scss";
import TriangleArrowDown from "../UIControls/svgReactComponents/TriangleArrowDown";
import NameBar from "../NameBar/NameBar";
import MobMenuButton from "../UIControls/MobMenuButton/MobMenuButton";
import MobMenu from "../UIControls/MobMenu/MobMenu";
import PageDimmer from "../UIControls/PageDimmer/PageDimmer";
import {
  PW_DESKTOP_HEADER_MIN,
  PW_TABLET_MAX,
  PW_TABLET_MIN,
} from "../../css-variables-export-to-js.module.scss";
import { screenType } from "../../constants";

const { mobile, tablet, desktop } = screenType;
const DESKTOP_HEADER_MIN_PW = parseInt(PW_DESKTOP_HEADER_MIN, 10);
const TABLET_MAX_PW = parseInt(PW_TABLET_MAX, 10);
const TABLET_MIN_PW = parseInt(PW_TABLET_MIN, 10);


const Header = function Header() {
  const dispatch = useDispatch();
  const mobileHeaderView = useSelector(selectMobileHeaderView);
  const screenType = useSelector(selectScreenType);
  const authButtonVisibility = useSelector(selectAuthButtonVisibility);
  const coverMenuVisibility = useSelector(selectCoverMenuVisibility);
  const [loggedIn] = useState(false); // const loggedIn = useSelector(selectLoggedIn);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const headerRef = useRef(null)
  const topMenuRef = useRef(null)
  const [translateOptions, setTranslateOptions] = useState({
    // transform: `translateY(-100%)`,
    // transitionDuration: "200ms",
    // transitionTimingFunction: "ease-out",
  });

  useEffect(() => {
    function setDislpayMode() {
      /* на данный момент переменные mobileHeaderView и screenType вводятся для разных невзаимоискл. задач
      и поэтому могут одновременно иметь одинаковые значения. */
      const screenWidth = window.innerWidth;
      screenWidth < DESKTOP_HEADER_MIN_PW
        ? dispatch(toggleMobileHeaderView(true))
        : dispatch(toggleMobileHeaderView(false));

      if (screenWidth > TABLET_MAX_PW) {
        dispatch(setScreenType(desktop))
      } else if (screenWidth <= TABLET_MAX_PW && screenWidth >= TABLET_MIN_PW) {
        dispatch(setScreenType(tablet))
      } else {
        dispatch(setScreenType(mobile))
      }
    }

    setDislpayMode();

    window.addEventListener("resize", setDislpayMode);
  }, []);

  useEffect(() => {
    if (!screenType) return;

    if (screenType !== mobile) {
      if (headerRef.current && !coverMenuVisibility) {
        setTranslateOptions({
          transform: `translateY(0%)`,
        });
        return;
      }

      if (topMenuRef.current && !authButtonVisibility && screenType === desktop) {
        setTranslateOptions({
          transform: `translateY(-${topMenuRef.current.offsetHeight}px)`,
        });
        return;
      }

      setTranslateOptions({
        transform: `translateY(-100%)`,
      });
    } else {
      setTranslateOptions({
        transform: `translateY(0%)`,
      });
    }
  }, [authButtonVisibility, coverMenuVisibility, screenType]);

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header className="header" style={translateOptions} ref={headerRef} >
      <nav className="header__menu" ref={topMenuRef} >
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

      <NameBar inHeader >
        <MobMenuButton onClick={toggleMobileMenuOpen} />
      </NameBar>

      {mobileHeaderView && mobileMenuOpen && (
        <>
          <MobMenu
            onCloseButtonClick={toggleMobileMenuOpen}
            showAccountButtons={true}
          />
          <PageDimmer handleClick={toggleMobileMenuOpen} />
        </>
      )}
    </header>
  );
};

export default Header;
