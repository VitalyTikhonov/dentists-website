import { memo } from "react";
import styles from "./TextBlock.module.scss";
import getCN from 'classnames';

const TextBlock = memo(function TextBlock(props) {
  // console.log('props.contents', props.contents);
  const {
    doctorDecsription: { headline, paragraphs },
    doctorPhoto,
  } = props.contents;

  return (
    <div className={getCN(styles.row)}>
      <div className={getCN(styles.column)}>
        <h2 className={getCN(styles.headline)}>{headline}</h2>

        {paragraphs.map((paragraph, i) => {
          return (
            <p className={getCN(styles.paragraph)} key={i}>
              {paragraph}
            </p>
          );
        })}
      </div>

      <div className={getCN(styles.column, styles.sidePane)}>{doctorPhoto}</div>
    </div>
  );
});

export default TextBlock;
