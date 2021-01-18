import TextBlock from "../TextBlock/TextBlock";
import { memo } from "react";
import styles from "./DoctorProfile.module.scss";
import { doctorDecsription } from "../../data";
import doctorPhotoPath from "../../images/Natasha_WhatsApp_01.png";

const DoctorProfile = memo(function DoctorProfile(props) {
  const doctorPhoto = (
    <img
      className={styles.docPhoto}
      src={doctorPhotoPath}
      alt="Фото доктора Натфуллиной"
    />
  );

  return (
    <section className={styles.section}>
      <TextBlock contents={{ doctorDecsription, doctorPhoto }} />
    </section>
  );
});

export default DoctorProfile;
