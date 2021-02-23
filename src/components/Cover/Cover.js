import "./Cover.scss";
import { useSelector } from "react-redux";
import { selectMobileView } from "../Header/mobileViewSlice";
import { selectTabletView } from "../Header/tabletViewSlice";
import NatashaOriginal from "../../images/cover/Natasha_original_warm_tone.jpg";
import NatashaArmsFolded from "../../images/cover/Natasha_arms_folded_warm_tone.jpg";
import CoverAndMobMenu from "../UIControls/CoverAndMobMenu/CoverAndMobMenu";

function Cover() {
  const mobileView = useSelector(selectMobileView);
  const tabletView = useSelector(selectTabletView);

  return (
    <section className="cover">
      <picture className="cover__picture">
        {/* <source srcSet={} media="(max-width: 320px)" /> */}
        <source srcSet={NatashaArmsFolded} media="(max-width: 1200px)" />
        {/* <source srcSet={NatashaArmsFolded} media="(min-height: 626px)" /> */}
        <img
          src={NatashaOriginal}
          alt="Фото стоматолога Натальи Натфуллиной"
          className="cover__image"
        />
      </picture>
      {!mobileView && <CoverAndMobMenu showAccountButtons={tabletView} />}
    </section>
  );
}

export default Cover;
