import "./Cover.scss";
import { useSelector } from "react-redux";
import { selectMobileHeaderView } from "../Header/mobileHeaderViewSlice";
import { selectTabletView } from "../Header/tabletViewSlice";
import NatashaOriginal from "../../images/cover/Natasha_original_warm_tone.jpg";
import NatashaArmsFolded from "../../images/cover/Natasha_arms_folded_warm_tone.jpg";
import NatashaArmsFolded_896 from "../../images/cover/Natasha_arms_folded_warm_tone_896.jpg";
import CoverAndMobMenu from "../UIControls/CoverAndMobMenu/CoverAndMobMenu";

function Cover() {
  const mobileHeaderView = useSelector(selectMobileHeaderView);
  const tabletView = useSelector(selectTabletView);

  return (
    <section className="cover">
      <div className="cover__photo-part">
        <picture className="cover__picture">
          <source srcSet={NatashaArmsFolded_896} media="(max-width: 896px)" />
          <source srcSet={NatashaArmsFolded} media="(max-width: 1200px)" />
          {/* <source srcSet={NatashaArmsFolded} media="(min-height: 626px)" /> */}
          <img
            src={NatashaOriginal}
            alt="Фото стоматолога Натальи Натфуллиной"
            className="cover__image"
          />
        </picture>
      </div>
      {!mobileHeaderView && <CoverAndMobMenu showAccountButtons={tabletView} />}
    </section>
  );
}

export default Cover;
