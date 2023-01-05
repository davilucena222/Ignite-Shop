import { createContext, ReactNode, useState } from "react";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  numberPrice: string;
  description: string;
  defaultPrice: string;
}

interface CartContextProps {
  cartItems: Product[];
  addingProductToCart: (product: Product) => void;
  checkIfProductAlreadyExistsInTheCart: (productId: string) => boolean;
}

interface CartContextProvideProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextProps);

export function CartContextProvider({ children }: CartContextProvideProps) {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  console.log(cartItems)

  function addingProductToCart(product: Product) {
    setCartItems((state) => [...state, product]);
  }

  function checkIfProductAlreadyExistsInTheCart(productId: string) {
    return cartItems.some((product: Product) => productId === product.id);
  }

  return (
    <CartContext.Provider value={{ cartItems, addingProductToCart, checkIfProductAlreadyExistsInTheCart }}>
      {children}
    </CartContext.Provider>
  )
}