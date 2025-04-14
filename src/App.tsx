import { Guitars } from "./data/Guitars.ts";
import { useEffect, useState } from "react";
import { Header, Guitar } from "./components";
import { GuitarI } from "./model/guitar.model.ts";

function App() {
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

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar key={guitar.id} guitar={guitar} addToCart={addToCart} />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
