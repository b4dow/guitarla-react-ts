import { useState, useEffect, useMemo } from "react";
import { Guitars } from "../data/Guitars";
import { GuitarI } from "../model/guitar.model";

export const useCart = () => {
  const initialCart = () => {
    const localStorageCart = localStorage.getItem("cart");
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  };

  const [data] = useState(Guitars);
  const [cart, setCart] = useState<Array<GuitarI>>(initialCart);

  const MAX_ITEM = 5;
  const MIN_ITEM = 0;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: GuitarI) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);

    if (itemExists >= 0) {
      if (cart[itemExists].quantity! >= MAX_ITEM) return;
      const updatedCart = [...cart];

      updatedCart[itemExists].quantity!++;

      setCart(updatedCart);
    } else {
      item.quantity = 1;

      setCart([...cart, item]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  };

  const increaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity! < MAX_ITEM) {
        return {
          ...item,
          quantity: item.quantity! + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const decreaseQuantity = (id: number) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id && item.quantity! > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity! - 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  // state derivado
  const isEmpty = useMemo(() => cart.length === 0, [cart]);

  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity! * item.price, 0),
    [cart],
  );

  return {
    data,
    cart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    isEmpty,
    cartTotal,
  };
};
