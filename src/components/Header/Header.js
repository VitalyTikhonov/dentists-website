// import { useState, useEffect } from "react";
import { HashRouter, NavLink } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleMobileView, selectMobileView } from "./headerSlice";
import "./Header.scss";

const Header = function Header(props) {
  // const mobileView = useSelector(selectMobileView);
  // const dispatch = useDispatch();

  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // function toggleMobileMenuOpen() {
  //   setMobileMenuOpen(!mobileMenuOpen);
  // }

  // useEffect(() => {
  //   function setResponsiveness() {
  //     return window.innerWidth < 421
  //       ? dispatch(toggleMobileView(true))
  //       : dispatch(toggleMobileView(false));
  //   }
  //   setResponsiveness();

  //   window.addEventListener("resize", setResponsiveness);
  // }, [dispatch]);

  return (
    <header className="header">
      <nav>
        <ul className="">
          <li className="">
            <button className="">Меню</button>

            <ul className="">
              <li className="">
                <NavLink className="" to="/" activeClassName="">Главная</NavLink>

                <ul className="">
                  <HashRouter hashType="noslash">
                    <li className=""><NavLink className="" to="services" activeClassName="">Услуги</NavLink></li>
                    <li className=""><NavLink className="" to="about_me" activeClassName="">Обо мне</NavLink></li>
                    <li className=""><NavLink className="" to="my_education" activeClassName="">Мое образование</NavLink></li>
                    <li className=""><NavLink className="" to="my_certificates" activeClassName="" >Дипломы и сертификаты</NavLink></li>
                    <li className=""><NavLink className="" to="book_appointment"activeClassName="">Запись на прием</NavLink></li>
                  </HashRouter>
                </ul>
              </li>

              <li className=""><NavLink className="" to="/blog" activeClassName="">Блог</NavLink></li>
              <li className=""><NavLink className="" to="/for_colleagues" activeClassName="">Коллегам</NavLink></li>
              <li className="">
                <NavLink className="" to="/account" activeClassName="">Личный кабинет</NavLink>

                <ul className="">
                  <HashRouter hashType="noslash">
                    <li className=""><NavLink className="" to="recommendations"activeClassName="">Персональные рекомендации</NavLink></li>
                    <li className=""><NavLink className="" to="medical_profile"activeClassName="">Стоматологический профиль</NavLink></li>
                    <li className=""><NavLink className="" to="records" activeClassName="">История лечения</NavLink></li>
                    <li className=""><NavLink className="" to="personal_data" activeClassName="">Личные данные</NavLink></li>
                  </HashRouter>
                </ul>
              </li>
            </ul>
          </li>

          <HashRouter hashType="noslash">
            <li className=""><NavLink className="" to="services" activeClassName="">Услуги</NavLink></li>
            <li className=""><NavLink className="" to="book_appointment" activeClassName="">Запись на прием</NavLink></li>
            <li className=""><NavLink className="" to="about_me" activeClassName="">Обо мне</NavLink></li>
          </HashRouter>

          <li className=""><NavLink className="" to="about_me" activeClassName="">Блог</NavLink></li>
          <li className=""><NavLink className="" to="about_me" activeClassName="">Коллегам</NavLink></li>

          <li className="">
            <NavLink className="" to="/account" activeClassName="">Личный кабинет</NavLink>

            <ul className="">
              <li className=""><NavLink className="" to="recommendations" activeClassName="">Выйти</NavLink></li>
            </ul>
          </li>

          <li className="">
            <NavLink className="" to="/account" activeClassName="">Войти</NavLink>

            <ul className="">
              <li className=""><NavLink className="" to="recommendations" activeClassName="">Регистрация</NavLink></li>
            </ul>
          </li>
        </ul>
      </nav>

      <div>
        <h1>Наталья Натфуллина. Врач-стоматолог</h1>
      </div>
    </header>
  );
};

export default Header;
