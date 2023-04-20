import { createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type ShoppingCartContext = {
    openCart:() => void;
    closeCart:() => void;
    getItemQuantity: (id: number) => number;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    removeFromCart: (id: number) => void;
    cartQuantity: number;
    cartItems: CartItem[];
}

type CartItem = {
    id: number;
    quantity: number;
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return  useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.reduce((total, item) => total + item.quantity, 0)

    const getItemQuantity = (id: number) => {
        const cartItem = cartItems.find(item => item.id === id)
        return cartItem?.quantity || 0
    }
    const addItem = (id: number) => {
        const newCartItems = [...cartItems]
        const cartItem = newCartItems.find(item => item.id === id)
        if (cartItem) {
            cartItem.quantity++
        } else {
            newCartItems.push({ id, quantity: 1})
        }
        setCartItems(newCartItems)
    }
    const removeItem = (id: number) => {
        const newCartItems = [...cartItems]
        const cartItem = newCartItems.find(item => item.id === id)
        if (cartItem) {
            cartItem.quantity--
        } else {
            newCartItems.push({ id, quantity: 1})
        }
        setCartItems(newCartItems)
    }
    const removeFromCart = (id: number) => {
        const newCartItems = cartItems.filter(item => item.id !== id)
        setCartItems(newCartItems)
     }

    
    
    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            addItem,
            removeItem,
            removeFromCart
            cartQuantity,
            cartItems
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }
