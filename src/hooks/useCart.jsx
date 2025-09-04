import { useEffect, useState } from "react";

function useCart() {
  const [cart, setCart] = useState(() => {
    const stored = sessionStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  });

  function checkCart(id) {
    return cart.some((item) => item.id === id);
  }

  function addToCart(product, amount) {
    if (checkCart(product.id)) {
      //if in cart change amount
      setCart(
        cart.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              amount: amount,
              totalPrice: amount * product.price,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      //if not in cart add new item
      setCart([
        ...cart,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          desc: product.description,
          image: product.image,
          amount: amount,
          totalPrice: amount * product.price,
        },
      ]);
    }
  }

  function removeFromCart(id) {
    setCart(
      cart.filter((item) => {
        if (item.id !== id) {
          return item;
        }
      })
    );
  }

  function increment(id) {
    const item = cart.find((item) => item.id === id);
    addToCart(item, item.amount + 1);
  }

  function decrement(id) {
    const item = cart.find((item) => item.id === id);
    if (item.amount - 1 <= 0) {
      return;
    }
    addToCart(item, item.amount - 1);
  }

  function clearCart() {
    setCart([]);
  }

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return {
    checkCart,
    addToCart,
    removeFromCart,
    increment,
    decrement,
    clearCart,
    cart,
  };
}
export default useCart;
