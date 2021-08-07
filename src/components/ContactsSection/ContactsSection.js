import "./ContactsSection.scss";
import Headline from "../Headline/Headline";
import MapThumbnail1 from "./map-bolshoy-vlasyevskiy.png";
import MapThumbnail2 from "./map-babushkina.png";

function ContactsSection() {

  return (
    <section className="contactsSection" >
      <Headline level={2} color="blue" >Запись на прием</Headline>

      <div className="contactsSection__card-block" >
        <div className="contactsSection__card" >
          <p className="contactsSection__card-text" >Большой Власьевский переулок, д. 9., метро Смоленская (синяя ветка)</p>

          <img className="contactsSection__map-thumbnail" src={MapThumbnail1} alt="Карта проезда" />
        </div>

        <div className="contactsSection__card" >
          <p className="contactsSection__card-text" >ул. Лётчика Бабушкина д. 48 б, метро Бабушкинская</p>

          <img className="contactsSection__map-thumbnail" src={MapThumbnail2} alt="Карта проезда" />
        </div>
      </div>

      <div className="contactsSection__body" >
        <p className="contactsSection__paragraph" >Если Вы ни разу не были у меня на приёме, то рекомендую для записи использовать Директ моего аккаунта в Инстаграм @dr.natfullina_stom.</p>
        <p className="contactsSection__paragraph" >Для повторных пациентов — телефон колл-центра клиники: 84956041010.</p>
      </div>
    </section>
  );
}

export default ContactsSection;
