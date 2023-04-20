import { createContext, useContext, useState } from "react";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    removeFromCart: (id: number) => void;
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

    const[cartItems, setCartItems]  =useState<CartItem[]>([])
    const getItemQuantity = (id: number) => { 
        const cartItem = cartItems.find(item => item.id === id)
        return cartItem?.quantity ?? 0
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

    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }
