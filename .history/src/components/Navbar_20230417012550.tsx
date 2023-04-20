import { Navbar as NavbarB } from "react-bootstrap";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";



export default function Navbar() {
  return (
    <NavbarB className="bg-white shadow-sm mb-3">
          <Container>
              <Nav>
                  <Nav.Link as={NavLink} to="/" > Home</Nav.Link>
                  <Nav.Link as={NavLink} to="/" > Store</Nav.Link>
                  <Nav.Link as={NavLink} to="/" > Home</Nav.Link>

              </Nav>
      </Container>
    </NavbarB>
  );
}
