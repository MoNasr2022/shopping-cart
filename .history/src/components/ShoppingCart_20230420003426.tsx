import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";




export function ShoppingCart() {
    const { closeCart, cartOpen, cartItems } = useShoppingCart();

    return (
      <Offcanvas show={cartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </Stack>
                <div className="ms-auto fw-bold fs-5">
                    Total:{formatCurrency(cartItems.reduce((total, item) => total + item.price * item.quantity, 0))}
                </div>
            </Offcanvas.Body>
      </Offcanvas>
    );

}