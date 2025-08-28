import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <Link to={"/shop"}>Shop</Link>
      <Link to={"/check-out"}>Checkout</Link>
    </>
  );
}

export default NavBar