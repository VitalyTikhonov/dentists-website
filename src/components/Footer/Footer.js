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
        <p className="footer__info-line" >Авторы иконок: Icongeek26, monkik, prettycons, Kiranshastry, Pixel perfect, Vitaly Gorbachev, Those Icons, Kiranshastry, Pixel perfect, Freepik, источник: www.flaticon.com</p>
      </div>
    </footer>
  )

}

export default Footer;
