import Image from "next/image";
import styles from "./page.module.css";
import { product, Client } from "./data";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.wrtext}>
          <span className={styles.hTitle}>
            Get Quality <span>Products</span> for your Company
          </span>
          <div className={styles.hDescript}>
            <p>
              <span className={styles.labelhDescript}>
                PT DeJeHa Anja Indonesia
              </span>{" "}
              is established with the spirit to move forward and successfully
              brings qualified products to people.
            </p>
          </div>
        </div>

        <div className={styles.imgbanner}></div>
      </div>

      {/* TARGET CUSTOMER */}
      <div className={styles.TCustomer}>
        <h3>Target Customer</h3>
        <p>find the right product for the company's needs</p>

        <div className={styles.WTCcard}>
          <div className={styles.TCcard}>
            <p>Hospital & Clinic</p>
          </div>
          <div className={styles.TCcard}>
            <p>Industries</p>
          </div>
          <div className={styles.TCcard}>
            <p>Retailers</p>
          </div>
        </div>
      </div>

      {/* TARGET CUSTOMER */}
      <div className={styles.PCategory}>
        <div className={styles.PCategoryInner}>
          <h3>Product Category</h3>
          <p>
            People’s health, safety and comfort are matter most to us.
            Therefore, we professionally supply original products that has
            outstanding quality.Below are the products :
          </p>

          <div className={styles.PCleft}>
            <div className={styles.PCWimg}>
              <Image
                className={styles.imgPC}
                src="/assets/PC1.png"
                width={500}
                height={500}
                alt="pc1"
              />
            </div>
            <div className={styles.PContent}>
              <h4>MEDICAL DEVICES</h4>
              <p>
                We are professionally supply original products that has passed
                Health Ministry qualification and having distribution licenses
                from Trade Ministry. Completed by International standards, ISO ,
                CE and FDA .
              </p>

              <Link className={styles.btnLink} href="/product">
                View Product
              </Link>
            </div>
          </div>

          <div className={styles.PCleft}>
            <div className={styles.PCWimg}>
              <Image
                className={styles.imgPC}
                src="/assets/PC2.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.PContent}>
              <h4>SAFETY EQUIPMENT</h4>
              <p>
                We provide qualified safety equipment and tools. We concern to
                individual safety, protective equipment, first aid supply in the
                work place.
              </p>
              <Link className={styles.btnLink} href="/product">
                View Product
              </Link>
            </div>
          </div>

          <div className={styles.PCleft}>
            <div className={styles.PCWimg}>
              <Image
                className={styles.imgPC}
                src="/assets/PC3.jpg"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.PContent}>
              <h4>SUPPLIES & MARKETING TOOLS</h4>
              <p>
                We are professionally supply original products that has passed
                Health Ministry qualification and having distribution licenses
                from Trade Ministry. Completed by International standards, ISO ,
                CE and FDA.
              </p>
              <Link className={styles.btnLink} href="/product">
                View Product
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FEATURE PRODUCT */}

      <div className={styles.wrapFeature}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 12,
            padding: "0px 6px 0 6px",
          }}
        >
          <p>Feature Product</p>
          <Link href="/product">View All</Link>
        </div>
        <div className={styles.wrapfeatureproduct}>
          {product
            .filter((hasil, index) => index < 5)
            .map((data, index) => {
              return (
                <div key={index} className={styles.cardProductFeature}>
                  <div className={styles.wrapCard}>
                    <Image
                      className={styles.imageCardProduct}
                      src={`/assets/${data.img}`}
                      width={100}
                      height={100}
                      alt="Picture of the author"
                    />

                    <p style={{ textAlign: "center" }}>{data.name}</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* CLIENT */}

      <div className={styles.wrapclient}>
        <h3>Client</h3>
        <div className={styles.wrapclientitem}>
          {Client.map((d, i) => {
            return (
              <div className={styles.itemclient} key={i}>
                {d.name}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
