import { useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../img/logo-alquidar.jpg";

function NavbarComponent() {
  const [active, setActive] = useState("inicio");

  return (
    <Navbar expand="lg" sticky="top" className="shadow-sm py-2" style={{ backgroundColor: "var(--color-background)" }}>
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Alquidar"
            className="rounded-circle"
            style={{ height: "clamp(2.5rem, 6vw, 3.25rem)", width: "clamp(2.5rem, 6vw, 3.25rem)", objectFit: "contain" }}
          />
          <span className="fs-3 fw-bold" style={{ color: "var(--color-navy)" }}>Alquidar</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar" className="gap-2 gap-lg-3 align-items-lg-center">
          <Nav className="mx-auto gap-2 gap-lg-3 my-3 my-lg-0" style={{ "--bs-nav-link-color": "var(--color-navy)" }}>
            <Nav.Link href="#inicio" onClick={() => setActive("inicio")} className="text-nowrap fs-5" style={active === "inicio" ? { borderTop: "2px solid var(--color-navy)", borderBottom: "2px solid var(--color-navy)" } : {}}>Inicio</Nav.Link>
            <Nav.Link href="#que-ofrecemos" onClick={() => setActive("que-ofrecemos")} className="text-nowrap fs-5" style={active === "que-ofrecemos" ? { borderTop: "2px solid var(--color-navy)", borderBottom: "2px solid var(--color-navy)" } : {}}>Qué ofrecemos</Nav.Link>
            <Nav.Link href="#nosotros" onClick={() => setActive("nosotros")} className="text-nowrap fs-5" style={active === "nosotros" ? { borderTop: "2px solid var(--color-navy)", borderBottom: "2px solid var(--color-navy)" } : {}}>Nosotros</Nav.Link>
            <Nav.Link href="#precios" onClick={() => setActive("precios")} className="text-nowrap fs-5" style={active === "precios" ? { borderTop: "2px solid var(--color-navy)", borderBottom: "2px solid var(--color-navy)" } : {}}>Precios</Nav.Link>
          </Nav>

          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center gap-2">
            <Button variant={null} className="btn-outline-alquidar text-nowrap">Iniciar sesión</Button>
            <Button variant={null} className="btn-alquidar text-nowrap">Registrarse</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;gi