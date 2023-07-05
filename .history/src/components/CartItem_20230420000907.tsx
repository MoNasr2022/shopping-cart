import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
    id: number;
    quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const { getItemQuantity, addItem, removeItem, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
  return (
    <div>
      
    </div>
  )
}

export default CartItem
