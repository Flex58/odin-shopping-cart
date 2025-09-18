import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import main from "../css/LayoutMain.module.css";
import classes from "../css/CheckOut.module.css";
import input from "../css/Cart.module.css";

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

  return (
    <div className={main.main + " " + classes.layout}>
      <div className={classes.wrapper}>
        {cart.cart.map((item) => {
          return (
            <div key={item.id} className={classes.item}>
              <img src={item.image} alt={"image of " + item.title} />
              <h2>{item.title}</h2>
              <p>{item.desc}</p>

              <div className={input.input}>
                <button
                  type="button"
                  onClick={() => {
                    cart.decrement(item.id);
                    setTotalPrice((c) => Number((c - item.price).toFixed(2)));
                  }}
                  disabled={item.amount <= 1 ? true : false}
                  className={classes.btnOW + ' ' + classes.btnL}
                >
                  -
                </button>
                <input
                  type="number"
                  name="amount"
                  id={"amount" + item.id}
                  className={classes.inputOW}
                  value={item.amount}
                  onChange={(e) => handleChange(e, item)}
                />
                <button
                  type="button"
                  onClick={() => {
                    cart.increment(item.id);
                    setTotalPrice((c) => Number((c + item.price).toFixed(2)));
                  }}
                  className={classes.btnOW + " " + classes.btnR}
                >
                  +
                </button>
              </div>
              <div className={classes.removeBtnDiv}>
                <p>Price: {item.totalPrice}€</p>
                <button
                  type="button"
                  onClick={() => {
                    cart.removeFromCart(item.id);
                    setTotalPrice((c) =>
                      Number((c - item.totalPrice).toFixed(2))
                    );
                  }}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {cart.cart.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <div>Total Price: {totalPrice}€</div>
          <button type="button" onClick={() => cart.clearCart()}>
            Pay Now!
          </button>
        </>
      )}
    </div>
  );
}

export default CheckOut;
