import "./Services.scss";
import Headline from "../Headline/Headline";

function Services() {
    const services = [
        ['Реконструкция зубов в зоне улыбки'],
        ['Лечение кариеса зубов любой сложности'],
        ['Лечение каналов зубов'],
        [
            'Протезирование зубов',
            `
                – Коронками и вкладками
                – Мостовидными протезами как из диоксида циркония, так и олдскульной металлокерамикой
            `,
        ],
    ];

    return (
        <section className="services">
            <Headline level={2} color="white" >Услуги</Headline>
            <Headline level={3} color="white" >Моя специализация:</Headline>
            <ul className="services__accordion" >
                {services.map((item) => (
                    <li className="services__accordion-bar" >
                        <Headline level={4} color="white" >{item[0]}</Headline>
                        {item[1] && <p className="" >{item[1]}</p>}
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Services;
