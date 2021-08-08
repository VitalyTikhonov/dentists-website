function NameBar({ children, inHeader }) {
  const type = inHeader ? "header" : "cover";

  return (
    <div className={`${type}__name-bar`} >
      {children}
      <h1 className={`${type}__name`}>
        <span className={`${type}__name-first-line`}>Наталья Натфуллина</span>
        Врач-стоматолог
      </h1>
    </div>
  )
}

export default NameBar;
