import styles from "../page.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerLogo}></div>

      <div className={styles.wrapInfoFooter}>
        <div className={styles.infoFooter}>
          <p>Telephone:</p>
          <p>+62 812 9940 8275</p>
          <p>+62 2812 8357 1377</p>
        </div>
        <div className={styles.infoFooter}>
          <p>Email Address:</p>
          <p>Jhony.sihombing@dejeha.com</p>
        </div>
        <div className={styles.infoFooter}>
          <p>Website:</p>
          <p>www.dejeha.com</p>
        </div>
        <div className={styles.infoFooter}>
          <p>Location:</p>
          <p>
            Gedung Nurica Lt.1, Jl. MT. Haryono Kav.27, Tebet Timur, Jakarta
            Selatan Indonesia –12820
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
