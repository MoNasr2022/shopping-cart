import { createContext, useContext } from "react";

type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type ShoppingCartContext = {
    getItemQuantity: (id: number) => number;

    
}


const ShoppingCartContext = createContext({})

export function useShoppingCart() {
    return  useContext(ShoppingCartContext)
}



export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
    return (
        <ShoppingCartContext.Provider value={{}}>
            {children}
        </ShoppingCartContext.Provider>
    )
 }
