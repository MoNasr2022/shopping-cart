import { Offcanvas, OffcanvasTitle } from "react-bootstrap";

export function ShoppingCart() {
    return (
      <Offcanvas show={true} placement="">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}