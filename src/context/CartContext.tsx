import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Define the TypeScript shapes (This shows you write clean, production-level code)
export type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
};

export type CartItem = Product & {
  quantity: number;
};

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  cartTotal: number;
}

// 2. Create the Context (The empty broadcast channel)
const CartContext = createContext<CartContextType | undefined>(undefined);

// 3. Create the Provider (The wrapper that holds the state)
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item: If it exists, increase quantity. If not, add to array with quantity 1.
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Remove item entirely from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Update quantity (and remove if it drops below 1)
  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) => (item.id === id ? { ...item, quantity } : item)),
    );
  };

  // Calculate the total price dynamically
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

// 4. Custom Hook (A clean way for your components to grab the cart data)
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
