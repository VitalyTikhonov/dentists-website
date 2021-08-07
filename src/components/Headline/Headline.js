import "./Headline.scss";
import cn from "classnames";

function Headline({ children, level, color, localClass }) {
    switch (level) {
        case 2:
            return <h2 className={cn("headline", `headline_color_${color}`, localClass)} >{children}</h2>
        case 3:
            return <h3 className={cn("headline", "headline_subtitle", `headline_color_${color}`, localClass)} >{children}</h3>
        case 4:
            return <h4 className={cn("headline", "headline_card-title", `headline_color_${color}`, localClass)} >{children}</h4>
        default:
            return <div>ОШИБКА</div>
    }
}

export default Headline;
