import "./Cover.scss";
import { useSelector } from "react-redux";
// import { selectMobileHeaderView } from "../Header/mobileHeaderViewSlice";
import { selectTabletView } from "../Header/tabletViewSlice";
import NatashaOriginal_1240 from "../../images/cover/Natasha_original_warm_tone_1240.jpg";
import NatashaArmsFolded_1200 from "../../images/cover/Natasha_arms_folded_warm_tone_1200.jpg";
import NatashaArmsFolded_896 from "../../images/cover/Natasha_arms_folded_warm_tone_896.jpg";
import NatashaArmsFolded_700 from "../../images/cover/Natasha_original_warm_tone_700.jpg";
import CoverMenu from "../UIControls/CoverMenu/CoverMenu";
import AccountButtonGroup from "../UIControls/AccountButtonGroup/AccountButtonGroup";

function Cover() {
  // const mobileHeaderView = useSelector(selectMobileHeaderView);
  const tabletView = useSelector(selectTabletView);

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
        <AccountButtonGroup />
      </div>
      <CoverMenu showAccountButtons={tabletView} />
    </section>
  );
}

export default Cover;
