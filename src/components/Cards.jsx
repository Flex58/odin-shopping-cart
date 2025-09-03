import { useState } from "react";

function Cards({ props, cart }) {
  const [isAdded, setIsAdded] = useState(false);

  function handleChange() {
    setIsAdded(true);
    cart.addToCart(props, 1);
  }
  return (
    <div>
      <div>{props.title}</div>
      <div>{props.price}</div>
      {isAdded ? (
        <button type="button" onClick={handleChange}>
          Remove
        </button>
      ) : (
        <button type="button" onClick={handleChange}>
          Add
        </button>
      )}

      <hr />
    </div>
  );
}

export default Cards;
