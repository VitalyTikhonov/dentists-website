import "./AccountButtonGroup.scss";

const AccountButtonGroup = function (props) {
  return props.loggedIn ? (
    <>
      <button
        type="button"
        className="button button__overCover button__overCover_principal button__ic-lab_type_account"
      >
        Личный кабинет
      </button>
      <button
        type="button"
        className="button button__overCover button__overCover_secondary button__ic-lab_type_logout"
      >
        Выйти
      </button>
    </>
  ) : (
    <>
      <button
        type="button"
        className="button button__overCover button__overCover_principal button__ic-lab_type_login"
      >
        Войти
      </button>
      <button
        type="button"
        className="button button__overCover button__overCover_secondary button__ic-lab_type_ignup"
      >
        Регистрация
      </button>
    </>
  );
};

export default AccountButtonGroup;
