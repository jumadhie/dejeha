import Product from "./product";

export const metadata = {
  title: "Product",
  description:
    "PT DeJeHa Anja Indonesia is established with the spirit to move forward and successfully brings qualified products to people",
  icons: [{ rel: "icon", url: "/assets/ico.ico" }],
};

const page = () => {
  return <Product />;
};

export default page;
