import styles from "./UIDevContainer.module.scss";
import cn from "classnames";

const UIControls = function (props) {
  return (
    <div className={cn(styles.UIDevContainer)}>
      <div
        className={cn(
          styles.UIDevContainer__pageWidthSection,
          styles.UIDevContainer__sectionWithPhotoBg
        )}
      >
        <div className={cn(styles.UIDevContainer__controlsOnTheRight)}>
          <div className={cn(styles.cover__topControlOverlay)}>
            <button className={cn(styles.button, styles.inCover, styles.inCover_principal)}>
              <span className={cn(styles.iconInBtn_accountIcon)} />
              Личный кабинет
            </button>
            <button className={cn(styles.button, styles.inCover, styles.inCover_secondary)}>
              <span className={cn(styles.iconInBtn_logoutIcon)} />
              Выйти
            </button>
          </div>

          <div className={cn(styles.cover__topControlOverlay)}>
            <button className={cn(styles.button, styles.inCover, styles.inCover_principal)}>
              <span className={cn(styles.iconInBtn_loginIcon)} />
              Войти
            </button>
            <button className={cn(styles.button, styles.inCover, styles.inCover_secondary)}>
              <span className={cn(styles.iconInBtn_signupIcon)} />
              Регистрация
            </button>
          </div>
        </div>
      </div>
      <div className={cn(styles.UIDevContainer__columnContainer)}>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgBlue
          )}
        ></div>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgLightBlue
          )}
        ></div>
        <div
          className={cn(
            styles.UIDevContainer__column,
            styles.UIDevContainer__column_bgWallpaper
          )}
        ></div>
      </div>
      {/* <div className={cn(styles.)} ></div> */}
    </div>
  );
};

export default UIControls;
