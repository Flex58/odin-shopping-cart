import classes from "../css/NavBar.module.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className={classes.wrapper}>
      <div className={classes.left}>
        <Link to={"/"} className={classes.link}>
          Home
        </Link>
        <Link to={"/store/shop"} className={classes.link}>
          Shop
        </Link>
      </div>
      <Link to={"/store/check-out"} className={classes.link}>
        Checkout
      </Link>
    </div>
  );
}

export default NavBar;
