import { useContext } from "react";


const ShoppingCartContext = createContext<ShoppingCartContextType | null>({})

export function useShoppingCart() {
    return  useContext(ShoppingCartContext)
}