import { useEffect } from "react";

import useElemOnScreen from "../../hooks/useElemOnScreen";
import { useDispatch } from "react-redux";
import { setAuthButtonVisibility } from "../../store/authButtonVisibilitySlice";

function NameBar({ children, inHeader }) {
  const dispatch = useDispatch();
  const [elemRef, elemOnScreenResult] = useElemOnScreen();

  useEffect(() => {
    if (!inHeader) dispatch(setAuthButtonVisibility(elemOnScreenResult))
  }, [elemOnScreenResult, dispatch]);

  const type = inHeader ? "header" : "cover";

  return (
    <div className={`${type}__name-bar`} ref={elemRef} >
      {children}
      <h1 className={`${type}__name`}>
        <span className={`${type}__name-first-line`}>Наталья Натфуллина</span>
        Врач-стоматолог
      </h1>
    </div>
  )
}

export default NameBar;
