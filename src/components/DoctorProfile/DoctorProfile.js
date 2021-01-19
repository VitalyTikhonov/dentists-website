import TextBlock from "../TextBlock/TextBlock";
import { memo } from "react";
import styles from "./DoctorProfile.module.scss";
import { doctorDecsription } from "../../data";
import doctorPhotoPath from "../../images/Natasha_WhatsApp_02.jpeg";
// import doctorPhotoPath from "../../images/Natasha_WhatsApp_01.png";

const DoctorProfile = memo(function DoctorProfile(props) {
  return (
    <section className={styles.section}>
      <TextBlock contents={{ doctorDecsription }} />

      <img
        className={styles.docPhoto}
        src={doctorPhotoPath}
        alt="Фото доктора Натфуллиной"
      />
    </section>
  );
});

export default DoctorProfile;
