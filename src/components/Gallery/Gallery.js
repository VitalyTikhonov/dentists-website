import { useState, useEffect } from "react";
import "./Gallery.scss";
import Headline from "../Headline/Headline";
import Overlay from "..//Overlay/Overlay";

import Certificate01 from "../../images/certificates/certificate_01.jpeg";
import Certificate02 from "../../images/certificates/certificate_02.jpeg";
import Certificate03 from "../../images/certificates/certificate_03.jpeg";
import Certificate04 from "../../images/certificates/certificate_04.jpeg";
import Certificate05 from "../../images/certificates/certificate_05.jpeg";
import Certificate06 from "../../images/certificates/certificate_06.jpeg";
import Certificate07 from "../../images/certificates/certificate_07.jpeg";
import Certificate08 from "../../images/certificates/certificate_08.jpeg";
import Certificate09 from "../../images/certificates/certificate_09.jpeg";
import Certificate10 from "../../images/certificates/certificate_10.jpeg";
import Certificate11 from "../../images/certificates/certificate_11.jpg";
import Certificate12 from "../../images/certificates/certificate_12.jpg";
import Certificate13 from "../../images/certificates/certificate_13.jpeg";
import Certificate14 from "../../images/certificates/certificate_14.jpg";
import Certificate15 from "../../images/certificates/certificate_15.jpeg";
import Certificate16 from "../../images/certificates/certificate_16.jpg";
import Certificate17 from "../../images/certificates/certificate_17.jpg";
import Certificate18 from "../../images/certificates/certificate_18.jpg";
import Certificate19 from "../../images/certificates/certificate_19.jpg";
import Certificate20 from "../../images/certificates/certificate_20.jpeg";
import Certificate21 from "../../images/certificates/certificate_21.jpg";
import Certificate22 from "../../images/certificates/certificate_22.jpeg";
import Certificate23 from "../../images/certificates/certificate_23.jpg";

const images = [Certificate01, Certificate02, Certificate03, Certificate04, Certificate05, Certificate06, Certificate07, Certificate08, Certificate09, Certificate10, Certificate11, Certificate12, Certificate13, Certificate14, Certificate15, Certificate16, Certificate17, Certificate18, Certificate19, Certificate20, Certificate21, Certificate22, Certificate23];

function Gallery() {
  const [zoomedImage, setZoomedImage] = useState(null)

  function zoomImage(event) {
    setZoomedImage(event.target.src)
  }

  return (
    <>
      <section className="gallery-section">
        <Headline level={2} color="white" >Дипломы и сертификаты</Headline>
        <div className="gallery" >
          {images.map((image, index) => (
            <img className="gallery__image" key={"a" + index} src={image} onClick={zoomImage} alt="Сертификат" />
          ))}
        </div>
      </section>

      {zoomedImage &&
        <Overlay handleCloseClick={() => setZoomedImage(null)} >
          <img className="gallery__popup-image" src={zoomedImage} alt="Сертификат" />
        </Overlay>}
    </>
  );
}

export default Gallery;
