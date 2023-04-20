import { Navbar as NavbarB } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";



export default function Navbar() {
  return (
    <NavbarB className="bg-white shadow-sm mb-3">
          <Container >
              <Nav className="me">
                  <Nav.Link as={NavLink} to="/" > Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/store" > Store</Nav.Link>
                  <Nav.Link as={NavLink} to="/about" > About</Nav.Link>

              </Nav>
              Hi
      </Container>
    </NavbarB>
  );
}
