import { Link } from "react-router-dom";
import { Navbar as BootstrapNavBar, Nav, Container } from "react-bootstrap";
import { RUTAS } from "../routes.js";

function Navbar() {
  return (
    <>
      <style>{`
        .navbar-senati {
          background-color: #0a2d5e;
          transition: background-color 0.3s ease;
        }
        .logo-senati {
          height: 40px;
          transition: transform 0.3s ease;
        }
        .brand-senati:hover .logo-senati {
          transform: scale(1.05);
        }
        .nav-link-senati {
          color: #ffffff !important;
          margin-left: 15px;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link-senati:hover {
          color: #00b4ff !important;
        }
        .nav-link-senati::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          left: 0;
          bottom: -5px;
          background-color: #00b4ff;
          transition: width 0.3s ease;
        }
        .nav-link-senati:hover::after {
          width: 100%;
        }
      `}</style>

      <BootstrapNavBar expand="lg" className="navbar-senati shadow-sm" fixed="top">
        <Container>
          <BootstrapNavBar.Brand
            as={Link}
            to={RUTAS.INICIO}
            className="d-flex align-items-center brand-senati"
          >
            <img
              src="https://campusonline.senati.edu.pe/assets/images/logo-horizontal-blanco-web.fw-455x128.png"
              alt="Logo SENATI"
              className="logo-senati me-2"
            />
          </BootstrapNavBar.Brand>

          <BootstrapNavBar.Toggle aria-controls="basic-navbar-nav" />
          <BootstrapNavBar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={RUTAS.INICIO} className="fw-medium nav-link-senati">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to={RUTAS.ABOUT} className="fw-medium nav-link-senati">
                Acerca de
              </Nav.Link>
              <Nav.Link as={Link} to={RUTAS.CONTACTO} className="fw-medium nav-link-senati">
                Contáctanos
              </Nav.Link>
              <Nav.Link as={Link} to={RUTAS.CARRERAS} className="fw-medium nav-link-senati">
                Carreras
              </Nav.Link>
            </Nav>
          </BootstrapNavBar.Collapse>
        </Container>
      </BootstrapNavBar>
    </>
  );
}

export default Navbar;
