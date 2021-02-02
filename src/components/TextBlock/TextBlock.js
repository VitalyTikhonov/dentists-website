import { memo } from "react";
import styles from "./TextBlock.module.scss";
import getCN from "classnames";

const TextBlock = memo(function TextBlock(props) {
  // console.log('props.contents', props.contents);
  const { subsection, sectionHeadline } = props.contents;

  return (
    <>
      <div className={getCN(styles.textBlock)}>
        {sectionHeadline && (
          <h1 className={getCN(styles.sectionHeadline)}>{sectionHeadline}</h1>
        )}

        {subsection && (
          <div id={subsection.id} >
            <h2
              className={getCN(
                styles.headline,
                styles.textBackgroundOnWallpaper
              )}
            >
              {subsection.headline}
            </h2>

            {subsection.clauses.map((clause, a) => {
              return (
                <div className={styles.clause} key={a} >
                  {clause.map((paragraph, b) => {
                    return (
                      <p className={getCN(styles.paragraph)} key={b}>
                        {paragraph}
                      </p>
                      // <p className={getCN(styles.paragraph, styles.textBackgroundOnWallpaper)} key={b}>{paragraph}</p>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
});

export default TextBlock;
