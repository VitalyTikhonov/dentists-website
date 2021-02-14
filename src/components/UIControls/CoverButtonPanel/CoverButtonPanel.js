import { memo } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import "./CoverButtonPanel.scss";
import ServicesIcon from "../../../images/UI-control-elements/svg/SvgComponents/ServicesIcon";
import AppointmentIcon from "../../../images/UI-control-elements/svg/SvgComponents/AppointmentIcon";
import FemaleDentistIcon from "../../../images/UI-control-elements/svg/SvgComponents/FemaleDentistIcon";
import FeatherPen from "../../../images/UI-control-elements/svg/SvgComponents/IconFeatherPen";
import Doctors from "../../../images/UI-control-elements/svg/SvgComponents/Doctors";

const CoverButtonPanel = memo(function (props) {
  return (
    <nav className="cover__menu-major" aria-labelledby="header-navigation">
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Центральное меню на обложке сайта
      </h2>

      <ul className="cover__menu-major-list">
        <HashRouter
          // basename="/" // после хеша
          hashType="noslash"
        >
          <li className="cover__menu-major-item button list-item-unstyling">
            <NavLink
              to="services"
              className="cover__menu-major-link link-unstyling"
              activeClassName="cover__menu-major-link_active"
            >
              <ServicesIcon className="cover__menu-major-icon" />
              Услуги
            </NavLink>
          </li>
          <li className="cover__menu-major-item button list-item-unstyling">
            <NavLink
              to="book_appointment"
              className="cover__menu-major-link link-unstyling"
              activeClassName="cover__menu-major-link_active"
            >
              <AppointmentIcon className="cover__menu-major-icon" />
              Запись на приём
            </NavLink>
          </li>
          <li className="cover__menu-major-item button list-item-unstyling">
            <NavLink
              to="/about_doctor"
              className="cover__menu-major-link link-unstyling"
              activeClassName="cover__menu-major-link_active"
            >
              <FemaleDentistIcon className="cover__menu-major-icon cover__menu-major-icon_larger" />
              Обо мне
            </NavLink>
          </li>
        </HashRouter>
        {true && (
          <li className="cover__menu-major-item button list-item-unstyling">
            <NavLink
              to="blog"
              className="cover__menu-major-link link-unstyling"
              activeClassName="cover__menu-major-link_active"
            >
              <FeatherPen className="cover__menu-major-icon" />
              Мой блог
            </NavLink>
          </li>
        )}
        {true && (
          <li className="cover__menu-major-item button list-item-unstyling">
            <NavLink
              to="blog/for_colleagues"
              className="cover__menu-major-link link-unstyling"
              activeClassName="cover__menu-major-link_active"
            >
              <Doctors className="cover__menu-major-icon" />
              Коллегам
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
});

export default CoverButtonPanel;
