import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/store/shop"}>Shop</Link>
      <Link to={"/store/check-out"}>Checkout</Link>
    </>
  );
}

export default NavBar;
