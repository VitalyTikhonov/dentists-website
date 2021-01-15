import { memo, useContext } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = memo(function Navbar(props) {

  const loginStatus = false;

  return (
    <nav className="nav-bar">
      <ul>
        <NavLink
          exact to={'/'}
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
        // onClick={props.toggleMobileMenuOpen}
        >
          Главная
      </NavLink>
        <NavLink
          exact to={'/'}
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
        // onClick={props.toggleMobileMenuOpen}
        >
          Услуги
      </NavLink>
        <NavLink
          exact to={'/'}
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
        // onClick={props.toggleMobileMenuOpen}
        >
          Блог
      </NavLink>
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className="nav-bar__link link"
            activeClassName="nav-bar__link_active"
          // onClick={props.toggleMobileMenuOpen}
          >
            Личный кабинет
        </NavLink>}
        {loginStatus === 'loggedIn' &&
          <NavLink
            to={'/user-profile'}
            className="nav-bar__link link"
            activeClassName="nav-bar__link_active"
          // onClick={props.toggleMobileMenuOpen}
          >
            Панель админа
        </NavLink>}
        <NavLink
          to={'/counter'}
          className="nav-bar__link link"
          activeClassName="nav-bar__link_active"
        // onClick={props.toggleMobileMenuOpen}
        >
          Counter
        </NavLink>
        <button
          type="button"
          className="button button__square_black-outline-white header__auth-button"
        // onClick={handleAuthButtonClick}
        >
          {loginStatus === 'loggedIn' ? 'Выйти' : 'Войти'}
        </button>
      </ul>
    </nav>
  )
});

export default Navbar;
