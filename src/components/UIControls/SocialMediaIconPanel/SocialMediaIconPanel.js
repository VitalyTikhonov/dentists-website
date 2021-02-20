import { Link } from "react-router-dom";
import "./SocialMediaIconPanel.scss";
import FacebookIcon from "../svgReactComponents/Facebook.js";
import VkIcon from "../svgReactComponents/Vk.js";
import YoutubeIcon from "../svgReactComponents/Youtube.js";
import InstagramIcon from "../svgReactComponents/Instagram.js";
import TelegramIcon from "../svgReactComponents/Telegram.js";
import WhatsappIcon from "../svgReactComponents/WhatsApp.js";
import GmailIcon from "../svgReactComponents/Gmail.js";

const SocialMediaIconPanel = function (props) {
  return (
    <nav className="socal-media-panel" aria-labelledby="header-navigation">
      <h2 className="ariaLabelledTitle" id="header-navigation">
        Ссылки на соцсети и мессенджеры
      </h2>

      <ul className="socal-media-panel__list list-unstyling">
        <li className="socal-media-panel__item">
          <Link to="" className="socal-media-panel__link link-unstyling">
            <FacebookIcon className="socal-media-panel__icon"/>
          </Link>
        </li>
        <li className="socal-media-panel__item">
          <Link to="" className="socal-media-panel__link link-unstyling">
            <VkIcon className="socal-media-panel__icon" />
          </Link>
        </li>
        <li className="socal-media-panel__item">
          <Link to="" className="socal-media-panel__link link-unstyling">
            <YoutubeIcon className="socal-media-panel__icon" />
          </Link>
        </li>
        <li className="socal-media-panel__item">
          <Link to="" className="socal-media-panel__link link-unstyling">
            <InstagramIcon className="socal-media-panel__icon" />
          </Link>
        </li>
        <li className="socal-media-panel__item">
          <Link to="" className="socal-media-panel__link link-unstyling">
            <TelegramIcon className="socal-media-panel__icon" />
          </Link>
        </li>
        {false && (
          <li className="socal-media-panel__item">
            <Link to="" className="socal-media-panel__link link-unstyling">
              <WhatsappIcon className="socal-media-panel__icon" />
            </Link>
          </li>
        )}
        {false && (
          <li className="socal-media-panel__item">
            <Link to="" className="socal-media-panel__link link-unstyling">
              <GmailIcon className="socal-media-panel__icon" />
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default SocialMediaIconPanel;
