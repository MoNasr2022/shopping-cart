import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";




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
                        <
                    ))}

                </Stack>
            </Offcanvas.Body>
      </Offcanvas>
    );

}