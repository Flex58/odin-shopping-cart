import { useOutletContext } from "react-router-dom";
import classes from "../css/Cart.module.css";

function Cart() {
  const cart = useOutletContext();
  function handleChange(e, item) {
    if (e.target.value <= 0 || undefined) {
      return;
    } else {
      cart.addToCart(item, parseInt(e.target.value, 10));
    }
  }
  return (
    <div className={classes.cart}>
      {cart.cart.map((item) => (
        <div key={item.id} className={classes.item}>
          <div>{item.title}</div>
          <div>{item.totalPrice}€</div>
          <div className={classes.input}>
            <button
              type="button"
              onClick={() => cart.decrement(item.id)}
              disabled={item.amount <= 1 ? true : false}
            >
              -
            </button>
            <input
              type="number"
              name="amount"
              id={"amount" + item.id}
              value={item.amount}
              onChange={(e) => handleChange(e, item)}
            />
            <button type="button" onClick={() => cart.increment(item.id)}>
              +
            </button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Cart;
