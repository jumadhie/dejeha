import global from "../page.module.css";
import styles from "./contact.module.css";
import {
  FaPhone,
  FaEnvelope,
  FaEarthAmericas,
  FaLocationDot,
} from "react-icons/fa6";

import Image from "next/image";

export const metadata = {
  title: "Contact",
  description:
    "PT DeJeHa Anja Indonesia is established with the spirit to move forward and successfully brings qualified products to people",
};

const page = () => {
  return (
    <div>
      <div className={global.bannerSection}>
        <div className={global.textBanner}>Contact</div>
      </div>

      <div className={styles.wrapcontact}>
        <div className={styles.wrapitem}>
          <div className={styles.itemContact}>
            <FaLocationDot className={styles.icon} size={42} />
            <h4>Location</h4>
            <p>
              Gedung Nurica Lt.1, Jl. MT. Haryono Kav.27, Tebet Timur, Jakarta
              Selatan Indonesia –12820
            </p>
          </div>
        </div>

        <div className={styles.wrapitem}>
          <div className={styles.itemContact}>
            <FaPhone className={styles.icon} size={42} />
            <h4>Telephone</h4>
            <p>+62 812 9940 8275</p>
            <p>+62 2812 8357 1377</p>
          </div>
        </div>

        <div className={styles.wrapitem}>
          <div className={styles.itemContact}>
            <FaEnvelope className={styles.icon} size={42} />
            <h4>Email Address</h4>
            <p>Jhony.sihombing@dejeha.com</p>
          </div>
        </div>

        <div className={styles.wrapitem}>
          <div className={styles.itemContact}>
            <FaEarthAmericas className={styles.icon} size={42} />
            <h4>Website</h4>
            <p>www.dejeha.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
