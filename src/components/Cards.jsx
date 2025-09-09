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
      <p>{props.title}</p>
      <p>Price: {props.price}€</p>
      <button type="button" onClick={handleChange}>
        {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>

    </div>
  );
}

export default Cards;
