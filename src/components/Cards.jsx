import { useState } from "react";
import classes from '../css/Card.module.css'

function Cards({ props, cart }) {
  const [isAdded, setIsAdded] = useState(cart.checkCart(props.id));

  function handleChange() {
    setIsAdded(!isAdded);
    if (isAdded) {
      cart.removeFromCart(props.id);
    } else {
      cart.addToCart(props, 1);
    }
  }
  return (
    <div className={classes.card}>
      <div>{props.title}</div>
      <div>{props.price}€</div>
      <button type="button" onClick={handleChange}>
        {isAdded ? "Remove" : "Add"}
      </button>

    </div>
  );
}

export default Cards;
