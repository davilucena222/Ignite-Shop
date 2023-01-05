import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: number;
  description: string;
  defaultPriceId: string;
}

interface CartContextProps {
  cartItems: Product[];
  totalPrice: number;
  addingProductToCart: (product: Product) => void;
  checkIfProductAlreadyExistsInTheCart: (productId: string) => boolean;
  removeProductFromCart: (productId: string) => void;
}

interface CartContextProvideProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProvideProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const totalPrice = cartItems.reduce((total, product) => {
    return total + product.numberPrice;
  }, 0);

  function addingProductToCart(product: Product) {
    setCartItems((state) => [...state, product]);
  }

  function removeProductFromCart(productId: string) {
    setCartItems((state) => state.filter((product) => product.id !== productId));
  }

  function checkIfProductAlreadyExistsInTheCart(productId: string) {
    return cartItems.some((product: Product) => productId === product.id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addingProductToCart, removeProductFromCart, checkIfProductAlreadyExistsInTheCart, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}