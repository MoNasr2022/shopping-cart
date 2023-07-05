import { Offcanvas, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";




export function ShoppingCart() {
    const { closeCart, cartOpen } = useShoppingCart();

    return (
      <Offcanvas show={cartOpen} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <p>Some text as placeholder. In real life you can have the elements you have chosen</p>
            </Offcanvas.Body>
      </Offcanvas>
    );

}