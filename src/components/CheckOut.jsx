import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import main from "../css/LayoutMain.module.css";
import classes from "../css/CheckOut.module.css";
import CheckOutItem from "./CheckOutItem";

function CheckOut() {
  const [, cart] = useOutletContext();
  const [totalPrice, setTotalPrice] = useState(
    cart.cart.reduce((x, item) => x + item.totalPrice, 0)
  );
  function handleChange(e, item) {
    if (e.target.value <= 0 || undefined) {
      return;
    } else {
      cart.addToCart(item, parseInt(e.target.value, 10));
      setTotalPrice((c) =>
        Number(
          (
            c -
            item.totalPrice +
            item.price * parseInt(e.target.value, 10)
          ).toFixed(2)
        )
      );
    }
  }

  function tPDec(item) {
    setTotalPrice((c) => Number((c - item.price).toFixed(2)));
  }

  function tPInc(item) {
    setTotalPrice((c) => Number((c + item.price).toFixed(2)));
  }

  function tPRemove(item) {
    setTotalPrice((c) => Number((c - item.totalPrice).toFixed(2)));
  }

  return (
    <div className={main.main + " " + classes.layout}>
      {cart.cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        <>
          <div className={classes.wrapper}>
            {cart.cart.map((item) => {
              return (
                <CheckOutItem
                  key={item.id}
                  item={item}
                  cart={cart}
                  handleChange={handleChange}
                  tPInc={tPInc}
                  tPDec={tPDec}
                  tPRemove={tPRemove}
                />
              );
            })}
          </div>
          <div className={classes.payDiv}>
            <p>Total Price: {totalPrice}€</p>
            <button type="button" onClick={() => cart.clearCart()}>
              Pay Now!
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CheckOut;
