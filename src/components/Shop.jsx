import { Outlet, useOutletContext } from "react-router-dom";
import Cards from "./Cards";
import main from "../css/LayoutMain.module.css";
import classes from "../css/Shop.module.css";

function Shop() {
  const [storeData, cart] = useOutletContext();
  return (
    <div className={classes.main + " " + main.main}>
      <div>
        <h1>This is the Shop</h1>
        <div className={classes.cardGroup}>
          {storeData.map((item) => {
            return <Cards key={item.id} props={item} cart={cart} />;
          })}
        </div>
      </div>
      <div>
        <h1>Cart</h1>
        <Outlet context={cart} />
      </div>
    </div>
  );
}

export default Shop;
