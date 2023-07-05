import { Offcanvas, OffcanvasTitle } from "react-bootstrap";




export function ShoppingCart() {

    
    return (
      <Offcanvas show={true} onHide={cartClose} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}