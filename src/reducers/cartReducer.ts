import { Guitars } from "../data/Guitars";
import { CartItem, GuitarI } from "../model/guitar.model";

export type CartActions =
  | {
      type: "add-to-cart";
      payload: { item: GuitarI };
    }
  | {
      type: "remove-from-cart";
      payload: { id: GuitarI["id"] };
    }
  | {
      type: "decrease-quantity";
      payload: { id: GuitarI["id"] };
    }
  | {
      type: "increase-quantity";
      payload: { id: GuitarI["id"] };
    }
  | {
      type: "clear-cart";
    };

export type CartState = {
  data: GuitarI[];
  cart: CartItem[];
};

const initialCart = (): Array<CartItem> => {
  const localStorageCart = localStorage.getItem("cart");
  return localStorageCart ? JSON.parse(localStorageCart) : [];
};

export const initialState: CartState = {
  data: Guitars,
  cart: initialCart(),
};

const MIN_ITEM = 0;
const MAX_ITEM = 5;

export const cartReducer = (
  state: CartState = initialState,
  actions: CartActions,
) => {
  if (actions.type === "add-to-cart") {
    const itemExists = state.cart.find(
      (item) => item.id === actions.payload.item.id,
    );

    let updatedCart: CartItem[] = [];

    if (itemExists) {
      updatedCart = state.cart.map((item) => {
        if (item.id === actions.payload.item.id) {
          if (item.quantity < MAX_ITEM) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        } else {
          return item;
        }
      });
    } else {
      const newItem: CartItem = { ...actions.payload.item, quantity: 1 };
      updatedCart = [...state.cart, newItem];
    }

    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "remove-from-cart") {
    const updatedCart = state.cart.filter(
      (item) => item.id !== actions.payload.id,
    );
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "increase-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === actions.payload.id && item.quantity! < MAX_ITEM) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type === "decrease-quantity") {
    const updatedCart = state.cart.map((item) => {
      if (item.id === actions.payload.id && item.quantity! > MIN_ITEM) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      } else {
        return item;
      }
    });
    return {
      ...state,
      cart: updatedCart,
    };
  }

  if (actions.type == "clear-cart") {
    return {
      ...state,
      cart: [],
    };
  }
  return state;
};
