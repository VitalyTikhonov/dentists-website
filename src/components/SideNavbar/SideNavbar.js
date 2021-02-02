import { memo } from "react";
import { NavLink } from "react-router-dom";
import getCN from "classnames";
import styles from "./SideNavbar.module.scss";

const SideNavbar = memo(function SideNavbar(props) {
  return (
    <nav className={getCN(styles.sideNavbar, styles.sectionSidebarItem)} aria-labelledby="header-navigation">
      <h2 className={getCN(styles.ariaLabelledTitle)} id="header-navigation">
        Меню раздела
      </h2>

      <ul className={getCN(styles.navList)}>
        <NavLink
          exact
          to={"/"}
          className={getCN(styles.navItem, styles.navLink)}
          activeClassName={getCN(styles.navLinkActive)}
          // onClick={props.toggleMobileMenuOpen}
        >
          Главная
        </NavLink>
      </ul>
    </nav>
  );
});

export default SideNavbar;
