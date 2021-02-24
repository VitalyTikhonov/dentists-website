import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileHeaderView, selectMobileHeaderView } from "./mobileHeaderViewSlice";
import styles from "./Header.module.scss";
import Navbar from "../Navbar/Navbar";
// import PageDimmer from "../PageDimmer/PageDimmer";

const Header = function Header(props) {
  const mobileHeaderView = useSelector(selectMobileHeaderView);
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
        ? dispatch(toggleMobileHeaderView(true))
        : dispatch(toggleMobileHeaderView(false));
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

        {(!mobileHeaderView || mobileMenuOpen) && <Navbar />}

        {mobileHeaderView && (
          <button
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenuOpen}
          />
        )}
      </div>
    </header>

    // <header className="header root__section">
    //   <img src={logoImage} alt="mesto logo" className="logo" />
    //   {mobileHeaderView &&
    //     <button className="button button__modal button__modal_burger-white button_hover-on-black" onClick={toggleMobileMenuOpen} />
    //   }
    //   {(!mobileHeaderView || mobileMenuOpen) &&
    //     <div className="header__menu" >
    //       {mobileHeaderView && <PageDimmer handleClick={toggleMobileMenuOpen} />}
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
