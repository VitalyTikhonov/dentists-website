import { useState } from "react";
import "./Services.scss";
import Headline from "../Headline/Headline";
import LabelAndPinButton from "../UIControls/LabelAndPinButton/LabelAndPinButton";

const services = [
  [
    'Реконструкция зубов в зоне улыбки',
    [
      '– Прямые реставрации, керамические виниры и коронки',
      '– Подбор цвета, коррекция формы, восстановление стертых зубов',
    ],
  ],
  ['Лечение кариеса зубов любой сложности'],
  ['Лечение каналов зубов'],
  [
    'Протезирование зубов',
    [
      '– Коронками и вкладками',
      '– Мостовидными протезами как из диоксида циркония, так и олдскульной металлокерамикой',
    ],
  ],
];

function Services() {
  const [openBarIndex, setOpenBarIndex] = useState(null);

  function openBar(event) {
    const newIndex = Number(event.currentTarget.id);
    if (newIndex === openBarIndex) {
      setOpenBarIndex(null);
    } else {
      setOpenBarIndex(newIndex);
    }
  }

  function renderDescription(service, index) {
    if (service[1] && index === openBarIndex) {
      return (
        <ul className="services__description list-unstyling" >
          {service[1].map((line, index) => (
            <li key={"b" + index} ><p className="services__description-line" >{line}</p></li>
          ))}
        </ul>
      );
    }
  }

  return (
    <section className="services">
      <Headline level={2} color="white" >Услуги</Headline>
      <Headline level={3} color="white" >Моя специализация:</Headline>
      <ul className="services__accordion list-unstyling" >
        {services.map((item, index) => (
          <li className="services__bar" key={"a" + index} >
            <div className="services__bar-title" >
              <Headline level={4} color="white" >{item[0]}</Headline>
              <div className="services__bar-controls" >
                {item[1] && <LabelAndPinButton label={"Подробнее"} direction="down" positionClass="services__bar-button" id={index} onClick={openBar} />}
                <LabelAndPinButton label={"Примеры работ"} direction="right" positionClass="services__bar-button" />
              </div>
            </div>
            {renderDescription(item, index)}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Services;
