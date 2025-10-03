import { useEffect, useState } from "react";
import { Container, Carousel, Row, Col, Card, Button, Modal } from "react-bootstrap";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaIndustry,
  FaGlobe,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const [selectedInfo, setSelectedInfo] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState(null);

  const infoSenati = [
    { icon: <FaUserGraduate size={30} />, titulo: "Formación Dual", desc: "Aprende en las aulas y en la industria al mismo tiempo." },
    { icon: <FaLaptopCode size={30} />, titulo: "Tecnología", desc: "Equipos modernos y entornos digitales avanzados." },
    { icon: <FaIndustry size={30} />, titulo: "Vinculación Industrial", desc: "Alianzas estratégicas con empresas líderes del país." },
    { icon: <FaGlobe size={30} />, titulo: "Proyección Internacional", desc: "Programas con visión global y oportunidades en el extranjero." },
    { icon: <FaUtensils size={30} />, titulo: "Diversidad de Carreras", desc: "Desde tecnología hasta gastronomía, elige tu camino." },
  ];

  const carreras = [
    {
      titulo: "Ingeniería de Software",
      img: "https://pregrado.upc.edu.pe/facultad-de-ingenieria/ingenieria-de-software/img/Malla_curricular_especializada.jpg",
      desc: "Forma parte de la revolución digital desarrollando soluciones tecnológicas.",
      duracion: "3 años",
      perfil: "Egresado capaz de diseñar, desarrollar y mantener aplicaciones innovadoras.",
      oportunidades: "Empresas de tecnología, startups, consultoría en software."
    },
    {
      titulo: "Diseño Gráfico",
      img: "https://www.senati.edu.pe/sites/default/files/2017/carrera/11/carrera-dual-diseno-grafico-senati-1800x1190.jpg",
      desc: "Explora tu creatividad con las mejores herramientas y técnicas modernas.",
      duracion: "3 años",
      perfil: "Profesional creativo en comunicación visual, branding y publicidad.",
      oportunidades: "Agencias de publicidad, estudios de diseño, marketing digital."
    },
    {
      titulo: "Gastronomía",
      img: "https://blog-u-erre.talisis.com/hubfs/concepto-de-gastronomia.webp",
      desc: "Desarrolla tus habilidades culinarias con calidad internacional.",
      duracion: "3 años",
      perfil: "Chef con dominio en técnicas culinarias, innovación gastronómica y gestión de restaurantes.",
      oportunidades: "Hoteles, restaurantes, catering, emprendimientos propios."
    },
    {
      titulo: "Seguridad Industrial",
      img: "https://microsegur.com/wp-content/uploads/2025/04/proyectos-de-seguridad-industrial.jpg",
      desc: "Especialízate en prevención y seguridad laboral para industrias modernas.",
      duracion: "3 años",
      perfil: "Técnico especialista en prevención de riesgos laborales e industriales.",
      oportunidades: "Empresas mineras, constructoras, manufactura, auditorías de seguridad."
    },
    {
      titulo: "Mecánica Automotriz",
      img: "https://www.senati.edu.pe/sites/default/files/2017/carrera/09/mecanica-automotriz-senati1800-x-1190_0.jpg",
      desc: "Conviértete en experto en mantenimiento y reparación de vehículos.",
      duracion: "3 años",
      perfil: "Especialista en diagnóstico, reparación y mantenimiento automotriz.",
      oportunidades: "Talleres, concesionarios, empresas de transporte y logística."
    },
    {
      titulo: "Administración de Empresas",
      img: "https://uni.edu.gt/wp-content/uploads/sites/19/2024/04/Administracion-de-Empresas-Concepto-y-Funciones3.jpg",
      desc: "Desarrolla habilidades de liderazgo y gestión para dirigir organizaciones con éxito.",
      duracion: "3 años",
      perfil: "Profesional en gestión empresarial, finanzas, marketing y recursos humanos.",
      oportunidades: "Empresas privadas, instituciones públicas, consultoría, emprendimientos."
    },
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleShowModal = (carrera) => {
    setSelectedCareer(carrera);
    setShowModal(true);
  };

  return (
    <div
      style={{
        fontFamily: "'Montserrat', sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a1931 0%, #1e3c72 100%)",
        color: "white",
      }}
    >
      <Container className="py-5">
        {/* Hero con Carousel */}
        <Carousel fade className="mb-5 shadow-lg rounded overflow-hidden">
          <Carousel.Item>
            <img className="d-block w-100"
              src="https://blogconexion.senati.edu.pe/wp-content/uploads/2022/08/3P-SENATI.png"
              alt="Primera"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="fw-bold">Bienvenido a SENATI</h3>
              <p>Formando profesionales para el futuro.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100"
              src="https://techsenati.edu.pe/wp-content/uploads/2025/05/Portada-TECH-scaled.jpg"
              alt="Segunda"
              style={{ maxHeight: "500px", objectFit: "cover" }}
            />
            <Carousel.Caption>
              <h3 className="fw-bold">Tecnología e Innovación</h3>
              <p>Educación de calidad con visión global.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        {/* Carreras */}
        <h2 className="text-center fw-bold mb-4">Nuestras Carreras</h2>
        <Row className="g-4">
          {carreras.map((carrera, i) => (
            <Col lg={4} md={6} key={i}>
              <Card className="h-100 shadow-lg border-0 text-center card-hover rounded-4"
                style={{ transition: "transform 0.3s, box-shadow 0.3s" }}
              >
                <div style={{ overflow: "hidden", height: "220px" }}>
                  <Card.Img variant="top" src={carrera.img} alt={carrera.titulo}
                    style={{ objectFit: "cover", height: "100%", width: "100%", transition: "transform 0.5s ease" }}
                    className="img-hover"
                  />
                </div>
                <Card.Body>
                  <Card.Title className="fw-bold" style={{ color: "#0a1931" }}>{carrera.titulo}</Card.Title>
                  <Card.Text className="text-muted">{carrera.desc}</Card.Text>
                  <Button
                    style={{ backgroundColor: "#0a1931", border: "none", borderRadius: "30px", padding: "10px 20px", fontWeight: "600" }}
                    className="btn-hover"
                    onClick={() => handleShowModal(carrera)}
                  >
                    Más información <FaChevronRight />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Ruleta SENATI */}
        <h2 className="text-center fw-bold my-5">¿Por qué elegir SENATI?</h2>
        <div className="circle-container">
          {infoSenati.map((item, index) => {
            const angle = (index / infoSenati.length) * 360;
            return (
              <div key={index} className="circle-item" style={{ "--angle": `${angle}deg` }} onClick={() => setSelectedInfo(index)}>
                <div className="circle-content">{item.icon}</div>
              </div>
            );
          })}
          <div className="circle-center text-center">
            <h4 className="fw-bold">{infoSenati[selectedInfo].titulo}</h4>
            <p>{infoSenati[selectedInfo].desc}</p>
          </div>
        </div>
      </Container>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <Container>
          <p className="mb-0">© 2025 SENATI. Todos los derechos reservados.</p>
        </Container>
      </footer>

      {/* Modal con más info */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        {selectedCareer && (
          <>
            <Modal.Header closeButton style={{ backgroundColor: "#0a1931", color: "white" }}>
              <Modal.Title className="fw-bold">{selectedCareer.titulo}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedCareer.img} alt={selectedCareer.titulo}
                style={{ width: "100%", borderRadius: "12px", marginBottom: "20px" }}
              />
              <p style={{ color: "#333" }}>{selectedCareer.desc}</p>
              <ul style={{ color: "#333", textAlign: "left" }}>
                <li><strong>Duración:</strong> {selectedCareer.duracion}</li>
                <li><strong>Perfil del egresado:</strong> {selectedCareer.perfil}</li>
                <li><strong>Oportunidades laborales:</strong> {selectedCareer.oportunidades}</li>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button style={{ backgroundColor: "#0a1931", border: "none", borderRadius: "30px", padding: "8px 20px", fontWeight: "600" }}
                onClick={() => setShowModal(false)}
              >
                Cerrar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>

      {/* CSS */}
      <style>{`
        .card-hover:hover { transform: translateY(-8px); box-shadow: 0 8px 20px rgba(0,0,0,0.25); }
        .img-hover:hover { transform: scale(1.1); }
        .btn-hover:hover { transform: scale(1.05); background-color: #13294b !important; }
        .circle-container { position: relative; width: 500px; height: 500px; margin: 40px auto; }
        .circle-item { position: absolute; top: 44%; left: 44%; transform: rotate(var(--angle)) translate(200px) rotate(calc(-1 * var(--angle))); animation: orbit 25s linear infinite; transform-origin: center; }
        .circle-content { width: 70px; height: 70px; border-radius: 50%; background: white; color: #0a1931; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.2); transition: transform 0.3s; }
        .circle-content:hover { transform: scale(1.2); }
        .circle-center { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 250px; height: 250px; border-radius: 50%; background: #0a1931; color: white; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px; box-shadow: 0 0 20px rgba(0,0,0,0.3); }
        @keyframes orbit { from { transform: rotate(var(--angle)) translate(200px) rotate(calc(-1 * var(--angle))); } to { transform: rotate(calc(var(--angle) + 360deg)) translate(200px) rotate(calc(-360deg - var(--angle))); } }
      `}</style>
    </div>
  );
}

export default Home;
