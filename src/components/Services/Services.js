import "./Services.scss";
import Headline from "../Headline/Headline";
import Bar from "./Bar/Bar";

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
  return (
    <section className="services">
      <Headline level={2} color="white" >Услуги</Headline>
      <Headline level={3} color="white" >Моя специализация:</Headline>
      <ul className="services__accordion list-unstyling" >
        {services.map((item, index) => <Bar item={item} index={index} key={index} />)}
      </ul>
    </section>
  );
}

export default Services;
