import { useOutletContext } from "react-router-dom";

function Cart() {
  const cart = useOutletContext();
  function handleChange(e, item) {
    if (e.target.value <= 0 || undefined) {
      return;
    } else {
      cart.addToCart(item, e.target.value);
    }
  }
  return (
    <div>
      {cart.cart.map((item) => (
        <div key={item.id}>
          <div>{item.title}</div>
          <div>{item.totalPrice}€</div>
          <button type="button" onClick={() => cart.decrement(item.id)} disabled={item.amount <= 1 ? true : false}>
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
      ))}
    </div>
  );
}

export default Cart;
