import { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import {
  FaUserGraduate,
  FaLaptopCode,
  FaIndustry,
  FaGlobe,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";

const menuItems = [
  { href: "#nosotros", label: "Nosotros", icon: <FaUserGraduate /> },
  { href: "#alianzas", label: "Alianzas", icon: <FaLaptopCode /> },
  { href: "#convenios", label: "Convenios", icon: <FaIndustry /> },
  { href: "#programas", label: "Programas", icon: <FaGlobe /> },
  { href: "#servicios", label: "Servicios", icon: <FaUtensils /> },
  { href: "#sedes", label: "Sedes", icon: <FaChevronRight /> },
];

function About() {
  const [hoveredCard, setHoveredCard] = useState(null);


  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardStyle = (cardId) => ({
    transform: hoveredCard === cardId ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: hoveredCard === cardId
      ? '0 8px 20px rgba(0, 0, 0, 0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%'
  });



  return (
    <div style={{ background: "linear-gradient(135deg, #0a1931 0%, #1e3c72 100%)", minHeight: '100vh', paddingTop: '130px', paddingBottom: '40px' }}>
      <Container>
        {/* Sección Hero */}
        <Row className="mb-5">
          <Col>
            <Card className="text-center" style={{ background: 'rgba(255, 255, 255, 0.95)', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}>
              <Card.Body className="py-5">
                <h1 className="display-5 fw-bold mb-1 " style={{ color: '#2c3e50' }}>
                  SOBRE
                </h1>
                <h1 className="display-4 fw-bold mt-1" style={{ color: '#48d6ff' }}>
                  NOSOTROS
                </h1>
                <p className="lead text-muted mb-4">
                  Servicio Nacional de Adiestramiento en Trabajo Industrial
                </p>
                <p className="text-secondary px-4">
                  SENATI es una institución creada a iniciativa de la Sociedad Nacional de Industrias, con el objetivo de proporcionar formación y capacitación profesional en actividades industriales y también para labores en instalaciones, reparaciones y mantenimiento para cualquier otra actividad económica.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <section className="fondo_plomo">
          <div className="container-fluid p-0 mb-5">
            <div className="row g-0 text-center">
              {menuItems.map((item, index) => (
                <div className="col-2" key={index}>
                  <a
                    href={item.href}
                    className="d-flex flex-column align-items-center justify-content-center border border-secondary bg-white p-4 text-decoration-none"
                  >
                    <div style={{ fontSize: "35px", color: "#00aaff" }}>
                      {item.icon}
                    </div>
                    <span className="fw-bold text-dark mt-2">{item.label}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección Misión y Visión */}
        <Row className="mb-5">
          <Col md={6} className="mb-4 mb-md-0">
            <Card
              style={getCardStyle('mision')}
              onMouseEnter={() => handleMouseEnter('mision')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <div style={{
                    fontSize: '3rem',
                    color: '#667eea',
                    marginBottom: '15px'
                  }}>


                  </div>
                  <h3 className="fw-bold" style={{ color: '#1a46e8' }}>Nuestra misión</h3>
                </div>
                <p className="text-secondary">
                  Formar profesionales técnicos innovadores y altamente productivos.
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card
              style={getCardStyle('vision')}
              onMouseEnter={() => handleMouseEnter('vision')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="p-4">
                <div className="text-center mb-3">
                  <div style={{
                    fontSize: '3rem',
                    color: '#764ba2',
                    marginBottom: '15px'
                  }}>


                  </div>
                  <h3 className="fw-bold" style={{ color: '#1a46e8' }}>Nuestra visión</h3>
                </div>
                <p className="text-secondary">
                  Liderar en América Latina la excelencia en formación profesional tecnológica.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección Valores */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center text-white fw-bold mb-4">Nuestros Valores</h2>
          </Col>
        </Row>

        <Row className="mb-5">
          <Col lg={3} md={6} className="mb-4">
            <Card
              style={getCardStyle('valor1')}
              onMouseEnter={() => handleMouseEnter('valor1')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💪</div>
                <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Excelencia</h5>
                <p className="text-secondary small">
                  Buscamos la mejora continua en todos nuestros procesos formativos
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <Card
              style={getCardStyle('valor2')}
              onMouseEnter={() => handleMouseEnter('valor2')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>🤝</div>
                <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Compromiso</h5>
                <p className="text-secondary small">
                  Dedicación total con el desarrollo de nuestros estudiantes
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <Card
              style={getCardStyle('valor3')}
              onMouseEnter={() => handleMouseEnter('valor3')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>💡</div>
                <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Innovación</h5>
                <p className="text-secondary small">
                  Incorporamos tecnología de punta en la formación técnica
                </p>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={3} md={6} className="mb-4">
            <Card
              style={getCardStyle('valor4')}
              onMouseEnter={() => handleMouseEnter('valor4')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="text-center p-4">
                <div style={{ fontSize: '2.5rem', marginBottom: '15px' }}>✨</div>
                <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Calidad</h5>
                <p className="text-secondary small">
                  Garantizamos estándares internacionales en nuestra educación
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Sección Historia */}
        <Row>
          <Col>
            <Card
              style={getCardStyle('historia')}
              onMouseEnter={() => handleMouseEnter('historia')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="p-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>
                  Nuestra Historia
                </h3>
                <Row>
                  <Col md={6} className="mb-3 mb-md-0">
                    <p className="text-secondary">
                      SENATI fue creado el 17 de diciembre de 1961 mediante Ley N° 13771,
                      con el objetivo de proporcionar formación y capacitación profesional
                      para trabajadores de la actividad industrial manufacturera y de las
                      labores de instalación, reparación y mantenimiento.
                    </p>
                    <p className="text-secondary">
                      Desde su fundación, SENATI ha sido pionero en la implementación de
                      metodologías de enseñanza dual, que combina la teoría en aulas con
                      la práctica en talleres equipados con tecnología de última generación.
                    </p>
                  </Col>
                  <Col md={6}>
                    <p className="text-secondary">
                      Con presencia en todo el territorio nacional, contamos con más de 40
                      sedes y Centros de Formación Profesional (CFP), donde atendemos a miles
                      de estudiantes cada año.
                    </p>
                    <p className="text-secondary mb-0">
                      Nuestros egresados son altamente valorados por el sector empresarial,
                      logrando tasas de empleabilidad superiores al 95%, lo que nos consolida
                      como la primera opción en formación técnica profesional en el Perú.
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;