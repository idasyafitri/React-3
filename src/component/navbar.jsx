import {Navbar, Nav, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";

const Navs = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <NavLink to="/" className="navbar-brand">
          Google
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* YANG BERUBAH ITU DARI SINI YA */}
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/list" className="nav-link">
              List
            </NavLink>
            <NavLink to="/form" className="nav-link">
              Form
            </NavLink>
            {/*  */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;