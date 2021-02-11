import TextBlock from "../TextBlock/TextBlock";
import SectionHeadline from "../SectionHeadline/SectionHeadline";
import SideNavbar from "../SideNavbar/SideNavbar";
import { memo } from "react";
import styles from "./DoctorProfile.module.scss";
import getCN from "classnames";
import { doctorDecsription } from "../../data/data";
import doctorPhotoPath from "../../images/Natasha_WhatsApp_02.jpeg";
// import doctorPhotoPath from "../../images/Natasha_WhatsApp_01.png";

const DoctorProfile = memo(function DoctorProfile(props) {
  return (
    <section className={getCN(styles.section)} id={doctorDecsription.id} >
      <div className={getCN(styles.sectionColumn, styles.sectionBody)}>
        <SectionHeadline text={doctorDecsription.headline} />

        {doctorDecsription.subsections.map((subsection, index) => (
          <TextBlock contents={{ subsection }} key={index} />
        ))}
      </div>

      <div className={getCN(styles.sectionColumn, styles.sectionSidebar)} >
        <img
          className={getCN(styles.docPhoto)}
          src={doctorPhotoPath}
          alt="Фото доктора Натфуллиной"
        />

        <SideNavbar contentsMap={doctorDecsription.subsections} />
      </div>
    </section>
  );
});

export default DoctorProfile;
