import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = memo(function Navbar(props) {

  const loginStatus = false;

  return (
    <nav className={styles.navbar} >
      <ul>
        <NavLink
          exact to={'/'}
          className={`${styles.navItem} ${styles.navLink}`}
          activeClassName={`${styles.navItem} ${styles.navLink}`}
        // onClick={props.toggleMobileMenuOpen}
        >
          Главная
      </NavLink>
        <NavLink
          exact to={'/'}
          className={`${styles.navItem} ${styles.navLink}`}
          activeClassName={`${styles.navItem} ${styles.navLink}`}
        // onClick={props.toggleMobileMenuOpen}
        >
          Услуги
      </NavLink>
        <NavLink
          exact to={'/counter'}
          className={`${styles.navItem} ${styles.navLink}`}
          activeClassName={`${styles.navItem} ${styles.navLink}`}
        // onClick={props.toggleMobileMenuOpen}
        >
          Блог
      </NavLink>
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className={`${styles.navItem} ${styles.navLink}`}
            activeClassName={`${styles.navItem} ${styles.navLink}`}
          // onClick={props.toggleMobileMenuOpen}
          >
            Личный кабинет
        </NavLink>}
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className={`${styles.navItem} ${styles.navLink}`}
            activeClassName={`${styles.navItem} ${styles.navLink}`}
          // onClick={props.toggleMobileMenuOpen}
          >
            Панель админа
        </NavLink>}
        <button
          type="button"
          className={`${styles.navItem}`}
        // onClick={handleAuthButtonClick}
        >
          {loginStatus === 'loggedIn' ? 'Выйти' : 'Войти'}
        </button>
      </ul>
    </nav>
  )
});

export default Navbar;
