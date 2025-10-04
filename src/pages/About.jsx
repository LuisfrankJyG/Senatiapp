import { useState, useEffect, useRef } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import {
  FaUserGraduate,
  FaLaptopCode,
  FaIndustry,
  FaGlobe,
  FaUtensils,
  FaChevronRight,
  FaChevronUp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCogs,
  FaLink,
  FaLaptop,
  FaArrowsAltH,
  FaAtlas
} from "react-icons/fa";
import { carreras } from "../data/carreras";
import { servicios } from "../data/servicios";

const menuItems = [
  //{ href: "#hero", label: "Inicio", icon: <FaChevronUp /> },
  { href: "#nosotros", label: "Nosotros", icon: <FaUserGraduate /> },
  { href: "#alianzas", label: "Alianzas", icon: <FaArrowsAltH /> },
  { href: "#convenios", label: "Convenios", icon: <FaLink /> },
  { href: "#programas", label: "Programas", icon: <FaLaptop /> },
  { href: "#servicios", label: "Servicios", icon: <FaCogs /> },
  { href: "#sedes", label: "Sedes", icon: <FaChevronRight /> },
];

function About() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);
  const [showStickyMenu, setShowStickyMenu] = useState(false);
  const menuRef = useRef(null);
  const [activeSection, setActiveSection] = useState(null);
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Observe the original menu to toggle sticky secondary menu
  useEffect(() => {
    if (!menuRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setShowStickyMenu(!entry.isIntersecting);
        });
      },
      { root: null, threshold: 0 }
    );
    observer.observe(menuRef.current);
    return () => observer.disconnect();
  }, [menuRef.current]);

  // Observe page sections to determine which is active and highlight sticky menu
  useEffect(() => {
    const sectionIds = menuItems.map(m => m.href.replace('#', ''));
    const observers = [];

    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        });
      }, { root: null, threshold: 0.6 });
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleShowCareer = (career) => {
    // career can be an object or a key like 'programas-modal' — handle only objects
    if (typeof career === 'object' && career !== null) {
      setSelectedCareer(career);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCareer(null);
  };

  const getCardStyle = (cardId) => ({
    transform: hoveredCard === cardId ? 'translateY(-10px)' : 'translateY(0)',
    boxShadow: hoveredCard === cardId
      ? '0 8px 20px rgba(0, 0, 0, 0.2)'
      : '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    height: '100%',
    borderRadius: '12px',
    overflow: 'hidden'
  });

  // Sedes selector state
  const sedesList = [
    'Lima Norte', 'Lima Sur', 'Arequipa', 'Trujillo',
    'Chiclayo', 'Piura', 'Cusco', 'Huancayo'
  ];
  const [selectedSede, setSelectedSede] = useState('');
  const [filteredSedes, setFilteredSedes] = useState(sedesList);

  const handleBuscarSede = () => {
    if (!selectedSede) {
      setFilteredSedes(sedesList);
      return;
    }
    setFilteredSedes(sedesList.filter(s => s === selectedSede));
  };

  // Small offset for anchor navigation — set to 0 so content sits directly under the navbar
  const anchorStyle = { scrollMarginTop: '120px' };

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "linear-gradient(135deg, #0a1931 0%, #1e3c72 100%)", minHeight: '100vh', paddingTop: '0px', paddingBottom: '0px' }}>
      {/* Hero Section */}
      <div
        id="hero"
        className="w-100 position-relative"
        style={{
          height: '100vh',
          backgroundImage: 'url("https://blogconexion.senati.edu.pe/wp-content/uploads/2024/09/Ranking-Top-Brands-Peru-2024-01-scaled.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: 'rgba(10, 25, 49, 0.8)',
            top: 0,
            left: 0
          }}
        ></div>
        <div className="position-relative h-100 d-flex flex-column justify-content-center align-items-center text-center text-white px-3">
          <h1 className="display-2 fw-bold mb-0" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
            SENATI
          </h1>
          <p className="lead mb-4" style={{ maxWidth: '800px', textShadow: '0 2px 5px rgba(0,0,0,0.3)' }}>
            Formando profesionales técnicos innovadores y altamente productivos desde 1961
          </p>
          <div>
            <Button
              href="#nosotros"
              variant="primary"
              size="lg"
              className="me-3 px-4 py-2"
              style={{
                backgroundColor: '#00aaff',
                borderColor: '#00aaff',
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(0, 170, 255, 0.4)'
              }}
            >
              Conócenos
            </Button>
            <Button
              href="#programas"
              variant="outline-light"
              size="lg"
              className="px-4 py-2"
              style={{
                borderRadius: '30px',
                boxShadow: '0 4px 15px rgba(255, 255, 255, 0.1)'
              }}
            >
              Nuestros Programas
            </Button>
          </div>
        </div>
      </div>

      {/* Menu Navigation */}
      <section className="fondo_plomo py-2" ref={menuRef} style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
        <div className="container-fluid p-0">
          <div className="row g-0 text-center">
            {menuItems.map((item, index) => (
              <div className="col" key={index}>
                <a
                  href={item.href}
                  className={`d-flex flex-column align-items-center justify-content-center p-3 text-decoration-none`}
                  onMouseEnter={() => handleMouseEnter(`menu-${index}`)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transition: 'all 0.3s ease',
                    backgroundColor: hoveredCard === `menu-${index}` ? '#0a39e6' : 'transparent',
                    borderRadius: '8px',
                    margin: '5px'
                  }}
                >
                  <div style={{
                    fontSize: "24px",
                    color: hoveredCard === `menu-${index}` ? '#ffffff' : '#00aaff',
                    transition: 'all 0.3s ease'
                  }}>
                    {item.icon}
                  </div>
                  <span
                    className="fw-bold mt-1"
                    style={{
                      color: hoveredCard === `menu-${index}` ? '#ffffff' : '#212529',
                      transition: 'all 0.3s ease',
                      fontSize: '0.9rem'
                    }}
                  >
                    {item.label}
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección SOBRE NOSOTROS con fondo extendido */}
      <section
        id="nosotros"
        className="w-100 position-relative py-5"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          scrollMarginTop: '120px'
        }}
      >
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundColor: 'rgba(10, 57, 230, 0.85)',
            top: 0,
            left: 0
          }}
        ></div>
        <Container className="position-relative py-5">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center text-white mb-5">
              <h1 className="display-3 fw-bold mb-1" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                SOBRE NOSOTROS
              </h1>
              <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
              <p className="lead mb-0" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                Servicio Nacional de Adiestramiento en Trabajo Industrial
              </p>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col lg={10}>
              <Card className="border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                <Card.Body className="p-5">
                  <Row>
                    <Col md={6} className="mb-4 mb-md-0">
                      <h3 className="fw-bold mb-4" style={{ color: '#0a39e6' }}>Nuestra Historia</h3>
                      <p className="text-secondary">
                        SENATI es una institución creada a iniciativa de la Sociedad Nacional de Industrias, con el objetivo de proporcionar formación y capacitación profesional en actividades industriales y también para labores en instalaciones, reparaciones y mantenimiento para cualquier otra actividad económica.
                      </p>
                      <p className="text-secondary">
                        Desde su fundación en 1961, SENATI ha sido pionero en la implementación de metodologías de enseñanza dual, que combina la teoría en aulas con la práctica en talleres equipados con tecnología de última generación.
                      </p>
                    </Col>
                    <Col md={6}>
                      <h3 className="fw-bold mb-4" style={{ color: '#0a39e6' }}>Nuestra Misión</h3>
                      <p className="text-secondary mb-4">
                        Formar profesionales técnicos innovadores y altamente productivos.
                      </p>
                      <h3 className="fw-bold mb-4" style={{ color: '#0a39e6' }}>Nuestra Visión</h3>
                      <p className="text-secondary">
                        Liderar en América Latina la excelencia en formación profesional tecnológica.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Sticky secondary menu that appears under the navbar when the original menu scrolls out */}
      {showStickyMenu && (
        <div style={{ position: 'fixed', top: (document && document.querySelector('.navbar') ? Math.ceil(document.querySelector('.navbar').getBoundingClientRect().height) : 0), left: 0, right: 0, zIndex: 1050, background: 'white', boxShadow: '0 4px 12px rgba(0,0,0,0.08)' }}>
          <div className="container">
            <div className="d-flex align-items-center justify-content-center py-2">
              <a onClick={scrollToTop} className="d-flex align-items-center text-decoration-none mx-3" style={{ color: '#0a1931', cursor: 'pointer' }}>
                <span style={{ fontSize: '20px', color: '#00aaff', marginRight: '8px' }}><FaChevronUp /></span>
                <span className="fw-bold">Inicio</span>
              </a>
              {menuItems.map((item, idx) => (
                <a key={idx} href={item.href} className="d-flex align-items-center text-decoration-none mx-3" style={{ color: '#0a1931' }}>
                  <span style={{ fontSize: '20px', color: '#00aaff', marginRight: '8px' }}>{item.icon}</span>
                  <span className="fw-bold">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <Container>

        {/* Sección Alianzas */}
        <section
          id="alianzas"
          className="w-100 position-relative py-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            scrollMarginTop: '120px',
            marginTop: '80px'
          }}
        >
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: 'rgba(10, 25, 49, 0.85)',
              backdropFilter: 'blur(10px)',
              top: 0,
              left: 0
            }}
          ></div>
          <Container className="position-relative py-5">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center text-white mb-5">
                <h1 className="display-3 fw-bold mb-1" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                  ALIANZAS
                </h1>
                <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
                <p className="lead mb-0" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                  Alianzas estratégicas con empresas globales para la competitividad
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={10}>
                <Card className="border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <Card.Body className="p-5">
                    <h4 className="text-center mb-4" style={{ color: '#0a39e6' }}>
                      Relaciones internacionales
                    </h4>
                    <Row className="g-4 justify-content-center">
                      {[
                        'Alemania',
                        'Australia',
                        'Estados Unidos',
                        'Francia',
                        'Canada',
                        'España',
                        'Brasil',
                        'Corea',
                        'Suecia',
                        'Suiza',
                        'Japon',
                        'Colombia',
                        'Argentina',
                        'Costa Rica',
                        'Bolivia'
                      ].map((pais, index) => (
                        <Col xs={6} sm={4} md={3} lg={2} key={index}>
                          <div
                            className="text-center p-3 rounded h-100"
                            style={{
                              border: '1px solid #dee2e6',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              transform: hoveredCard === `pais-${index}` ? 'translateY(-10px) scale(1.05)' : 'translateY(0) scale(1)',
                              boxShadow: hoveredCard === `pais-${index}`
                                ? '0 10px 20px rgba(0,0,0,0.2)'
                                : '0 2px 4px rgba(0,0,0,0.1)',
                              backgroundColor: hoveredCard === `pais-${index}` ? '#f8f9fa' : 'white'
                            }}
                            onMouseEnter={() => handleMouseEnter(`pais-${index}`)}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div
                              className="mb-3"
                              style={{
                                height: '60px',
                                transform: hoveredCard === `pais-${index}` ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.3s ease'
                              }}
                            >
                              <img
                                src={`/images/flags/${pais.toLowerCase().replace(' ', '-')}.png`}
                                alt={`Bandera de ${pais}`}
                                style={{
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain'
                                }}
                              />
                            </div>
                            <h6
                              className="mb-0"
                              style={{
                                color: hoveredCard === `pais-${index}` ? '#0a39e6' : '#2c3e50',
                                transition: 'color 0.3s ease'
                              }}
                            >
                              {pais}
                            </h6>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>


        {/* Sección Valores */}
        <Container className="py-5">
          <Row className="mb-5">
            <Col className="text-center">
              <h2 className="display-4 fw-bold mb-2" style={{ color: '#ffffff' }}>Nuestros Valores</h2>
              <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
              <p className="lead text-white mb-5">Los principios que guían nuestra institución</p>
            </Col>
          </Row>

          <Row className="mb-5 g-4">
            <Col lg={3} md={6}>
              <Card
                style={getCardStyle('valor1')}
                onMouseEnter={() => handleMouseEnter('valor1')}
                onMouseLeave={handleMouseLeave}
                className="h-100 border-0"
              >
                <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                <Card.Body className="text-center p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: hoveredCard === 'valor1' ? '#0a39e6' : '#f8f9fa',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                    <FaUserGraduate style={{ fontSize: '2rem', color: hoveredCard === 'valor1' ? '#ffffff' : '#00aaff' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Excelencia</h5>
                  <p className="text-secondary">
                    Buscamos la mejora continua en todos nuestros procesos formativos
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card
                style={getCardStyle('valor2')}
                onMouseEnter={() => handleMouseEnter('valor2')}
                onMouseLeave={handleMouseLeave}
                className="h-100 border-0"
              >
                <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                <Card.Body className="text-center p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: hoveredCard === 'valor2' ? '#0a39e6' : '#f8f9fa',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                    <FaIndustry style={{ fontSize: '2rem', color: hoveredCard === 'valor2' ? '#ffffff' : '#00aaff' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Compromiso</h5>
                  <p className="text-secondary">
                    Dedicación total con el desarrollo de nuestros estudiantes
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card
                style={getCardStyle('valor3')}
                onMouseEnter={() => handleMouseEnter('valor3')}
                onMouseLeave={handleMouseLeave}
                className="h-100 border-0"
              >
                <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                <Card.Body className="text-center p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: hoveredCard === 'valor3' ? '#0a39e6' : '#f8f9fa',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                    <FaLaptopCode style={{ fontSize: '2rem', color: hoveredCard === 'valor3' ? '#ffffff' : '#00aaff' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Innovación</h5>
                  <p className="text-secondary">
                    Incorporamos tecnología de punta en la formación técnica
                  </p>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={3} md={6}>
              <Card
                style={getCardStyle('valor4')}
                onMouseEnter={() => handleMouseEnter('valor4')}
                onMouseLeave={handleMouseLeave}
                className="h-100 border-0"
              >
                <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                <Card.Body className="text-center p-4">
                  <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                    style={{
                      width: '80px',
                      height: '80px',
                      backgroundColor: hoveredCard === 'valor4' ? '#0a39e6' : '#f8f9fa',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                    }}>
                    <FaGlobe style={{ fontSize: '2rem', color: hoveredCard === 'valor4' ? '#ffffff' : '#00aaff' }} />
                  </div>
                  <h5 className="fw-bold mb-3" style={{ color: '#2c3e50' }}>Calidad</h5>
                  <p className="text-secondary">
                    Garantizamos una formación de excelencia con estándares internacionales
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>


        {/* Sección Convenios */}
        <section
          id="convenios"
          className="w-100 py-5"
          style={{
            backgroundColor: '#f8f9fa',
            scrollMarginTop: '120px',
            borderRadius: '14px',
            marginBottom: '80px'
          }}
        >
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <h1 className="display-3 fw-bold mb-1" style={{ color: '#0a39e6', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  CONVENIOS
                </h1>
                <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
                <p className="lead mb-0" style={{ color: '#2c3e50' }}>
                  Convenios internacionales para tu desarrollo profesional
                </p>
              </Col>
            </Row>
            <Row className="g-4">
              <Col md={6} lg={4}>
                <Card
                  style={getCardStyle('convenio1')}
                  onMouseEnter={() => handleMouseEnter('convenio1')}
                  onMouseLeave={handleMouseLeave}
                  className="h-100 border-0"
                >
                  <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                  <Card.Body className="p-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: hoveredCard === 'convenio1' ? '#0a39e6' : '#f8f9fa',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                      <FaIndustry style={{ fontSize: '2rem', color: hoveredCard === 'convenio1' ? '#ffffff' : '#00aaff' }} />
                    </div>
                    <h5 className="fw-bold mb-3 text-center" style={{ color: '#2c3e50' }}>Intercambio Estudiantil</h5>
                    <p className="text-secondary">
                      Programas de intercambio con instituciones técnicas líderes en Alemania, Japón y Corea del Sur.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card
                  style={getCardStyle('convenio2')}
                  onMouseEnter={() => handleMouseEnter('convenio2')}
                  onMouseLeave={handleMouseLeave}
                  className="h-100 border-0"
                >
                  <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                  <Card.Body className="p-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: hoveredCard === 'convenio2' ? '#0a39e6' : '#f8f9fa',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                      <FaGlobe style={{ fontSize: '2rem', color: hoveredCard === 'convenio2' ? '#ffffff' : '#00aaff' }} />
                    </div>
                    <h5 className="fw-bold mb-3 text-center" style={{ color: '#2c3e50' }}>Certificaciones Internacionales</h5>
                    <p className="text-secondary">
                      Convenios para certificaciones técnicas reconocidas globalmente.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} lg={4}>
                <Card
                  style={getCardStyle('convenio3')}
                  onMouseEnter={() => handleMouseEnter('convenio3')}
                  onMouseLeave={handleMouseLeave}
                  className="h-100 border-0"
                >
                  <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}></div>
                  <Card.Body className="p-4">
                    <div className="rounded-circle d-flex align-items-center justify-content-center mx-auto mb-4"
                      style={{
                        width: '80px',
                        height: '80px',
                        backgroundColor: hoveredCard === 'convenio3' ? '#0a39e6' : '#f8f9fa',
                        transition: 'all 0.3s ease',
                        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)'
                      }}>
                      <FaLaptopCode style={{ fontSize: '2rem', color: hoveredCard === 'convenio3' ? '#ffffff' : '#00aaff' }} />
                    </div>
                    <h5 className="fw-bold mb-3 text-center" style={{ color: '#2c3e50' }}>Prácticas Profesionales</h5>
                    <p className="text-secondary">
                      Acuerdos con empresas líderes para prácticas profesionales remuneradas en el extranjero.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sección Programas */}
        <section
          id="programas"
          className="w-100 position-relative py-5"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            scrollMarginTop: '120px',
            marginBottom: '80px'
            
          }}
        >
          <div
            className="position-absolute w-100 h-100"
            style={{
              backgroundColor: 'rgba(10, 25, 49, 0.85)',
              top: 0,
              left: 0
            }}
          ></div>
          <Container className="position-relative py-5">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center text-white mb-5">
                <h1 className="display-3 fw-bold mb-1" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
                  PROGRAMAS
                </h1>
                <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
                <p className="lead mb-0" style={{ textShadow: '0 1px 3px rgba(0,0,0,0.2)' }}>
                  Niveles de formación profesional
                </p>
              </Col>
            </Row>
            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <Card className="border-0 shadow-lg" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <Card.Body className="p-5">
                    <h4 className="fw-bold mb-4 text-center" style={{ color: '#0a39e6' }}>Aprendizaje Dual: SENATI – Empresa</h4>
                    <p className="text-secondary">
                      Este sistema de aprendizaje permite a nuestros estudiantes adquirir hasta 3570 horas de experiencia mientras son formados profesionalmente, ya que al desenvolverse en situaciones reales de trabajo dentro de una empresa, están reforzando su capacidad analítica y de respuesta aprendidas en los talleres de SENATI.
                    </p>
                    <div className="text-center mt-4">
                      <Button
                        onClick={() => handleShowCareer(carreras[0])}
                        variant="primary"
                        size="lg"
                        className="px-4 py-2"
                        style={{
                          backgroundColor: '#00aaff',
                          borderColor: '#00aaff',
                          borderRadius: '30px',
                          boxShadow: '0 4px 15px rgba(0, 170, 255, 0.4)'
                        }}
                      >
                        Conoce más
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={12}>
                <h3 className="text-center text-white fw-bold mb-4">Programas disponibles</h3>
                <Row className="g-4">
                  {carreras.map((carrera, index) => (
                    <Col lg={4} md={6} key={index}>
                      <Card
                        className="h-100 border-0 shadow-lg"
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          transform: hoveredCard === `prog-${index}` ? 'translateY(-10px)' : 'translateY(0)',
                          boxShadow: hoveredCard === `prog-${index}`
                            ? '0 12px 30px rgba(0, 0, 0, 0.2)'
                            : '0 4px 8px rgba(0, 0, 0, 0.1)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(`prog-${index}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div style={{ overflow: "hidden", height: "200px" }}>
                          <img
                            src={carrera.img || 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'}
                            alt={carrera.titulo}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transform: hoveredCard === `prog-${index}` ? 'scale(1.1)' : 'scale(1)',
                              transition: 'transform 0.5s ease'
                            }}
                          />
                        </div>
                        <div className="position-relative" style={{ height: '5px', backgroundColor: '#00aaff' }}></div>
                        <Card.Body className="p-4">
                          <h5 className="fw-bold" style={{ color: hoveredCard === `prog-${index}` ? '#0a39e6' : '#2c3e50', transition: 'color 0.2s ease' }}>{carrera.titulo}</h5>
                          <p className="text-secondary">{carrera.desc}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <small className="text-muted">{carrera.duracion}</small>
                            <Button
                              onClick={() => handleShowCareer(carrera)}
                              variant="outline-primary"
                              size="sm"
                              className="px-3"
                              style={{
                                borderRadius: '20px',
                                borderColor: '#00aaff',
                                color: '#00aaff'
                              }}
                            >
                              Conoce más
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sección Servicios */}
        <section
          id="servicios"
          className="w-100 py-5"
          style={{
            backgroundColor: '#f8f9fa',
            scrollMarginTop: '120px',
            borderRadius: '14px',
            marginBottom: '80px'
          }}
        >
          <Container className="py-5">
            <Row className="justify-content-center">
              <Col lg={8} className="text-center mb-5">
                <h1 className="display-3 fw-bold mb-1" style={{ color: '#0a39e6', textShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                  {servicios.tituloPrincipal}
                </h1>
                <div className="d-inline-block mb-4" style={{ width: '80px', height: '4px', backgroundColor: '#00aaff' }}></div>
                <p className="lead mb-0" style={{ color: '#2c3e50' }}>
                  {servicios.subtitulo}
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center mb-5">
              <Col lg={10}>
                <h3 className="text-center fw-bold mb-4" style={{ color: '#0a39e6' }}>Servicios educativos</h3>
                <Row className="g-4">
                  {servicios.educativos.map((s, i) => (
                    <Col md={6} key={i}>
                      <Card
                        className="h-100 border-0 shadow-sm"
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          transform: hoveredCard === `serv-edu-${i}` ? 'translateY(-5px)' : 'translateY(0)',
                          boxShadow: hoveredCard === `serv-edu-${i}`
                            ? '0 8px 20px rgba(0, 0, 0, 0.1)'
                            : '0 2px 5px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(`serv-edu-${i}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="position-relative" style={{ height: '5px', backgroundColor: '#00aaff' }}></div>
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center gap-4">
                            <div style={{ width: '100px', height: '70px', overflow: 'hidden', flex: '0 0 100px' }}>
                              {s.img ?
                                <img src={s.img} alt={s.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> :
                                <div className="d-flex align-items-center justify-content-center h-100 bg-light rounded">
                                  <FaLaptopCode style={{ fontSize: '2rem', color: '#00aaff' }} />
                                </div>
                              }
                            </div>
                            <div>
                              <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>{s.titulo}</h5>
                              <p className="text-secondary mb-0">{s.descripcion}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={10}>
                <h3 className="text-center fw-bold mb-4" style={{ color: '#0a39e6' }}>Servicios empresariales</h3>
                <Row className="g-4">
                  {servicios.empresariales.map((s, i) => (
                    <Col md={6} key={i}>
                      <Card
                        className="h-100 border-0 shadow-sm"
                        style={{
                          borderRadius: '12px',
                          overflow: 'hidden',
                          transform: hoveredCard === `serv-emp-${i}` ? 'translateY(-5px)' : 'translateY(0)',
                          boxShadow: hoveredCard === `serv-emp-${i}`
                            ? '0 8px 20px rgba(0, 0, 0, 0.1)'
                            : '0 2px 5px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                        }}
                        onMouseEnter={() => handleMouseEnter(`serv-emp-${i}`)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="position-relative" style={{ height: '5px', backgroundColor: '#00aaff' }}></div>
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center gap-4">
                            <div style={{ width: '100px', height: '70px', overflow: 'hidden', flex: '0 0 100px' }}>
                              {s.img ?
                                <img src={s.img} alt={s.titulo} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} /> :
                                <div className="d-flex align-items-center justify-content-center h-100 bg-light rounded">
                                  <FaIndustry style={{ fontSize: '2rem', color: '#00aaff' }} />
                                </div>
                              }
                            </div>
                            <div>
                              <h5 className="fw-bold mb-2" style={{ color: '#2c3e50' }}>{s.titulo}</h5>
                              <p className="text-secondary mb-0">{s.descripcion}</p>
                            </div>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Sección Sedes */}
        <Row className="mb-5" id="sedes" style={anchorStyle}>
          <Col>
            <Card
              style={getCardStyle('sedes')}
              onMouseEnter={() => handleMouseEnter('sedes')}
              onMouseLeave={handleMouseLeave}
            >
              <Card.Body className="p-5">
                <h3 className="fw-bold mb-4 text-center" style={{ color: '#2c3e50' }}>
                  Nuestras Sedes
                </h3>
                <Row className="mb-4">
                  <Col md={6} className="mb-3 mb-md-0">
                    <div className="input-group">
                      <select
                        className="form-select"
                        value={selectedSede}
                        onChange={(e) => setSelectedSede(e.target.value)}
                      >
                        <option value="">Todas las sedes</option>
                        {sedesList.map((sede, idx) => (
                          <option key={idx} value={sede}>{sede}</option>
                        ))}
                      </select>
                      <button
                        className="btn btn-primary"
                        type="button"
                        onClick={handleBuscarSede}
                        style={{ backgroundColor: '#0a39e6', borderColor: '#0a39e6' }}
                      >
                        Buscar
                      </button>
                    </div>
                  </Col>
                </Row>
                <Row className="g-4">
                  {filteredSedes.map((sede, idx) => (
                    <Col md={6} lg={4} key={idx}>
                      <Card className="h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                        <div className="position-relative" style={{ height: '8px', backgroundColor: '#00aaff' }}></div>
                        <Card.Body className="p-4">
                          <h5 className="fw-bold mb-3" style={{ color: '#0a39e6' }}>{sede}</h5>
                          <p className="text-secondary mb-3">
                            <FaMapMarkerAlt className="me-2" style={{ color: '#00aaff' }} />
                            Av. Principal 123, {sede}
                          </p>
                          <p className="text-secondary mb-3">
                            <FaPhone className="me-2" style={{ color: '#00aaff' }} />
                            (01) 555-{1000 + idx}
                          </p>
                          <p className="text-secondary mb-0">
                            <FaEnvelope className="me-2" style={{ color: '#00aaff' }} />
                            contacto.{sede.toLowerCase().replace(' ', '')}@senati.edu.pe
                          </p>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Sección Mapa */}
      <section id="mapa" className="w-100" style={{ scrollMarginTop: '120px' }}>
        <div style={{ width: '100%', height: '450px' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d497.131739762877!2d-81.26261383128279!3d-4.58434362637202!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90364404cde51603%3A0xd837758e5d6187ea!2sSENATI%2C%20Talara%2020811!5e0!3m2!1ses-419!2spe!4v1759547210736!5m2!1ses-419!2spe"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa SENATI"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <Container>
          <Row className="mb-4">
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <h4 className="fw-bold mb-4" style={{ color: '#00aaff' }}>SENATI</h4>
              <p className="mb-3">Servicio Nacional de Adiestramiento en Trabajo Industrial</p>
              <p className="mb-3">Formando profesionales técnicos desde 1961</p>
              <div className="d-flex mt-4">
                <a href="#" className="me-3 text-white" style={{ fontSize: '1.5rem' }}>
                  <FaFacebook />
                </a>
                <a href="#" className="me-3 text-white" style={{ fontSize: '1.5rem' }}>
                  <FaTwitter />
                </a>
                <a href="#" className="me-3 text-white" style={{ fontSize: '1.5rem' }}>
                  <FaInstagram />
                </a>
                <a href="#" className="me-3 text-white" style={{ fontSize: '1.5rem' }}>
                  <FaLinkedin />
                </a>
                <a href="#" className="text-white" style={{ fontSize: '1.5rem' }}>
                  <FaYoutube />
                </a>
              </div>
            </Col>
            <Col lg={4} md={6} className="mb-4 mb-md-0">
              <h5 className="fw-bold mb-4" style={{ color: '#00aaff' }}>Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="#nosotros" className="text-white text-decoration-none">Sobre Nosotros</a></li>
                <li className="mb-2"><a href="#programas" className="text-white text-decoration-none">Programas</a></li>
                <li className="mb-2"><a href="#servicios" className="text-white text-decoration-none">Servicios</a></li>
                <li className="mb-2"><a href="#alianzas" className="text-white text-decoration-none">Alianzas</a></li>
                <li className="mb-2"><a href="#convenios" className="text-white text-decoration-none">Convenios</a></li>
                <li className="mb-2"><a href="#sedes" className="text-white text-decoration-none">Sedes</a></li>
              </ul>
            </Col>
            <Col lg={4} md={12}>
              <h5 className="fw-bold mb-4" style={{ color: '#00aaff' }}>Contáctanos</h5>
              <p className="mb-3">
                <FaMapMarkerAlt className="me-2" />
                Urbanización Aproviser II
              </p>
              <p className="mb-3">
                <FaPhone className="me-2" />
                (073) 382900
              </p>
              <p className="mb-3">
                <FaEnvelope className="me-2" />
                informes@senati.edu.pe
              </p>
            </Col>
          </Row>
          <hr className="my-4" style={{ backgroundColor: '#00aaff', opacity: 0.3 }} />
          <Row>
            <Col className="text-center">
              <p className="mb-0">© {new Date().getFullYear()} SENATI. Todos los derechos reservados.</p>
            </Col>
          </Row>
        </Container>
      </footer>

      {/* Modal para detalles de carrera */}
      {selectedCareer && (
        <div className="modal fade show" style={{ display: showModal ? 'block' : 'none' }} role="dialog">
          <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header" style={{ backgroundColor: '#0a1931', color: 'white' }}>
                <h5 className="modal-title">{selectedCareer.titulo}</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <img src={selectedCareer.img} alt={selectedCareer.titulo} style={{ width: '100%', borderRadius: '8px', marginBottom: '16px' }} />
                <p className="text-secondary">{selectedCareer.desc}</p>
                <ul style={{ textAlign: 'left' }}>
                  <li><strong>Duración:</strong> {selectedCareer.duracion}</li>
                  <li><strong>Perfil del egresado:</strong> {selectedCareer.perfil}</li>
                  <li><strong>Oportunidades laborales:</strong> {selectedCareer.oportunidades}</li>
                </ul>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;