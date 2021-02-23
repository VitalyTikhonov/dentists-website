import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileView, selectMobileView } from "./mobileViewSlice";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
// import PageDimmer from "../PageDimmer/PageDimmer";

const Header = function Header(props) {
  const mobileView = useSelector(selectMobileView);
  const dispatch = useDispatch();
  // const { loginStatus, logout, setLoginPopupOpen } = props;

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // function handleAuthButtonClick() {
  //   if (loginStatus === "loggedIn") {
  //     logout();
  //   } else {
  //     setLoginPopupOpen(true);
  //   }
  //   toggleMobileMenuOpen();
  // }

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
    // console.log('mobileMenuOpen', mobileMenuOpen);
  }

  useEffect(() => {
    function setResponsiveness() {
      // console.log('window.innerWidth', window.innerWidth);
      return window.innerWidth < 421
        ? dispatch(toggleMobileView(true))
        : dispatch(toggleMobileView(false));
    }
    setResponsiveness();

    window.addEventListener("resize", setResponsiveness);
  }, [dispatch]);

  return (
    <header className={styles.header}>
      <div className={styles.headerBar}>
        <a href="/" className={styles.headerBarLogo}>
          <span className={styles.headerBarName}>Наталья Натфуллина</span>
          Стоматолог
        </a>

        {(!mobileView || mobileMenuOpen) && <Navbar />}

        {mobileView && (
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenuOpen}
          />
        )}
      </div>
    </header>

    // <header className="header root__section">
    //   <img src={logoImage} alt="mesto logo" className="logo" />
    //   {mobileView &&
    //     <button className="button button__modal button__modal_burger-white button_hover-on-black" onClick={toggleMobileMenuOpen} />
    //   }
    //   {(!mobileView || mobileMenuOpen) &&
    //     <div className="header__menu" >
    //       {mobileView && <PageDimmer handleClick={toggleMobileMenuOpen} />}
    //       <Navbar
    //         toggleMobileMenuOpen={toggleMobileMenuOpen}
    //         handleAuthButtonClick={handleAuthButtonClick}
    //       />
    //     </div>
    //   }
    //   {/* {mobileMenuOpen &&
    //     <div className="header__menu-page-dimmer" onClick={toggleMobileMenuOpen} />
    //   } */}
    // </header>
  );
}

export default Header;
