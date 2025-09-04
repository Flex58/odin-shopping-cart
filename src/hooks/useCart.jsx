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

  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return { checkCart, addToCart, removeFromCart, cart };
}
export default useCart;
