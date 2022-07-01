import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const cartHasProduct = cart.find((prod) => prod.id === product.id);

    if (!cartHasProduct) {
      setCart([...cart, { ...product, qtd: 1 }]);

      localStorage.setItem("@KenzieShopCart", JSON.stringify(cart));
    } else {
      const newCart = cart.filter(
        (cartProduct) => cartProduct.id !== product.id
      );
      cartHasProduct.qtd++;
      newCart.unshift(cartHasProduct);
      setCart(newCart);
      localStorage.setItem("@KenzieShopCart", JSON.stringify(newCart));
    }
  };

  const removeProductFromCart = (id) => {
    const prodId = cart.find((prod) => prod.id === id);

    if (prodId.qtd > 1) {
      const list = JSON.parse(localStorage.getItem("@KenzieShopCart"));
      list.forEach((prod) => {
        if (prod.id === prodId.id) {
          prod.qtd--;
        }
      });
      localStorage.setItem("@KenzieShopCart", JSON.stringify(list));
      setCart(list);
    } else {
      const newlist = cart.filter((product) => product.id !== id);
      localStorage.setItem("@KenzieShopCart", JSON.stringify(newlist));
      setCart(newlist);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeProductFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
