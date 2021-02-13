import { memo } from "react";
import { HashRouter, Link } from "react-router-dom";
import "./CoverButtonPanel.scss";

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
            <Link to="services" className="cover__menu-major-link button__ic-lab_type_services link-unstyling">
              Услуги
            </Link>
          </li>
          <li className="cover__menu-major-item button list-item-unstyling">
            <Link
              to="book_appointment"
              className="cover__menu-major-link button__ic-lab_type_book_appointment link-unstyling"
            >
              Запись на приём
            </Link>
          </li>
          <li className="cover__menu-major-item button list-item-unstyling">
            <Link to="about_doctor" className="cover__menu-major-link button__ic-lab_type_about_doctor link-unstyling">
              Обо мне
            </Link>
          </li>
        </HashRouter>
        {true && (
          <li className="cover__menu-major-item button list-item-unstyling">
            <Link to="blog" className="cover__menu-major-link button__ic-lab_type_blog link-unstyling">
              Мой блог
            </Link>
          </li>
        )}
        {true && (
          <li className="cover__menu-major-item button list-item-unstyling">
            <Link
              to="blog/for_colleagues"
              className="cover__menu-major-link button__ic-lab_type_for_colleagues link-unstyling"
            >
              Коллегам
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
});

export default CoverButtonPanel;
