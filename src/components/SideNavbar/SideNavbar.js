import { useEffect, memo, useRef, useState } from "react";
import getCN from "classnames";
import styles from "./SideNavbar.module.scss";
import cssVariables from '../../css-variables.module.scss';

const SideNavbar = memo(function SideNavbar(props) {
  const { contentsMap } = props;
  const navRef = useRef();
  const ulRef = useRef();
  const [sidebarReachedTop, setSidebarReachedTop] = useState(false);
  // const [sideNavbarFixed, setSideNavbarFixed] = useState(false);
  const sidebarMenuStyles = [styles.sideNavbar];

  useEffect(() => {
    const paddingBasicPx = parseInt(cssVariables.paddingBasicPx, 10);
    const paddingBasicVw = Math.round(document.body.clientWidth / 100 * parseInt(cssVariables.paddingBasicVw, 10))
    const paddingBasic = paddingBasicPx + paddingBasicVw;
    // console.log('sidebarReachedTop', sidebarReachedTop);
      // setSideNavbarFixed(sidebarReachedTop);
    if (sidebarReachedTop) {
      sidebarMenuStyles.push(styles.sideNavbarFixed);
    } else {
      sidebarMenuStyles.pop(styles.sideNavbarFixed);
    }
    function checkIfSidebarReachedTop() {
      const sidebarMenuPosition = navRef.current.getBoundingClientRect().top;
      setSidebarReachedTop(sidebarMenuPosition <= paddingBasic);
    };
    checkIfSidebarReachedTop();

    window.addEventListener("scroll", checkIfSidebarReachedTop);
  }, [sidebarReachedTop, sidebarMenuStyles]);

  return (
    <nav
      className={getCN(...sidebarMenuStyles)}
      aria-labelledby="header-navigation"
      ref={navRef}
    >
      <h2 className={getCN(styles.ariaLabelledTitle)} id="header-navigation">
        Меню раздела
      </h2>

      <ul className={getCN(styles.navList)} ref={ulRef} >
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
});

export default SideNavbar;
