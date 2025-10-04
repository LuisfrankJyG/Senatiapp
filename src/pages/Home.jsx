import { useEffect, useState } from "react";
import { Container, Carousel, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { RUTAS } from "../routes.js";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaIndustry,
  FaGlobe,
  FaUtensils,
  FaChevronRight,
  FaAward,
  FaUsers,
  FaRocket,
  FaCertificate,
  FaHandshake,
  FaChartLine,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const infoSenati = [
    { icon: <FaUserGraduate size={30} />, titulo: "Formación Dual", desc: "Aprende en las aulas y en la industria al mismo tiempo.", color: "#667eea" },
    { icon: <FaLaptopCode size={30} />, titulo: "Tecnología", desc: "Equipos modernos y entornos digitales avanzados.", color: "#764ba2" },
    { icon: <FaIndustry size={30} />, titulo: "Vinculación Industrial", desc: "Alianzas estratégicas con empresas líderes del país.", color: "#f093fb" },
    { icon: <FaGlobe size={30} />, titulo: "Proyección Internacional", desc: "Programas con visión global y oportunidades en el extranjero.", color: "#43e97b" },
    { icon: <FaUtensils size={30} />, titulo: "Diversidad de Carreras", desc: "Desde tecnología hasta gastronomía, elige tu camino.", color: "#fa709a" },
  ];

  const carrerasDestacadas = [
    {
      titulo: "Ingeniería de Software",
      img: "https://pregrado.upc.edu.pe/facultad-de-ingenieria/ingenieria-de-software/img/Malla_curricular_especializada.jpg",
      desc: "Forma parte de la revolución digital desarrollando soluciones tecnológicas.",
      duracion: "3 años",
      perfil: "Egresado capaz de diseñar, desarrollar y mantener aplicaciones innovadoras.",
      oportunidades: "Empresas de tecnología, startups, consultoría en software.",
      color: "#667eea",
      id: "software"
    },
    {
      titulo: "Diseño Gráfico",
      img: "https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-diseno-grafico-senati-1800x1190.jpg",
      desc: "Explora tu creatividad con las mejores herramientas y técnicas modernas.",
      duracion: "3 años",
      perfil: "Profesional creativo en comunicación visual, branding y publicidad.",
      oportunidades: "Agencias de publicidad, estudios de diseño, marketing digital.",
      color: "#f093fb",
      id: "diseno"
    },
    {
      titulo: "Gastronomía",
      img: "https://blog-u-erre.talisis.com/hubfs/concepto-de-gastronomia.webp",
      desc: "Desarrolla tus habilidades culinarias con calidad internacional.",
      duracion: "3 años",
      perfil: "Chef con dominio en técnicas culinarias, innovación gastronómica y gestión de restaurantes.",
      oportunidades: "Hoteles, restaurantes, catering, emprendimientos propios.",
      color: "#fa709a",
      id: "gastronomia"
    }
  ];

  const beneficios = [
    { icon: <FaCertificate size={40} />, titulo: "Certificación Oficial", desc: "Títulos reconocidos a nivel nacional e internacional", color: "#667eea" },
    { icon: <FaHandshake size={40} />, titulo: "Convenios Empresariales", desc: "Más de 2000 empresas aliadas para prácticas", color: "#43e97b" },
    { icon: <FaChartLine size={40} />, titulo: "Alta Empleabilidad", desc: "95% de egresados trabajan en su especialidad", color: "#f093fb" },
    { icon: <FaAward size={40} />, titulo: "Excelencia Académica", desc: "Docentes especializados y certificados", color: "#ffa751" },
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
      {/* HERO CON CAROUSEL MEJORADO */}
      <div style={{ position: "relative" }}>
        <Carousel fade className="hero-carousel" indicators={true} controls={true}>
          <Carousel.Item>
            <div style={{ position: "relative", height: "600px", overflow: "hidden" }}>
              <img 
                className="d-block w-100"
                src="https://gestion.pe/resizer/v2/GVYYBCFHCJERDGD6UBNOQ3QRCE.jpg?auth=5344792b7e8cb45adaa36605d600eb140a1225fa7aaef1c71e9483b69f86e8de&width=5549&height=3339&quality=75&smart=true"
                alt="Primera"
                style={{ height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
              />
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "90%",
                maxWidth: "900px"
              }}>
                <div 
                  style={{
                    display: "inline-block",
                    padding: "12px 32px",
                    background: "rgba(102, 126, 234, 0.3)",
                    borderRadius: "50px",
                    marginBottom: "24px",
                    border: "1px solid rgba(102, 126, 234, 0.5)",
                    backdropFilter: "blur(10px)",
                    animation: "fadeIn 1s ease-out"
                  }}
                >
                  <FaRocket style={{ marginRight: "10px" }} />
                  <span style={{ fontWeight: "600", fontSize: "1rem" }}>Más de 50 años formando campeones</span>
                </div>
                <h1 className="display-2 fw-bold mb-4" style={{ 
                  textShadow: "0 4px 20px rgba(0,0,0,0.8)",
                  animation: "slideUp 1s ease-out"
                }}>
                  Bienvenido a SENATI
                </h1>
                <p className="fs-3 mb-4" style={{ 
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  animation: "slideUp 1.2s ease-out"
                }}>
                  Formando profesionales técnicos para el futuro de la industria
                </p>
                <Link to={RUTAS.CARRERAS}>
                  <Button 
                    style={{
                      background: "#0a1f44",
                      border: "none",
                      borderRadius: "50px",
                      padding: "16px 40px",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#fff",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      animation: "fadeIn 1.5s ease-out"
                    }}
                    className="hero-btn"
                  >
                    Explorar Carreras <FaChevronRight />
                  </Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div style={{ position: "relative", height: "600px", overflow: "hidden" }}>
              <img 
                className="d-block w-100"
                src="https://www.senati.edu.pe/sites/default/files/2019/noticia/02/tecnologia-de-punta-para-trujillo-1800x677.jpg"
                alt="Segunda"
                style={{ height: "100%", objectFit: "cover", filter: "brightness(0.5)" }}
              />
              <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                width: "90%",
                maxWidth: "900px"
              }}>
                <div 
                  style={{
                    display: "inline-block",
                    padding: "12px 32px",
                    background: "rgba(240, 147, 251, 0.3)",
                    borderRadius: "50px",
                    marginBottom: "24px",
                    border: "1px solid rgba(240, 147, 251, 0.5)",
                    backdropFilter: "blur(10px)",
                    animation: "fadeIn 1s ease-out"
                  }}
                >
                  <FaLaptopCode style={{ marginRight: "10px" }} />
                  <span style={{ fontWeight: "600", fontSize: "1rem" }}>Tecnología de Vanguardia</span>
                </div>
                <h1 className="display-2 fw-bold mb-4" style={{ 
                  textShadow: "0 4px 20px rgba(0,0,0,0.8)",
                  animation: "slideUp 1s ease-out"
                }}>
                  Tecnología e Innovación
                </h1>
                <p className="fs-3 mb-4" style={{ 
                  textShadow: "0 2px 10px rgba(0,0,0,0.8)",
                  animation: "slideUp 1.2s ease-out"
                }}>
                  Educación de calidad con equipos modernos y visión global
                </p>
                <Link to={RUTAS.NOSOTROS}>
                  <Button 
                    style={{
                      background: "#0a1f44",
                      border: "none",
                      borderRadius: "50px",
                      padding: "16px 40px",
                      fontSize: "1.1rem",
                      fontWeight: "700",
                      color: "#fff",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                      animation: "fadeIn 1.5s ease-out"
                    }}
                    className="hero-btn"
                  >
                    Conocer Más <FaChevronRight />
                  </Button>
                </Link>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>

      <Container className="py-5">
        {/* CARRERAS DESTACADAS */}
        <div className="text-center mb-5" style={{ marginTop: "60px" }}>
          <div 
            style={{
              display: "inline-block",
              padding: "10px 30px",
              background: "rgba(102, 126, 234, 0.2)",
              borderRadius: "50px",
              marginBottom: "20px",
              border: "1px solid rgba(102, 126, 234, 0.3)"
            }}
          >
            <FaUserGraduate style={{ marginRight: "8px" }} />
            <span style={{ fontWeight: "600" }}>Carreras Destacadas</span>
          </div>
          <h2 className="display-4 fw-bold mb-3">Comienza Tu Futuro Profesional</h2>
          <p style={{ fontSize: "1.2rem", color: "#b0b0b0", maxWidth: "700px", margin: "0 auto" }}>
            Explora nuestras carreras más demandadas y descubre tu vocación
          </p>
        </div>

        <Row className="g-4 mb-5">
          {carrerasDestacadas.map((carrera, i) => (
            <Col lg={4} md={6} key={i}>
              <Card 
                className="career-card-home h-100 border-0"
                style={{ 
                  background: "rgba(15, 20, 45, 0.9)",
                  backdropFilter: "blur(20px)",
                  borderRadius: "24px",
                  overflow: "hidden",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.4s ease",
                  animation: `fadeInUp 0.6s ease-out ${i * 0.2}s backwards`
                }}
              >
                <div style={{ position: "relative", height: "240px", overflow: "hidden" }}>
                  <div 
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      padding: "8px 20px",
                      background: carrera.color,
                      borderRadius: "50px",
                      fontSize: "0.85rem",
                      fontWeight: "700",
                      zIndex: 2,
                      boxShadow: "0 4px 15px rgba(0,0,0,0.3)"
                    }}
                  >
                    {carrera.duracion}
                  </div>
                  <img
                    src={carrera.img}
                    alt={carrera.titulo}
                    className="career-img-home"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.6s ease"
                    }}
                  />
                  <div 
                    className="career-overlay-home"
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "40%",
                      background: "linear-gradient(to top, rgba(15, 20, 45, 0.95), transparent)",
                      transition: "height 0.4s ease"
                    }}
                  />
                </div>
                <Card.Body style={{ padding: "32px" }}>
                  <div 
                    style={{
                      width: "50px",
                      height: "4px",
                      background: carrera.color,
                      borderRadius: "2px",
                      marginBottom: "16px"
                    }}
                  />
                  <Card.Title className="fw-bold mb-3" style={{ color: "#fff", fontSize: "1.4rem" }}>
                    {carrera.titulo}
                  </Card.Title>
                  <Card.Text style={{ color: "#b0b0b0", lineHeight: "1.6", marginBottom: "24px" }}>
                    {carrera.desc}
                  </Card.Text>
                  <Button
                    style={{
                      background: "#0a1f44",
                      border: "none",
                      borderRadius: "50px",
                      padding: "12px 28px",
                      fontWeight: "600",
                      color: "#fff",
                      width: "100%",
                      transition: "all 0.3s ease"
                    }}
                    className="btn-career-home"
                    onClick={() => handleShowModal(carrera)}
                  >
                    Ver detalles <FaChevronRight />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* BOTÓN VER TODAS LAS CARRERAS */}
        <div className="text-center mb-5">
          <Link to={RUTAS.CARRERAS}>
            <Button
              style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                border: "none",
                borderRadius: "50px",
                padding: "18px 50px",
                fontSize: "1.2rem",
                fontWeight: "700",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(102, 126, 234, 0.4)",
                transition: "all 0.3s ease"
              }}
              className="btn-all-careers"
            >
              Ver Todas las Carreras <FaChevronRight style={{ marginLeft: "8px" }} />
            </Button>
          </Link>
        </div>

        {/* BENEFICIOS */}
        <div className="text-center mb-5" style={{ marginTop: "100px" }}>
          <h2 className="display-4 fw-bold mb-3">¿Por qué Elegir SENATI?</h2>
          <p style={{ fontSize: "1.2rem", color: "#b0b0b0", maxWidth: "700px", margin: "0 auto 60px" }}>
            Somos líderes en formación técnica con más de 50 años de experiencia
          </p>
        </div>

        <Row className="g-4 mb-5">
          {beneficios.map((beneficio, i) => (
            <Col md={6} lg={3} key={i}>
              <div
                className="benefit-card"
                style={{
                  padding: "40px 24px",
                  background: "rgba(15, 20, 45, 0.8)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  textAlign: "center",
                  height: "100%",
                  transition: "all 0.4s ease",
                  animation: `fadeInUp 0.6s ease-out ${i * 0.15}s backwards`
                }}
              >
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    margin: "0 auto 24px",
                    borderRadius: "20px",
                    background: `${beneficio.color}20`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: beneficio.color
                  }}
                >
                  {beneficio.icon}
                </div>
                <h5 className="fw-bold mb-3" style={{ fontSize: "1.2rem" }}>
                  {beneficio.titulo}
                </h5>
                <p style={{ color: "#b0b0b0", lineHeight: "1.6", margin: 0 }}>
                  {beneficio.desc}
                </p>
              </div>
            </Col>
          ))}
        </Row>

        {/* RULETA SENATI MEJORADA */}
        <div style={{ marginTop: "100px", marginBottom: "60px" }}>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Nuestros Pilares</h2>
            <p style={{ fontSize: "1.2rem", color: "#b0b0b0" }}>
              Conoce los valores que nos distinguen
            </p>
          </div>
          <div className="circle-container">
            {infoSenati.map((item, index) => {
              const angle = (index / infoSenati.length) * 360;
              return (
                <div 
                  key={index} 
                  className="circle-item" 
                  style={{ "--angle": `${angle}deg` }} 
                  onClick={() => setSelectedInfo(index)}
                >
                  <div 
                    className="circle-content"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}, ${item.color}cc)`,
                      color: "#fff"
                    }}
                  >
                    {item.icon}
                  </div>
                </div>
              );
            })}
            <div 
              className="circle-center"
              style={{
                background: `linear-gradient(135deg, ${infoSenati[selectedInfo].color}, ${infoSenati[selectedInfo].color}dd)`
              }}
            >
              <FaAward size={50} style={{ marginBottom: "20px", opacity: 0.8 }} />
              <h4 className="fw-bold mb-3" style={{ fontSize: "1.5rem", textAlign: "center" }}>
                {infoSenati[selectedInfo].titulo}
              </h4>
              <p style={{ fontSize: "1rem", lineHeight: "1.6", textAlign: "center" }}>
                {infoSenati[selectedInfo].desc}
              </p>
            </div>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div 
          style={{
            background: "rgba(15, 20, 45, 0.5)",
            borderRadius: "32px",
            padding: "60px 40px",
            marginTop: "80px",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <Row className="text-center g-4">
            <Col md={3}>
              <div>
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#667eea" }}>50+</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem" }}>Años de experiencia</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#43e97b" }}>2000+</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem" }}>Empresas aliadas</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#f093fb" }}>95%</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem" }}>Empleabilidad</p>
              </div>
            </Col>
            <Col md={3}>
              <div>
                <h2 className="display-3 fw-bold mb-2" style={{ color: "#ffa751" }}>6</h2>
                <p style={{ color: "#b0b0b0", fontSize: "1.1rem" }}>Carreras disponibles</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>

      {/* FOOTER MEJORADO */}
      <footer 
        style={{
          background: "linear-gradient(to right, #0a0e27, #0f142d)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "60px 0 30px",
          marginTop: "100px"
        }}
      >
        <Container>
          <Row className="g-4 mb-4">
            <Col md={4}>
              <h4 className="fw-bold mb-3">SENATI</h4>
              <p style={{ color: "#a0a0a0", lineHeight: "1.6" }}>
                Formando profesionales de excelencia con más de 50 años de experiencia en educación técnica.
              </p>
            </Col>
            <Col md={4}>
              <h5 className="fw-bold mb-3">Contacto</h5>
              <p style={{ color: "#a0a0a0", margin: "8px 0" }}>📞 (01) 206-0900</p>
              <p style={{ color: "#a0a0a0", margin: "8px 0" }}>✉️ informes@senati.edu.pe</p>
            </Col>
            
          </Row>
          <div 
            style={{
              paddingTop: "30px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              textAlign: "center",
              color: "#a0a0a0"
            }}
          >
            <p className="mb-0">© 2025 SENATI. Todos los derechos reservados.</p>
          </div>
        </Container>
      </footer>

      {/* MODAL MEJORADO */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        {selectedCareer && (
          <>
            <Modal.Header 
              closeButton 
              style={{
                background: `linear-gradient(135deg, ${selectedCareer.color}, ${selectedCareer.color}dd)`,
                color: "white",
                border: "none",
                padding: "24px 32px"
              }}
            >
              <Modal.Title className="fw-bold fs-3">{selectedCareer.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ background: "#0f142d", color: "#fff", padding: "40px" }}>
              <img 
                src={selectedCareer.img} 
                alt={selectedCareer.titulo}
                style={{ 
                  width: "100%", 
                  borderRadius: "16px", 
                  marginBottom: "32px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                }}
              />
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
                    Duración: {selectedCareer.duracion}
                  </h5>
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
                    Oportunidades laborales
                  </h5>
                  <p style={{ margin: 0, lineHeight: "1.6", color: "#d0d0d0" }}>{selectedCareer.oportunidades}</p>
                </div>
              </div>
              <div className="mt-4">
                <Link to={`${RUTAS.CARRERAS}/${selectedCareer.id}`}>
                  <Button
                    style={{
                      background: "#0a1f44",
                      border: "none",
                      borderRadius: "50px",
                      padding: "14px 32px",
                      fontWeight: "600",
                      color: "#fff",
                      width: "100%",
                      fontSize: "1rem"
                    }}
                    onClick={() => setShowModal(false)}
                  >
                    Ver carrera completa <FaChevronRight />
                  </Button>
                </Link>
              </div>
            </Modal.Body>
            <Modal.Footer style={{ background: "#0f142d", border: "none", padding: "24px" }}>
              <Button
                style={{
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
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

      {/* CSS MEJORADO */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .hero-btn:hover {
          background: #0d2a5c !important;
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(10, 31, 68, 0.6) !important;
        }
        
        .career-card-home:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.2);
        }
        
        .career-card-home:hover .career-img-home {
          transform: scale(1.1);
        }
        
        .career-card-home:hover .career-overlay-home {
          height: 100%;
        }
        
        .btn-career-home:hover {
          background: #0d2a5c !important;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(10, 31, 68, 0.6);
        }
        
        .btn-all-careers:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 48px rgba(102, 126, 234, 0.6) !important;
        }
        
        .benefit-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.5);
          border-color: rgba(255,255,255,0.2);
        }
        
        .circle-container {
          position: relative;
          width: 500px;
          height: 500px;
          margin: 40px auto;
        }
        
        .circle-item {
          position: absolute;
          top: 42%;
          left: 42%;
          transform: rotate(var(--angle)) translate(200px) rotate(calc(-1 * var(--angle)));
          animation: orbit 25s linear infinite;
          transform-origin: center;
          cursor: pointer;
        }
        
        .circle-content {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          transition: all 0.3s ease;
          border: 2px solid rgba(255,255,255,0.2);
        }
        
        .circle-content:hover {
          transform: scale(1.2);
          box-shadow: 0 12px 48px rgba(0,0,0,0.5);
        }
        
        .circle-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 280px;
          height: 280px;
          border-radius: 50%;
          color: white;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 32px;
          box-shadow: 0 0 40px rgba(0,0,0,0.4);
          transition: all 0.5s ease;
          border: 3px solid rgba(255,255,255,0.2);
          backdrop-filter: blur(10px);
        }
        
        .social-icon:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: translateY(-4px);
        }
        
        @keyframes orbit {
          from {
            transform: rotate(var(--angle)) translate(200px) rotate(calc(-1 * var(--angle)));
          }
          to {
            transform: rotate(calc(var(--angle) + 360deg)) translate(200px) rotate(calc(-360deg - var(--angle)));
          }
        }
        
        @media (max-width: 768px) {
          .circle-container {
            width: 350px;
            height: 350px;
          }
          .circle-item {
            transform: rotate(var(--angle)) translate(140px) rotate(calc(-1 * var(--angle)));
          }
          .circle-center {
            width: 220px;
            height: 220px;
            padding: 20px;
          }
          .circle-content {
            width: 60px;
            height: 60px;
          }
        }
      `}</style>
    </div>
  );
}

export default Home;