import { memo, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { allowMobileView, disallowMobileView, selectMobileView } from './headerSlice';
import styles from './Header.module.scss';
import Navbar from '../Navbar/Navbar';
import PageDimmer from '../PageDimmer/PageDimmer';

const Header = memo(function Header(props) {
  const mobileView = useSelector(selectMobileView);
  const dispatch = useDispatch();
  const {
    loginStatus,
    logout,
    setLoginPopupOpen,
  } = props;

  // const [mobileView, setMobileView] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function handleAuthButtonClick() {
    if (loginStatus === 'loggedIn') {
      logout();
    } else {
      setLoginPopupOpen(true);
    }
    toggleMobileMenuOpen();
  }

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
    // console.log('mobileMenuOpen', mobileMenuOpen);
  }

  useEffect(() => {
    function setResponsiveness() {
      console.log('window.innerWidth', window.innerWidth);
      return window.innerWidth < 421
        ? dispatch(allowMobileView())
        : dispatch(disallowMobileView());
    };
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

       {(!mobileView || mobileMenuOpen) &&
        <Navbar />
       }

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
  )
});

export default Header;
