import { createContext, useContext } from "react";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;
    addItem: (id: number) => void;
    removeItem: (id: number) => void;
    removeFromCart: (id: number) => void;
}


const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
    return  useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {

    usesta


    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }
