import { Offcanvas, OffcanvasTitle } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";




export function ShoppingCart() {
    const { closeCart } = useShoppingCart();

    return (
      <Offcanvas show={true} onHide={closeCart} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}