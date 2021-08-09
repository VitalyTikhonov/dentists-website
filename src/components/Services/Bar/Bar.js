import { useState, useEffect } from "react";
import "./Bar.scss";
import cn from "classnames";
import Headline from "../../Headline/Headline";
import LabelAndPinButton from "../../UIControls/LabelAndPinButton/LabelAndPinButton";
import Pin from "../../UIControls/Pin/Pin";
import { useSelector, useDispatch } from "react-redux";
import { setOpenBarIndex, selectOpenBarIndex } from "./openBarIndexSlice";
import { selectScreenType } from "../../Header/screenTypeSlice";
import { screenType } from "../../../constants";

const { mobile } = screenType;

function Bar({ item, index }) {
  const dispatch = useDispatch();
  const [pinState, setPinState] = useState(false);
  const screenType = useSelector(selectScreenType);
  const openBarIndex = useSelector(selectOpenBarIndex);

  function openBar() {
    if (index === openBarIndex) {
      dispatch(setOpenBarIndex(null));
    } else {
      dispatch(setOpenBarIndex(index));
    }
    setPinState(!pinState);
  }

  useEffect(() => {
    if (openBarIndex !== index && pinState) setPinState(false);
  }, [openBarIndex]);

  return (
    <li className="services__bar" key={"a" + index} >
      <div className="services__bar-title" >
        <Headline level={4} color="white" >{item[0]}</Headline>
        <div className="services__bar-controls" >
          {item[1] &&
            (screenType !== mobile ? (
              <LabelAndPinButton
                label={pinState ? "Свернуть" : "Подробнее"}
                direction={pinState ? "up" : "down"}
                positionClass="services__bar-button"
                onClick={openBar}
              />
            ) : (
              <Pin
                type="flat"
                parentClass="button__pin services__bar-button"
                direction={pinState ? "up" : "down"}
                onClick={openBar}
              />
            ))
          }
          {screenType !== mobile && <LabelAndPinButton label={"Примеры работ"} direction="right" positionClass="services__bar-button" />}
        </div>
      </div>
      {item[1] &&
        <ul
          className={cn("services__description", "list-unstyling", { services__description_shown: index === openBarIndex })}
        >
          {item[1].map((line, index) => (
            <li key={"b" + index} ><p className="services__description-line" >{line}</p></li>
          ))}
        </ul>}
    </li>
  )
}

export default Bar;
