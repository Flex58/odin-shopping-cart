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
        <div key={(item.id)}>
          <div>{item.title}</div>
          <div>{item.totalPrice}€</div>
          <input
            type="number"
            name="amount"
            id={"amount" + item.id}
            value={item.amount}
            onChange={(e) => handleChange(e, item)}
              />
        </div>
      ))}
    </div>
  );
}

export default Cart;
