import { Outlet, useOutletContext } from "react-router-dom";
import Cards from "./Cards";
import main from "../css/LayoutMain.module.css";
import classes from "../css/Shop.module.css";

function Shop() {
  const [storeData, cart] = useOutletContext();
  return (
    <div className={classes.main + " " + main.main}>
      <div>
        <div>This is the Shop</div>
        <div className={classes.cardGroup}>
          {storeData.map((item) => {
            return <Cards key={item.id} props={item} cart={cart} className={classes.tempCard} />;
          })}
        </div>
      </div>
      <Outlet context={cart} />
    </div>
  );
}

export default Shop;
