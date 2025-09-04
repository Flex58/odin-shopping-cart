import { useState } from "react";
import { useOutletContext } from "react-router-dom";

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
      setTotalPrice(
        (c) => c - item.totalPrice + item.price * parseInt(e.target.value, 10)
      );
    }
  }
  return (
    <div>
      {cart.cart.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image} alt={"image of " + item.title} />
            <div>{item.title}</div>
            <div>{item.desc}</div>

            <button
              type="button"
              onClick={() => {
                cart.decrement(item.id);
                setTotalPrice((c) => c - item.price);
              }}
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
            <button
              type="button"
              onClick={() => {
                cart.increment(item.id);
                setTotalPrice((c) => c + item.price);
              }}
            >
              +
            </button>
            <div>{item.totalPrice}€</div>
          </div>
        );
      })}
      {cart.cart.length === 0 ? (
        <div>Cart is Empty</div>
      ) : (
        <>
          <div>Total Price: {totalPrice}€</div>
          <button type="button" onClick={() => cart.clearCart()}>Pay Now!</button>
        </>
      )}
    </div>
  );
}

export default CheckOut;
