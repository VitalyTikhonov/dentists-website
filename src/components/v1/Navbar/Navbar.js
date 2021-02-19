import { NavLink } from "react-router-dom";
import getCN from "classnames";
import styles from "./Navbar.module.scss";

const Navbar = function Navbar(props) {
  const loginStatus = false;

  return (
    <nav className={styles.navbar} aria-labelledby="header-navigation">
      <h2 className={getCN(styles.ariaLabelledTitle)} id="header-navigation">
        Основное меню
      </h2>

      <ul className={styles.navList}>
        <NavLink
          exact
          to={"/"}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navLinkActive)}
          // onClick={props.toggleMobileMenuOpen}
        >
          Главная
        </NavLink>
        {/* <NavLink
          exact
          to={"/"}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navLinkActive)}
          // onClick={props.toggleMobileMenuOpen}
        >
          Услуги
        </NavLink> */}
        <NavLink
          exact
          to={"/counter"}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navLinkActive)}
          // onClick={props.toggleMobileMenuOpen}
        >
          Блог
        </NavLink>
        {loginStatus === "loggedIn" && (
          <NavLink
            to={"/user-profile"}
            className={getCN(styles.navItem, styles.navLink)}
            activeClassName={getCN(styles.navLinkActive)}
            // onClick={props.toggleMobileMenuOpen}
          >
            Личный кабинет
          </NavLink>
        )}
        {loginStatus === "loggedIn" && (
          <NavLink
            to={"/user-profile"}
            className={getCN(styles.navItem, styles.navLink)}
            activeClassName={getCN(styles.navLinkActive)}
            // onClick={props.toggleMobileMenuOpen}
          >
            Панель админа
          </NavLink>
        )}
        <button
          type="button"
          className={getCN(styles.navItem, styles.authButton)}
          // onClick={handleAuthButtonClick}
        >
          <span className={styles.authButton__label}>
            {loginStatus === "loggedIn" ? "Выйти" : "Войти"}
          </span>
        </button>
      </ul>
    </nav>
  );
}

export default Navbar;
