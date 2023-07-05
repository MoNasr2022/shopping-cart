import { Offcanvas, OffcanvasTitle } from "react-bootstrap";

export function ShoppingCart() {
    return (
      <Offcanvas show={true} onhide placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}