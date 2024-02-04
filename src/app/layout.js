import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "PT Dejeha Anja Indonesia",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className={styles.topbar}>
          <div>
            <Link href="/">DEJEHA ANJA INDONESIA</Link>
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
        </div> */}
        {children}
        {/* <div style={{ height: 200, background: "grey" }}>
          <h1>halaman footer</h1>
        </div> */}
      </body>
    </html>
  );
}
