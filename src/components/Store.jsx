import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";
import useCart from "../hooks/useCart";
import Footer from "./Footer";

function Store() {
  const { storeData } = useLoaderData();
  const cart = useCart();
  return (
    <>
      <NavBar />
      <Outlet context={[storeData, cart]} />
      <Footer />
    </>
  );
}

export default Store;
