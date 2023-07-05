import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";

type CartItemProps = {
    id: number;
    quantity: number;
}

const CartItem = ({ id, quantity }: CartItemProps) => {

    const { getItemQuantity, addItem, removeItem, removeFromCart } = useShoppingCart()
    const item = storeItems.find(item => item.id === id)
    if (item ==null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
          <img src={item.imgUrl} alt={item.name} width={125} height={75} style={{ objectFit: "cover" }} />
          <div className="me-auto">
              <div >
                  {item.name}  {quantity > 0 && <span className="text-muted" style={{fon}}>{quantity}x</span>}
                  
              </div>
                <span className="fs-4">{item.price}</span>
          </div>
          
    </Stack>
  );
}

export default CartItem
