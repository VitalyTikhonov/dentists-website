import { useState, useEffect, useRef } from "react";
// import { HashRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileHeaderView, selectMobileHeaderView } from "../../store/mobileHeaderViewSlice";
import { setScreenType, selectScreenType } from "../../store/screenTypeSlice";
// import { setPageProps } from "../../store/pagePropsSlice";
import { selectAuthButtonVisibility } from "../../store/authButtonVisibilitySlice";
import { selectCoverMenuVisibility } from "../../store/coverMenuVisibilitySlice";
import "./Header.scss";
import { NavigationList } from "../NavigationList/NavigationList";
// import TriangleArrowDown from "../UIControls/svgReactComponents/TriangleArrowDown";
import NameBar from "../NameBar/NameBar";
import MobMenuButton from "../UIControls/MobMenuButton/MobMenuButton";
import MobMenu from "../UIControls/MobMenu/MobMenu";
import Overlay from "..//Overlay/Overlay";
import {
  PW_DESKTOP_HEADER_MIN,
  PW_TABLET_MAX,
  PW_TABLET_MIN,
} from "../../css-variables-export-to-js.module.scss";
import { screenType } from "../../constants";
import { useLocation } from 'react-router-dom';
import cn from "classnames";
import { headerMenu } from '../../data/menu';

const { mobile, tablet, desktop } = screenType;
const DESKTOP_HEADER_MIN_PW = parseInt(PW_DESKTOP_HEADER_MIN, 10);
const TABLET_MAX_PW = parseInt(PW_TABLET_MAX, 10);
const TABLET_MIN_PW = parseInt(PW_TABLET_MIN, 10);

const classMap = {
  list: [
    "header__menu-list",
    "header__submenu-1 header__submenu-1_align_left",
    "header__submenu-2"
  ],
  item: [
    "header__menu-top-item",
    "header__menu-item-1",
    "header__menu-item-2"
  ],
  itemChild: [
    "header__menu-top-label",
    "header__menu-label",
    "header__menu-label",
  ],
  activeClassName: "header__menu-top-label_active",
  buttonTriangle: "header__menu-triangle",
};


const Header = function Header() {
  const dispatch = useDispatch();
  const mobileHeaderView = useSelector(selectMobileHeaderView);
  const screenType = useSelector(selectScreenType);
  const authButtonVisibility = useSelector(selectAuthButtonVisibility);
  const coverMenuVisibility = useSelector(selectCoverMenuVisibility);
  const [loggedIn] = useState(false); // const loggedIn = useSelector(selectLoggedIn);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [menuData, setMenuData] = useState({});

  const headerRef = useRef(null)
  const topMenuRef = useRef(null)
  const [translateOptions, setTranslateOptions] = useState({});
  const location = useLocation();

  useEffect(() => {
    console.clear();
    console.log('headerMenu', headerMenu.filter((item) => item?.forLoggedOn !== true));
    setMenuData(headerMenu.filter((item) => {
      if (loggedIn) {
        return item?.forLoggedOff !== true;
      } else {
        return item?.forLoggedOn !== true;
      }
    }))
  }, [loggedIn]);

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

    // if (headerRef.current) {
    //   dispatch(setPageProps({headerHeight: headerRef.current.offsetHeight}))
    // }

    window.addEventListener("resize", setDislpayMode);
  }, []);

  useEffect(() => {
    if (!screenType || location.pathname !== '/') return;

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
  }, [authButtonVisibility, coverMenuVisibility, location.pathname, screenType]);

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <header className={cn("header", { header_animation: location.pathname === '/' })} style={translateOptions} ref={headerRef} >
      <nav className="header__menu" ref={topMenuRef} >
        <NavigationList data={menuData} level={0} classMap={classMap} />
      </nav>

      <NameBar inHeader >
        <MobMenuButton onClick={toggleMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
      </NameBar>

      {mobileHeaderView && mobileMenuOpen && (
        <>
          <MobMenu
            onCloseButtonClick={toggleMobileMenuOpen}
            showAccountButtons={true}
          />
          <Overlay handleClick={toggleMobileMenuOpen} />
        </>
      )}
    </header>
  );
};

export default Header;
