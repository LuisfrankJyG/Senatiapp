import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaChevronRight, FaGraduationCap, FaClock, FaBriefcase } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RUTAS } from "../routes.js";

function Carreras() {
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const carreras = [
    {
      id: "software",
      titulo: "Ingeniería de Software",
      img: "https://pregrado.upc.edu.pe/facultad-de-ingenieria/ingenieria-de-software/img/Malla_curricular_especializada.jpg",
      desc: "Forma parte de la revolución digital desarrollando soluciones tecnológicas.",
      duracion: "3 años",
      perfil: "Egresado capaz de diseñar, desarrollar y mantener aplicaciones innovadoras.",
      oportunidades: "Empresas de tecnología, startups, consultoría en software.",
      color: "#667eea",
      colorSecundario: "#764ba2"
    },
    {
      id: "diseno",
      titulo: "Diseño Gráfico",
      img: "https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-diseno-grafico-senati-1800x1190.jpg",
      desc: "Explora tu creatividad con las mejores herramientas y técnicas modernas.",
      duracion: "3 años",
      perfil: "Profesional creativo en comunicación visual, branding y publicidad.",
      oportunidades: "Agencias de publicidad, estudios de diseño, marketing digital.",
      color: "#f093fb",
      colorSecundario: "#f5576c"
    },
    {
      id: "gastronomia",
      titulo: "Gastronomía",
      img: "https://blog-u-erre.talisis.com/hubfs/concepto-de-gastronomia.webp",
      desc: "Desarrolla tus habilidades culinarias con calidad internacional.",
      duracion: "3 años",
      perfil: "Chef con dominio en técnicas culinarias, innovación gastronómica y gestión de restaurantes.",
      oportunidades: "Hoteles, restaurantes, catering, emprendimientos propios.",
      color: "#fa709a",
      colorSecundario: "#fee140"
    },
    {
      id: "seguridad",
      titulo: "Seguridad Industrial",
      img: "https://microsegur.com/wp-content/uploads/2025/04/proyectos-de-seguridad-industrial.jpg",
      desc: "Especialízate en prevención y seguridad laboral para industrias modernas.",
      duracion: "3 años",
      perfil: "Técnico especialista en prevención de riesgos laborales e industriales.",
      oportunidades: "Empresas mineras, constructoras, manufactura, auditorías de seguridad.",
      color: "#ffa751",
      colorSecundario: "#ffe259"
    },
    {
      id: "mecanica",
      titulo: "Mecánica Automotriz",
      img: "https://www.senati.edu.pe/sites/default/files/2017/carrera/09/mecanica-automotriz-senati1800-x-1190_0.jpg",
      desc: "Conviértete en experto en mantenimiento y reparación de vehículos.",
      duracion: "3 años",
      perfil: "Especialista en diagnóstico, reparación y mantenimiento automotriz.",
      oportunidades: "Talleres, concesionarios, empresas de transporte y logística.",
      color: "#4facfe",
      colorSecundario: "#00f2fe"
    },
    {
      id: "administracion",
      titulo: "Administración de Empresas",
      img: "https://uni.edu.gt/wp-content/uploads/sites/19/2024/04/Administracion-de-Empresas-Concepto-y-Funciones3.jpg",
      desc: "Desarrolla habilidades de liderazgo y gestión para dirigir organizaciones con éxito.",
      duracion: "3 años",
      perfil: "Profesional en gestión empresarial, finanzas, marketing y recursos humanos.",
      oportunidades: "Empresas privadas, instituciones públicas, consultoría, emprendimientos.",
      color: "#667eea",
      colorSecundario: "#764ba2"
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    window.scrollTo(0, 0);
  }, []);

  const handleShowModal = (carrera) => {
    setSelectedCareer(carrera);
    setShowModal(true);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
        background: "#0a0e27",
        color: "white",
      }}
    >
      {/* HERO SECTION */}
      <div 
        style={{ 
          position: "relative",
          background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
          padding: "120px 0 80px",
          overflow: "hidden"
        }}
      >
        <div 
          style={{ 
            position: "absolute",
            top: "-50%",
            right: "-10%",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(102, 126, 234, 0.15), transparent)",
            filter: "blur(80px)"
          }}
        />
        <div 
          style={{ 
            position: "absolute",
            bottom: "-30%",
            left: "-5%",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(118, 75, 162, 0.15), transparent)",
            filter: "blur(80px)"
          }}
        />
        <Container style={{ position: "relative", zIndex: 2 }}>
          <div className="text-center" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div 
              style={{ 
                display: "inline-block",
                padding: "10px 30px",
                background: "rgba(102, 126, 234, 0.2)",
                borderRadius: "50px",
                marginBottom: "24px",
                border: "1px solid rgba(102, 126, 234, 0.3)",
                backdropFilter: "blur(10px)"
              }}
            >
              <FaGraduationCap style={{ marginRight: "8px" }} />
              <span style={{ fontWeight: "600" }}>SENATI - Formación de Excelencia</span>
            </div>
            <h1 
              className="display-2 fw-bold mb-4" 
              style={{ 
                background: "linear-gradient(135deg, #fff, #a0a0a0)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: "1.2"
              }}
            >
              Nuestras Carreras
            </h1>
            <p className="fs-4 mb-0" style={{ color: "#b0b0b0", lineHeight: "1.8" }}>
              Descubre tu vocación y construye tu futuro con programas de formación técnica de clase mundial
            </p>
          </div>
        </Container>
      </div>

      {/* CARRERAS GRID */}
      <Container className="py-5" style={{ marginTop: "-40px", position: "relative", zIndex: 10 }}>
        <Row className="g-4">
          {carreras.map((carrera, index) => (
            <Col lg={4} md={6} key={carrera.id}>
              <Card
                className="career-card h-100 border-0"
                style={{ 
                  background: "rgba(15, 20, 45, 0.9)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div 
                  style={{ 
                    position: "relative",
                    height: "260px",
                    overflow: "hidden"
                  }}
                >
                  <div 
                    style={{ 
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "8px 20px",
                      background: `linear-gradient(135deg, ${carrera.color}, ${carrera.colorSecundario})`,
                      borderRadius: "50px",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      zIndex: 2,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px"
                    }}
                  >
                    <FaClock size={14} /> {carrera.duracion}
                  </div>
                  <img
                    src={carrera.img}
                    alt={carrera.titulo}
                    className="career-img"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease"
                    }}
                  />
                  <div 
                    className="career-overlay"
                    style={{ 
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50%",
                      background: `linear-gradient(to top, rgba(15, 20, 45, 0.95), transparent)`,
                      transition: "height 0.4s ease"
                    }}
                  />
                </div>

                <Card.Body style={{ padding: "32px", position: "relative" }}>
                  <div 
                    style={{ 
                      width: "60px",
                      height: "4px",
                      background: `linear-gradient(90deg, ${carrera.color}, ${carrera.colorSecundario})`,
                      borderRadius: "2px",
                      marginBottom: "20px"
                    }}
                  />
                  <Card.Title 
                    className="fw-bold mb-3" 
                    style={{ 
                      color: "#fff",
                      fontSize: "1.5rem",
                      lineHeight: "1.3"
                    }}
                  >
                    {carrera.titulo}
                  </Card.Title>
                  <Card.Text 
                    style={{ 
                      color: "#b0b0b0",
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      marginBottom: "24px"
                    }}
                  >
                    {carrera.desc}
                  </Card.Text>

                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <Button
                      className="btn-career-primary"
                      style={{
                        background: "#0a1f44",
                        border: "none",
                        borderRadius: "50px",
                        padding: "14px 28px",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        transition: "all 0.3s ease"
                      }}
                      onClick={() => handleShowModal(carrera)}
                    >
                      Ver información <FaChevronRight size={14} />
                    </Button>
                    <Link
                      to={`${RUTAS.CARRERAS}/${carrera.id}`}
                      className="btn-career-outline"
                      style={{
                        background: "transparent",
                        border: "2px solid rgba(255,255,255,0.2)",
                        borderRadius: "50px",
                        padding: "12px 28px",
                        fontWeight: "600",
                        fontSize: "0.95rem",
                        color: "#fff",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <FaBriefcase size={16} /> Conocer carrera
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* STATS SECTION */}
      <div style={{ background: "rgba(15, 20, 45, 0.5)", padding: "80px 0", marginTop: "60px" }}>
        <Container>
          <Row className="text-center g-4">
            <Col md={4}>
              <div 
                style={{ 
                  padding: "40px",
                  background: "rgba(102, 126, 234, 0.1)",
                  borderRadius: "24px",
                  border: "1px solid rgba(102, 126, 234, 0.3)"
                }}
              >
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#667eea" }}>50+</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem", margin: 0 }}>Años de experiencia</p>
              </div>
            </Col>
            <Col md={4}>
              <div 
                style={{ 
                  padding: "40px",
                  background: "rgba(240, 147, 251, 0.1)",
                  borderRadius: "24px",
                  border: "1px solid rgba(240, 147, 251, 0.3)"
                }}
              >
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#f093fb" }}>6</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem", margin: 0 }}>Carreras profesionales</p>
              </div>
            </Col>
            <Col md={4}>
              <div 
                style={{ 
                  padding: "40px",
                  background: "rgba(67, 233, 123, 0.1)",
                  borderRadius: "24px",
                  border: "1px solid rgba(67, 233, 123, 0.3)"
                }}
              >
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#43e97b" }}>95%</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem", margin: 0 }}>Empleabilidad</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* MODAL MEJORADO */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)} 
        centered 
        size="lg"
        style={{ fontFamily: "'Poppins', sans-serif" }}
      >
        {selectedCareer && (
          <>
            <Modal.Header 
              closeButton 
              style={{ 
                background: `linear-gradient(135deg, ${selectedCareer.color}, ${selectedCareer.colorSecundario})`,
                color: "white",
                border: "none",
                padding: "24px 32px"
              }}
            >
              <Modal.Title className="fw-bold fs-3">{selectedCareer.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "#0f142d", color: "#fff", padding: "40px" }}>
              <div style={{ position: "relative", borderRadius: "16px", overflow: "hidden", marginBottom: "32px" }}>
                <img
                  src={selectedCareer.img}
                  alt={selectedCareer.titulo}
                  style={{ width: "100%", display: "block" }}
                />
                <div 
                  style={{ 
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "24px",
                    background: `linear-gradient(to top, ${selectedCareer.color}dd, transparent)`
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <FaClock />
                    <span style={{ fontWeight: "600" }}>{selectedCareer.duracion}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "32px", color: "#d0d0d0" }}>
                {selectedCareer.desc}
              </p>

              <div style={{ display: "grid", gap: "20px" }}>
                <div 
                  style={{ 
                    padding: "24px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <h5 style={{ color: selectedCareer.color, marginBottom: "12px", fontWeight: "700" }}>
                    <FaGraduationCap style={{ marginRight: "10px" }} />
                    Perfil del egresado
                  </h5>
                  <p style={{ margin: 0, lineHeight: "1.6", color: "#d0d0d0" }}>{selectedCareer.perfil}</p>
                </div>

                <div 
                  style={{ 
                    padding: "24px",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "16px",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <h5 style={{ color: selectedCareer.color, marginBottom: "12px", fontWeight: "700" }}>
                    <FaBriefcase style={{ marginRight: "10px" }} />
                    Oportunidades laborales
                  </h5>
                  <p style={{ margin: 0, lineHeight: "1.6", color: "#d0d0d0" }}>{selectedCareer.oportunidades}</p>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ background: "#0f142d", border: "none", padding: "24px" }}>
              <Button
                style={{
                  background: "#0a1f44",
                  border: "none",
                  borderRadius: "50px",
                  padding: "12px 32px",
                  fontWeight: "600",
                  color: "#fff",
                  fontSize: "1rem"
                }}
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* CSS ANIMATIONS */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .career-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.2);
        }

        .career-card:hover .career-img {
          transform: scale(1.1);
        }

        .career-card:hover .career-overlay {
          height: 100%;
        }

        .btn-career-primary:hover {
          background: #0d2a5c !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(10, 31, 68, 0.6);
        }

        .btn-career-outline:hover {
          border-color: rgba(255,255,255,0.5) !important;
          background: rgba(255,255,255,0.05) !important;
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
}

export default Carreras;