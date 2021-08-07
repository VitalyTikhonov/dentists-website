import "./TextSection.scss";
import Headline from "../Headline/Headline";
import cn from "classnames";

function TextSection({ textData, columns }) {
  const { title, blocks } = textData;

  return (
    <section className="textSection" >
      <div className="textSection__title-bar" >
        <Headline level={2} color="white" >{title}</Headline>
      </div>

      <div className={cn("textSection__body", { textSection__columns: columns })} >
        {blocks.map((blocks) => blocks.map((paragraph, index) => <p className="textSection__paragraph" key={"c" + index} >{paragraph}</p>))}
      </div>
    </section>
  );
}

export default TextSection;
