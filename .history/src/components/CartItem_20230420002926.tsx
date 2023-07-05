import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: CartItemProps) => {
  const { getItemQuantity, addItem, removeItem, removeFromCart } =
    useShoppingCart();
  const item = storeItems.find((item) => item.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt={item.name}
        width={125}
        height={75}
        style={{ objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 0 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {" "}
          {formatCurrency(item.price)}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center">
        {formatCurrency(item.price * quantity)}
          </div>
          <Button variant="outline-danger" size=""></Button>
    </Stack>
  );
};

export default CartItem;
