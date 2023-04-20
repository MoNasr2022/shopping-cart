import { useContext } from "react";


const ShoppingCartContext = createContext<ShoppingCartContextType | null>({null})

export function useShoppingCart() {
    return  useContext(ShoppingCartContext)
}