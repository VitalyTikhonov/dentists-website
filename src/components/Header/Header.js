import { useState, useEffect } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleMobileView, selectMobileView } from "./headerSlice";
import "./Header.scss";

const Header = function Header(props) {
  const mobileView = useSelector(selectMobileView);
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function renderItem(item) {
    return (
      <li className="">
        <NavLink className="" to={item.link} activeClassName="">
          {item.label}
        </NavLink>
      </li>
    );
  }

  function renderNav(itemMap) {
    itemMap.map((navItem) => {
      if (navItem.type === "multiLevelTopItem") {
        return (
          <>
            <li className="">
              <button className="" >{navItem.label}</button>
              <ul className="">{renderNav(navItem.items)}</ul>
            </li>
          </>
        );
      }
      if (navItem.type === "multiLevelItem") {
        return (
          <>
            <li className="">
              {navItem.label}
              <ul className="">{renderNav(navItem.items)}</ul>
            </li>
          </>
        );
      }
      if (navItem.type === "hashLinks") {
        return (
          <HashRouter hashType="noslash">
            {navItem.items.map((item) => renderItem(item))}
          </HashRouter>
        );
      }
      return renderItem(navItem);
    });
  }

  function toggleMobileMenuOpen() {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  useEffect(() => {
    function setResponsiveness() {
      return window.innerWidth < 421
        ? dispatch(toggleMobileView(true))
        : dispatch(toggleMobileView(false));
    }
    setResponsiveness();

    window.addEventListener("resize", setResponsiveness);
  }, [dispatch]);

  return (
    <header className="header">
      <div className="headerBar">
        <a href="/" className="headerBarLogo">
          <span className="headerBarName">Наталья Натфуллина</span>
          Стоматолог
        </a>

        {mobileView && (
          <button className="mobileMenuButton" onClick={toggleMobileMenuOpen} />
        )}
      </div>
    </header>
  );
};

export default Header;
