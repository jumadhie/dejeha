import styles from "./about.module.css";
import global from "../page.module.css";

const page = () => {
  return (
    <div className={styles.about}>
      <div className={global.bannerSection}>
        <div className={global.textBanner}>About</div>
      </div>
      <div className={styles.containerAbout}>
        <div className={styles.imgAbout}></div>
        <div className={styles.aboutme}>
          <h1>About Our Company</h1>
          <p>
            PT DeJeHa Anja Indonesia is established with the spirit to move
            forward and successfully brings qualified products to people.
          </p>
          <p>
            Together, we have mission to deliver best sources to the community.
            Our top commitment is to distribute excellent products and services
            which meeting customer requirements as understand that the needs are
            changing following the change of pandemic’s impact to the
            environment
          </p>
          <p>
            Office is based in Jakarta which reaching out all over Indonesia and
            even abroad.
          </p>
          <p>
            Community is consistently supported by good values from the product
            and services provided by our business is Aim.
          </p>
        </div>
      </div>

      <div className={styles.benefit}>
        <h2>Why Choose Us</h2>
        <div className={styles.wrapcardbenefit} style={{}}>
          <div className={styles.cardbenefit}>
            ADVANTAGES
            <p>
              We deliver best and unique products and services. Open for
              customization. This what makes sets apart.
            </p>
          </div>
          <div className={styles.cardbenefit}>
            Price
            <p>
              We offer most reasonable prices due to most of the products are
              acquired directly from the manufacturer or producer.
            </p>
          </div>
          <div className={styles.cardbenefit}>
            Availability
            <p>
              Dealing with professionals distributors, manufacturer or producer
              that gives many benefits in terms of consistent product
              availability.
            </p>
          </div>
          <div className={styles.cardbenefit}>
            Quality
            <p>
              In order to ensure consistent quality of product delivered, we
              have close communication with the sources
            </p>
          </div>
          <div className={styles.cardbenefit}>
            Legal
            <p>
              We provide legal products in compliance with local and
              international government standards. Also dealing with all licensed
              parties, which both manufacturers or distributors and related
              parties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
