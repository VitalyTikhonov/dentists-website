import "./Footer.scss";
import Headline from "../Headline/Headline";
import SocialMediaIconPanel from "../UIControls/SocialMediaIconPanel/SocialMediaIconPanel";

function Footer() {
  return (
    <footer className="footer" >
      <Headline level={3} color="white" localClass="footer__title" >Дружить:</Headline>
      <SocialMediaIconPanel />
      <div className="footer__info" >
        <p className="footer__info-line" >© Наталья Натфуллина, 2021, содержание, дизайн</p>
        <p className="footer__info-line" >© Виталий Тихонов, 2021, исходный код, дизайн</p>
        <p className="footer__info-line" >
          Авторы иконок: Icongeek26, monkik, prettycons, Kiranshastry,
          Pixel perfect, Vitaly Gorbachev, Those Icons, Lyolya, Freepik.
          Источник: <a className="footer__link" href="https:\\www.flaticon.com" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
        </p>
      </div>
    </footer>
  )

}

export default Footer;
