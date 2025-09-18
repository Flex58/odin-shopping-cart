import classes from "../css/CheckOut.module.css";
import input from "../css/Cart.module.css";
import { useEffect, useRef, useState } from "react";

function CheckOutItem({ item, cart, handleChange, tPInc, tPDec, tPRemove }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const ref = useRef(0);

  useEffect(() => {
    if (isExpanded) {
      const sHeight = ref.current.scrollHeight;
      ref.current.style.maxHeight = sHeight + "px";
    } else {
      ref.current.style.maxHeight = "0px";
    }
  }, [isExpanded]);

  return (
    <div key={item.id} className={classes.item}>
      <img src={item.image} alt={"image of " + item.title} />
      <h2>{item.title}</h2>

      <button
        className={classes.description}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h3>Description</h3>
        <hr />
      </button>
      <p className={classes.collapse} ref={ref}>
        {item.desc}
      </p>

      <div className={input.input}>
        <button
          type="button"
          onClick={() => {
            cart.decrement(item.id);
            tPDec(item);
          }}
          disabled={item.amount <= 1 ? true : false}
          className={classes.btnOW + " " + classes.btnL}
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
            tPInc(item);
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
            tPRemove(item);
          }}
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
}

export default CheckOutItem;
