import "./Services.scss";
import Headline from "../Headline/Headline";
import LabelAndPinButton from "../UIControls/LabelAndPinButton/LabelAndPinButton";

function Services() {
    const services = [
        ['Реконструкция зубов в зоне улыбки'],
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

    return (
        <section className="services">
            <Headline level={2} color="white" >Услуги</Headline>
            <Headline level={3} color="white" >Моя специализация:</Headline>
            <ul className="services__accordion list-unstyling" >
                {services.map((item) => (
                    <li className="services__bar" >
                        <div className="services__bar-title" >
                            <Headline level={4} color="white" >{item[0]}</Headline>
                            <div className="services__bar-controls" >
                                <LabelAndPinButton label={"Подробнее"} direction="down" positionClass="services__bar-button" />
                                <LabelAndPinButton label={"Примеры работ"} direction="right" positionClass="services__bar-button" />
                            </div>
                        </div>
                        {item[1] &&
                            <ul className="services__description list-unstyling" >
                                {item[1].map((line) => <li><p className="services__description-line" >{line}</p></li>)}
                            </ul>
                        }
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;
