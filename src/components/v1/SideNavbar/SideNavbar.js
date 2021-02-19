// import { NavLink } from "react-router-dom";
import getCN from "classnames";
import styles from "./SideNavbar.module.scss";

const SideNavbar = function SideNavbar(props) {
  const { contentsMap } = props;

  return (
    <nav
      className={getCN(styles.sideNavbar)}
      aria-labelledby="header-navigation"
    >
      <h2 className={getCN(styles.ariaLabelledTitle)} id="header-navigation">
        Меню раздела
      </h2>

      <ul className={getCN(styles.navList)}>
        {contentsMap.map((subSection, index) => {
          return (
            <a
              href={`#${subSection.id}`}
              className={getCN(styles.navItem, styles.navLink)}
              // activeClassName={getCN(styles.navLinkActive)}
              // onClick={props.toggleMobileMenuOpen}
              key={index}
            >
              {subSection.sectionMenuLabel}
            </a>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideNavbar;
