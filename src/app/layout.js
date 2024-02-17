import { Inter } from "next/font/google";
import "./globals.css";
import Topbar from "./component/topbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dejeha Anja Indonesia",
  description:
    "PT DeJeHa Anja Indonesia is established with the spirit to move forward and successfully brings qualified products to people.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        {/*  */}
        {children}
        <div style={{ height: 200, background: "#00508f" }}>
          <h1>halaman footer</h1>
        </div>
      </body>
    </html>
  );
}
