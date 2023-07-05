import { Offcanvas, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";




export function ShoppingCart() {
    const { closeCart, cartOpen } = useShoppingCart();

    return (
      <Offcanvas show={cartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack ga>

                </Stack>
            </Offcanvas.Body>
      </Offcanvas>
    );

}