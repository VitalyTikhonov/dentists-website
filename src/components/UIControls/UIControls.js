import styles from "./UIControls.module.scss";
import getCN from "classnames";

const UIControls = function (props) {
  return (
    <div className={getCN(styles.UIDevContainer)}>
      <div
        className={getCN(styles.UIDevContainer__pageWidthSection, styles.UIDevContainer__sectionWithPhotoBg)}
      >
        <div className={getCN(styles.UIDevContainer__controlsOnTheRight)} >
          <div className={getCN(styles.cover__topControlOverlay)} >
            <button className={getCN(styles.btn__inCover, styles.btn__withIcon, styles.btn__inCover_principal)}>
              <span className={getCN(styles.btn__iconInBtn, styles.btn__iconInBtn_accountIcon)} />
              Личный кабинет
            </button>
            <button className={getCN(styles.btn__inCover, styles.btn__withIcon, styles.btn__inCover_secondary)}>
              <span className={getCN(styles.btn__iconInBtn, styles.btn__iconInBtn_logoutIcon)} />
              Выйти
            </button>
          </div>

          <div className={getCN(styles.cover__topControlOverlay)} >
            <button className={getCN(styles.btn__inCover, styles.btn__withIcon, styles.btn__inCover_principal)}>
              <span className={getCN(styles.btn__iconInBtn, styles.btn__iconInBtn_loginIcon)} />
              Войти
            </button>
            <button className={getCN(styles.btn__inCover, styles.btn__withIcon, styles.btn__inCover_secondary)}>
              <span className={getCN(styles.btn__iconInBtn, styles.btn__iconInBtn_signupIcon)} />
              Регистрация
            </button>
          </div>
        </div>
      </div>
      <div className={getCN(styles.UIDevContainer__columnContainer)}>
        <div className={getCN(styles.UIDevContainer__column, styles.UIDevContainer__column_bgBlue)}></div>
        <div className={getCN(styles.UIDevContainer__column, styles.UIDevContainer__column_bgLightBlue)}></div>
        <div className={getCN(styles.UIDevContainer__column, styles.UIDevContainer__column_bgWallpaper)}></div>
      </div>
      {/* <div className={getCN(styles.)} ></div> */}
    </div>
  );
};

export default UIControls;
