import "./Headline.scss";

function Headline({ children, level, color }) {
    switch (level) {
        case 2:
            return <h2 className={`headline headline_color_${color}`} >{children}</h2>
            break;
        case 3:
            return <h3 className={`headline headline_subtitle headline_color_${color}`} >{children}</h3>
            break;
        case 4:
            return <h4 className={`headline headline_card-title headline_color_${color}`} >{children}</h4>
            break;
        default:
            return <div>ОШИБКА</div>
    }
}

export default Headline;
