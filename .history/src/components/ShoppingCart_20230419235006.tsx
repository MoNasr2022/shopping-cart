import { Offcanvas, OffcanvasTitle } from "react-bootstrap";

export function ShoppingCart() {
    return (
        <Offcanvas>
            <Offcanvas.Header closeButton><OffcanvasTitle></OffcanvasTitle>Cart</Offcanvas.Header>
        </Offcanvas>
    )

}