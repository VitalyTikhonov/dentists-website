import { HashRouter, NavLink } from "react-router-dom";
import "./CoverAndMobMenu.scss";
import ServicesIcon from "../svgReactComponents/DentistryServices";
import AppointmentIcon from "../svgReactComponents/DentistAppointment";
import FemaleDentistIcon from "../svgReactComponents/FemaleDentist";
import FeatherPen from "../svgReactComponents/FeatherPen";
import Doctors from "../svgReactComponents/Doctors";
import DoubleChevronLeft from "../svgReactComponents/DoubleChevronLeft";

const CoverAndMobMenu = function (props) {
  return (
    <nav
      className="cover-and-mob-menu"
      aria-labelledby="header-navigation"
    >
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Центральное меню на обложке сайта
      </h2>

      <button className="button cover-and-mob-menu__close-button">
        <DoubleChevronLeft className="cover-and-mob-menu__close-icon" />
      </button>

      <ul className="cover-and-mob-menu__list">
        <HashRouter
          // basename="/" // после хеша
          hashType="noslash"
        >
          <li className="cover-and-mob-menu__item button list-item-unstyling">
            <NavLink
              to="services"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <ServicesIcon className="cover-and-mob-menu__icon" />
              Услуги
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__item button list-item-unstyling">
            <NavLink
              to="book_appointment"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <AppointmentIcon className="cover-and-mob-menu__icon" />
              Запись на приём
            </NavLink>
          </li>
          <li className="cover-and-mob-menu__item button list-item-unstyling">
            <NavLink
              to="/about_doctor"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <FemaleDentistIcon className="cover-and-mob-menu__icon cover-and-mob-menu__icon_larger" />
              Обо мне
            </NavLink>
          </li>
        </HashRouter>
        {true && (
          <li className="cover-and-mob-menu__item button list-item-unstyling">
            <NavLink
              to="blog"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <FeatherPen className="cover-and-mob-menu__icon" />
              Мой блог
            </NavLink>
          </li>
        )}
        {true && (
          <li className="cover-and-mob-menu__item button list-item-unstyling">
            <NavLink
              to="blog/for_colleagues"
              className="cover-and-mob-menu__link link-unstyling"
              activeClassName="cover-and-mob-menu__link_active"
            >
              <Doctors className="cover-and-mob-menu__icon" />
              Коллегам
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default CoverAndMobMenu;
