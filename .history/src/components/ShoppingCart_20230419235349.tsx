import { Offcanvas, OffcanvasTitle } from "react-bootstrap";




export function ShoppingCart() {
    const {cartC}

    return (
      <Offcanvas show={true} onHide={cartClose} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}