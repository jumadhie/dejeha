"use client";
import Image from "next/image";
import global from "../page.module.css";
import styles from "./product.module.css";

import { product } from "./../data";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { useState } from "react";

const dataFilter = [
  {
    id: 1,
    category: "All",
  },
  {
    id: 2,
    category: "Hospital",
  },
  {
    id: 3,
    category: "Industri",
  },
  {
    id: 4,
    category: "Retailers",
  },
];

const page = () => {
  const [active, setActive] = useState(false);
  const [category, setCategori] = useState("All");
  const filtered = product.filter((employee) => {
    return category === "All" ? employee : employee.category === category;
  });

  const handleFilter = (d) => {
    setCategori(d);
  };
  return (
    <div>
      <div className={global.bannerSection}>
        <div className={global.textBanner}>Product</div>
      </div>

      <div className={styles.wrapProduct}>
        <div className={styles.headerFilter}>
          <p>Filter Category</p>

          <div className={styles.wrapFilter}>
            <ul>
              {dataFilter.map((d, i) => {
                return (
                  <li
                    key={d.id}
                    onClick={() => handleFilter(d.category)}
                    className={
                      category === d.category
                        ? styles.active
                        : styles.itemCategori
                    }
                  >
                    {d.category}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className={styles.wrapfeatureproduct}>
          {filtered.map((data, index) => {
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
    </div>
  );
};

export default page;
