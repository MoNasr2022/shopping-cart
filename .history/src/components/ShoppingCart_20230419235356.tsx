import { Offcanvas, OffcanvasTitle } from "react-bootstrap";




export function ShoppingCart() {
    const {cartClose} = useShoppingCart()

    return (
      <Offcanvas show={true} onHide={cartClose} placement="end">
        <Offcanvas.Header closeButton>
          <OffcanvasTitle>Cart</OffcanvasTitle>
        </Offcanvas.Header>
      </Offcanvas>
    );

}