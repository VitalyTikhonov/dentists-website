import "./Cover.scss";
import { useSelector } from "react-redux";
// import { selectMobileHeaderView } from "../../state/mobileHeaderViewSlice";
import { selectScreenType } from "../../store/screenTypeSlice";
import NatashaOriginal_1240 from "../../images/cover/Natasha_original_warm_tone_1240.jpg";
import NatashaArmsFolded_1200 from "../../images/cover/Natasha_arms_folded_warm_tone_1200.jpg";
import NatashaArmsFolded_896 from "../../images/cover/Natasha_arms_folded_warm_tone_896.jpg";
import NatashaArmsFolded_700 from "../../images/cover/Natasha_original_warm_tone_700.jpg";
import NameBar from "../NameBar/NameBar";
import CoverMenu from "../UIControls/CoverMenu/CoverMenu";
import AccountButtonGroup from "../UIControls/AccountButtonGroup/AccountButtonGroup";
import { screenType } from "../../constants";

const { tablet } = screenType;

function Cover() {
  // const mobileHeaderView = useSelector(selectMobileHeaderView);
  const screenType = useSelector(selectScreenType);

  return (
    <section className="cover">
      <div className="cover__photo-part">
        <picture className="cover__picture">
          <source srcSet={NatashaArmsFolded_700} media="(max-width: 700px)" />
          <source srcSet={NatashaArmsFolded_896} media="(max-width: 896px)" />
          <source srcSet={NatashaArmsFolded_1200} media="(max-width: 1200px)" />
          {/* <source srcSet={NatashaArmsFolded} media="(min-height: 626px)" /> */}
          <img
            src={NatashaOriginal_1240}
            alt="Фото стоматолога Натальи Натфуллиной"
            className="cover__image"
          />
        </picture>

        <NameBar />

        <AccountButtonGroup />
      </div>
      <CoverMenu showAccountButtons={screenType === tablet} />
    </section>
  );
}

export default Cover;
