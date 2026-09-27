import { Container } from "react-bootstrap";

function FooterComponent() {
  return (
    <footer className="text-white pt-4 pb-3" style={{ backgroundColor: "var(--color-navy)" }}>
      <Container className="d-flex flex-column flex-lg-row justify-content-lg-between align-items-center text-center text-lg-start gap-3">
        <a href="/" className="link-light text-decoration-none d-flex align-items-center gap-2 fw-bold fs-5">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 11l9-8 9 8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 10v10h14V10" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Alquidar
        </a>

        <nav className="d-flex flex-wrap justify-content-center gap-3">
          <a href="#inicio" className="link-light text-decoration-none ">Inicio</a>
          <a href="#que-ofrecemos" className="link-light text-decoration-none ">Qué ofrecemos</a>
          <a href="#nosotros" className="link-light text-decoration-none ">Nosotros</a>
          <a href="#precios" className="link-light text-decoration-none ">Precios</a>
          <a href="#contacto" className="link-light text-decoration-none ">Contacto</a>
        </nav>

        <div className="d-flex gap-2">
          <a href="#" aria-label="Instagram" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-light p-2 link-light text-decoration-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
          </a>

          <a href="#" aria-label="Twitter / X" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-light p-2 link-light text-decoration-none">
            <svg width="14" height="14" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path d="M4 4l16 16M20 4L4 20" />
            </svg>
          </a>

          <a href="#" aria-label="LinkedIn" className="d-inline-flex align-items-center justify-content-center rounded-circle border border-light p-2 link-light text-decoration-none">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none">
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
              <path d="M10 9h4v2c1-1.5 2.5-2 4-2 3 0 5 2 5 5.5V21h-4v-6c0-1.5-.5-2.5-2-2.5s-2.5 1-2.5 2.5V21h-4z" />
            </svg>
          </a>
        </div>
      </Container>

      <p className="text-center text-white-50 small mb-0 mt-3 pt-3 border-top border-light border-opacity-25">
        © {new Date().getFullYear()} Alquidar. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default FooterComponent;