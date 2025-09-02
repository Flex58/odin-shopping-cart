import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "./NavBar";
import useCart from "../hooks/useCart";
import { useState } from "react";

function Store() {
  const { storeData } = useLoaderData();
  const cart = useCart();
  return (
    <>
      <NavBar />
      <Outlet context={[storeData, cart]} />
    </>
  );
}

export default Store;
