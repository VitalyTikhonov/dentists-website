import { memo } from "react";
import { HashRouter, NavLink } from "react-router-dom";
import "./CoverButtonPanel.scss";
import ServicesIcon from "../svgReactComponents/DentistryServices";
import AppointmentIcon from "../svgReactComponents/DentistAppointment";
import FemaleDentistIcon from "../svgReactComponents/FemaleDentist";
import FeatherPen from "../svgReactComponents/FeatherPen";
import Doctors from "../svgReactComponents/Doctors";
import DoubleChevronLeft from "../svgReactComponents/DoubleChevronLeft";

const CoverButtonPanel = memo(function (props) {
  return (
    <nav
      className="cover-and-mob-menu__major"
      aria-labelledby="header-navigation"
    >
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Центральное меню на обложке сайта
      </h2>

      <button className="button cover-and-mob-menu__major-close-button">
        <DoubleChevronLeft className="cover-and-mob-menu__major-close-icon" />
      </button>

      <ul className="cover-and-mob-menu__major-list">
        <HashRouter
          // basename="/" // после хеша
          hashType="noslash"
        >
          <li className="cover-and-mob-menu__major-item button list-item-unstyling">
            <NavLink
              to="services"
              className="cover-and-mob-menu__major-link link-unstyling"
              activeClassName="cover-and-mob-menu__major-link_active"
            >
              <ServicesIcon className="cover-and-mob-menu__major-icon" />
              Услуги
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__major-item button list-item-unstyling">
            <NavLink
              to="book_appointment"
              className="cover-and-mob-menu__major-link link-unstyling"
              activeClassName="cover-and-mob-menu__major-link_active"
            >
              <AppointmentIcon className="cover-and-mob-menu__major-icon" />
              Запись на приём
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__major-item button list-item-unstyling">
            <NavLink
              to="/about_doctor"
              className="cover-and-mob-menu__major-link link-unstyling"
              activeClassName="cover-and-mob-menu__major-link_active"
            >
              <FemaleDentistIcon className="cover-and-mob-menu__major-icon cover-and-mob-menu__major-icon_larger" />
              Обо мне
            </NavLink>
          </li>
        </HashRouter>
        {true && (
          <li className="cover-and-mob-menu__major-item button list-item-unstyling">
            <NavLink
              to="blog"
              className="cover-and-mob-menu__major-link link-unstyling"
              activeClassName="cover-and-mob-menu__major-link_active"
            >
              <FeatherPen className="cover-and-mob-menu__major-icon" />
              Мой блог
            </NavLink>
          </li>
        )}
        {true && (
          <li className="cover-and-mob-menu__major-item button list-item-unstyling">
            <NavLink
              to="blog/for_colleagues"
              className="cover-and-mob-menu__major-link link-unstyling"
              activeClassName="cover-and-mob-menu__major-link_active"
            >
              <Doctors className="cover-and-mob-menu__major-icon" />
              Коллегам
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
});

export default CoverButtonPanel;
