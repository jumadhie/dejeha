"use client";
import styles from "../page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaAlignRight, FaX } from "react-icons/fa6";
const topbar = () => {
  const router = useRouter();
  const [menu, SetMenu] = useState(false);
  const hide = () => {
    SetMenu(false);
  };
  const show = () => {
    SetMenu(true);
  };

  const changeUrl = (e, path) => {
    e.preventDefault();
    if (path === "/") {
      router.push("/");
      SetMenu(false);
    }
    if (path === "/product") {
      router.push("/product");
      SetMenu(false);
    }
    if (path === "/about") {
      router.push("/about");
      SetMenu(false);
    }
    if (path === "/contact") {
      router.push("/contact");
      SetMenu(false);
    }
  };
  return (
    <div className={styles.topbar}>
      <div>
        <Link href="/">DEJEHA ANJA INDONESIA</Link>
      </div>
      <div className={styles.toggle}>
        <FaAlignRight onClick={show} size={23} />
      </div>
      <ul className={styles.menutopbar}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/product">Product</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      {menu ? (
        <div className={styles.topbarM}>
          <ul>
            <div className={styles.closeM}>
              <div>
                <FaX onClick={hide} size={23} />
              </div>
            </div>
            <li>
              <Link href="/" onClick={(e) => changeUrl(e, "/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/" onClick={(e) => changeUrl(e, "/product")}>
                Product
              </Link>
            </li>
            <li>
              <Link href="/" onClick={(e) => changeUrl(e, "/about")}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/" onClick={(e) => changeUrl(e, "/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default topbar;
