import { Offcanvas, OffcanvasTitle } from "react-bootstrap";

export function ShoppingCart() {
    return (
      <Offcanvas open {}>
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}