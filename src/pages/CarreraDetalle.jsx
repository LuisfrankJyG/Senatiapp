import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { FaLaptopCode, FaPaintBrush, FaUtensils, FaHardHat, FaCarSide, FaUsers, FaRocket, FaProjectDiagram, FaDatabase, FaChevronRight, FaBriefcase, FaPlay } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

function CarreraDetalle() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState('mision');

  const carreras = [
    {
      id: "software",
      titulo: "Ingeniería de Software",
      descripcion: "Aprende a desarrollar soluciones tecnológicas innovadoras trabajando con herramientas modernas y metodologías ágiles.",
      duracion: "3 años",
      perfil: "Egresado capaz de diseñar, desarrollar y mantener aplicaciones innovadoras en entornos corporativos y startups.",
      oportunidades: "Empresas de tecnología, startups, consultoría en software, emprendimientos propios.",
      mision: "Formar profesionales capaces de liderar proyectos tecnológicos de alta complejidad y contribuir al desarrollo digital del país.",
      vision: "Ser referente en formación tecnológica innovadora, adaptándose a la evolución constante del sector IT.",
      competencias: [
        "Desarrollo de aplicaciones web y móviles",
        "Gestión de proyectos de software con metodologías ágiles",
        "Administración de bases de datos y cloud computing",
        "Innovación tecnológica y creatividad aplicada",
        "Trabajo en equipo y liderazgo"
      ],
      aprendizajes: [
        { icon: <FaLaptopCode size={40} />, texto: "Programación avanzada", color: "#667eea" },
        { icon: <FaDatabase size={40} />, texto: "Bases de datos y cloud", color: "#764ba2" },
        { icon: <FaProjectDiagram size={40} />, texto: "Gestión de proyectos", color: "#f093fb" },
        { icon: <FaUsers size={40} />, texto: "Trabajo en equipo", color: "#4facfe" },
        { icon: <FaRocket size={40} />, texto: "Innovación y creatividad", color: "#43e97b" },
      ],
      imagen: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200",
        "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?w=1200",
        "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200"
      ],
      video: "https://www.youtube.com/embed/httj0fgv-QY",
      colorPrimario: "#667eea",
      colorSecundario: "#764ba2"
    },
    {
      id: "diseno",
      titulo: "Diseño Gráfico",
      descripcion: "Explora tu creatividad con herramientas modernas y desarrolla proyectos de branding y comunicación visual.",
      duracion: "3 años",
      perfil: "Profesional creativo en comunicación visual, branding y publicidad, con capacidad de innovar en medios digitales.",
      oportunidades: "Agencias de publicidad, estudios de diseño, marketing digital, emprendimientos creativos.",
      mision: "Formar profesionales que combinen creatividad y técnica para comunicar visualmente ideas innovadoras.",
      vision: "Ser referente en educación de diseño gráfico aplicando tendencias globales y tecnología digital.",
      competencias: [
        "Diseño de identidad visual y branding",
        "Gestión de proyectos de diseño",
        "Marketing y comunicación visual",
        "Creatividad e innovación aplicada",
        "Trabajo en equipo interdisciplinario"
      ],
      aprendizajes: [
        { icon: <FaPaintBrush size={40} />, texto: "Creatividad visual", color: "#f093fb" },
        { icon: <FaUsers size={40} />, texto: "Comunicación y marketing", color: "#f5576c" },
        { icon: <FaProjectDiagram size={40} />, texto: "Gestión de proyectos", color: "#4facfe" },
        { icon: <FaRocket size={40} />, texto: "Innovación en branding", color: "#43e97b" },
      ],
      imagen: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200",
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200",
        "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=1200"
      ],
      video: "https://www.youtube.com/embed/ALC4OHGfz0Y",
      colorPrimario: "#f093fb",
      colorSecundario: "#f5576c"
    },
    {
      id: "gastronomia",
      titulo: "Gastronomía",
      descripcion: "Desarrolla habilidades culinarias con técnicas innovadoras y gestión profesional de cocina.",
      duracion: "3 años",
      perfil: "Chef con dominio en técnicas culinarias, innovación gastronómica y gestión de restaurantes.",
      oportunidades: "Hoteles, restaurantes, catering, emprendimientos gastronómicos propios.",
      mision: "Formar profesionales capaces de innovar en la gastronomía, combinando técnica, creatividad y gestión.",
      vision: "Ser reconocidos por la excelencia en formación culinaria y emprendimiento gastronómico.",
      competencias: [
        "Cocina internacional y regional",
        "Innovación gastronómica",
        "Gestión de restaurantes y negocios culinarios",
        "Higiene y seguridad alimentaria",
        "Trabajo en equipo y liderazgo culinario"
      ],
      aprendizajes: [
        { icon: <FaUtensils size={40} />, texto: "Cocina internacional", color: "#fa709a" },
        { icon: <FaRocket size={40} />, texto: "Innovación gastronómica", color: "#fee140" },
        { icon: <FaProjectDiagram size={40} />, texto: "Gestión de restaurantes", color: "#30cfd0" },
      ],
      imagen: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200",
        "https://blog-u-erre.talisis.com/hubfs/concepto-de-gastronomia.webp"
      ],
      video: "https://www.youtube.com/embed/OVWzU2Q2CLM",
      colorPrimario: "#fa709a",
      colorSecundario: "#fee140"
    },
    {
      id: "seguridad",
      titulo: "Seguridad Industrial",
      descripcion: "Desarrolla competencias en prevención de riesgos y gestión de seguridad en entornos industriales.",
      duracion: "3 años",
      perfil: "Profesional capacitado en prevención de riesgos, seguridad ocupacional y gestión de sistemas de calidad.",
      oportunidades: "Industrias manufactureras, mineras, construcción, consultoría en seguridad.",
      mision: "Formar profesionales comprometidos con la seguridad y salud ocupacional en entornos industriales.",
      vision: "Ser líderes en formación de especialistas en seguridad industrial con estándares internacionales.",
      competencias: [
        "Prevención de riesgos laborales",
        "Gestión de seguridad y salud ocupacional",
        "Normativa y legislación industrial",
        "Auditorías de seguridad",
        "Liderazgo y trabajo en equipo"
      ],
      aprendizajes: [
        { icon: <FaHardHat size={40} />, texto: "Prevención de riesgos", color: "#ffa751" },
        { icon: <FaProjectDiagram size={40} />, texto: "Gestión de seguridad", color: "#ffe259" },
        { icon: <FaUsers size={40} />, texto: "Trabajo en equipo", color: "#667eea" },
      ],
      imagen: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200",
        "https://unimeledu.com.mx/wp-content/uploads/2024/04/maestria-en-seguridad-industrial.webp",
        "https://www.senati.edu.pe/conexionsenati/wp-content/uploads/2024/06/Di%CC%81a-de-la-Industria-Nacional-02-scaled.jpg"
      ],
      video: "https://www.youtube.com/embed/wj3ClANSq5s",
      colorPrimario: "#ffa751",
      colorSecundario: "#ffe259"
    },
    {
      id: "mecanica",
      titulo: "Mecánica Automotriz",
      descripcion: "Domina el mantenimiento y reparación de vehículos con tecnología de última generación.",
      duracion: "3 años",
      perfil: "Técnico especializado en diagnóstico, mantenimiento y reparación de sistemas automotrices modernos.",
      oportunidades: "Talleres especializados, concesionarios, empresas de transporte, emprendimientos propios.",
      mision: "Formar técnicos competentes en mecánica automotriz con visión innovadora y práctica profesional.",
      vision: "Ser referente en formación técnica automotriz adaptada a las nuevas tecnologías vehiculares.",
      competencias: [
        "Diagnóstico y reparación de motores",
        "Sistemas eléctricos y electrónicos",
        "Mantenimiento preventivo y correctivo",
        "Innovación en tecnología automotriz",
        "Emprendimiento y gestión de talleres"
      ],
      aprendizajes: [
        { icon: <FaCarSide size={40} />, texto: "Diagnóstico automotriz", color: "#4facfe" },
        { icon: <FaProjectDiagram size={40} />, texto: "Gestión de talleres", color: "#00f2fe" },
        { icon: <FaRocket size={40} />, texto: "Innovación tecnológica", color: "#43e97b" },
      ],
      imagen: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200",
        "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200"
      ],
      video: "https://www.youtube.com/embed/Buo1bPfjBWE",
      colorPrimario: "#4facfe",
      colorSecundario: "#00f2fe"
    },
    {
      id: "administracion",
      titulo: "Administración de Empresas",
      descripcion: "Desarrolla habilidades gerenciales y estratégicas para liderar organizaciones exitosas.",
      duracion: "3 años",
      perfil: "Profesional con capacidad de gestionar empresas, liderar equipos y tomar decisiones estratégicas.",
      oportunidades: "Empresas corporativas, emprendimientos, consultoría, instituciones públicas y privadas.",
      mision: "Formar líderes empresariales con visión estratégica y compromiso con el desarrollo organizacional.",
      vision: "Ser reconocidos por la excelencia en formación gerencial y emprendimiento empresarial.",
      competencias: [
        "Gestión estratégica empresarial",
        "Liderazgo y dirección de equipos",
        "Marketing y ventas",
        "Finanzas y contabilidad gerencial",
        "Emprendimiento e innovación"
      ],
      aprendizajes: [
        { icon: <FaBriefcase size={40} />, texto: "Gestión estratégica", color: "#667eea" },
        { icon: <FaUsers size={40} />, texto: "Liderazgo empresarial", color: "#764ba2" },
        { icon: <FaRocket size={40} />, texto: "Emprendimiento", color: "#43e97b" },
      ],
      imagen: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      galeria: [
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200"
      ],
      video: "https://www.youtube.com/embed/KI8DoymajGY",
      colorPrimario: "#667eea",
      colorSecundario: "#764ba2"
    }
  ];

  const carrera = carreras.find(c => c.id === id);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    window.scrollTo(0, 0);
  }, [id]);

  if (!carrera) {
    return (
      <Container className="py-5 text-center" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#0a0e27" }}>
        <div>
          <h2 style={{ color: "#fff", fontSize: "3rem" }}>Carrera no encontrada</h2>
          <p style={{ color: "#a0a0a0" }}>La carrera que buscas no existe en nuestro catálogo.</p>
        </div>
      </Container>
    );
  }

  return (
    <div style={{ fontFamily: "'Poppins', sans-serif", background: "#0a0e27", color: "#fff", minHeight: "100vh" }}>
      
      {/* HERO SECTION PREMIUM */}
      <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            backgroundImage: `url(${carrera.imagen})`, 
            backgroundSize: "cover", 
            backgroundPosition: "center",
            filter: "brightness(0.4)",
            transform: "scale(1.1)"
          }}
        />
        <div 
          style={{ 
            position: "absolute", 
            top: 0, 
            left: 0, 
            width: "100%", 
            height: "100%", 
            background: `linear-gradient(135deg, ${carrera.colorPrimario}15, ${carrera.colorSecundario}15)`,
            backdropFilter: "blur(2px)"
          }}
        />
        <Container style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", zIndex: 2 }}>
          <div style={{ maxWidth: "800px", animation: "slideUp 1s ease-out" }}>
            <div 
              style={{ 
                display: "inline-block", 
                padding: "8px 24px", 
                background: `linear-gradient(135deg, ${carrera.colorPrimario}, ${carrera.colorSecundario})`,
                borderRadius: "50px",
                fontSize: "0.9rem",
                fontWeight: "600",
                marginBottom: "24px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
              }}
            >
              Duración: {carrera.duracion}
            </div>
            <h1 
              className="display-2 fw-bold mb-4" 
              style={{ 
                lineHeight: "1.2",
                textShadow: "0 4px 20px rgba(0,0,0,0.5)",
                fontSize: "clamp(2.5rem, 6vw, 5rem)"
              }}
            >
              {carrera.titulo}
            </h1>
            <p className="fs-4 mb-5" style={{ lineHeight: "1.6", color: "#e0e0e0" }}>
              {carrera.descripcion}
            </p>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
              <Button 
                className="btn-premium" 
                style={{ 
                  background: "#0a1f44",
                  border: "none",
                  borderRadius: "50px",
                  padding: "16px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  color: "#fff"
                }} 
                onClick={() => setShowModal(true)}
              >
                Información completa <FaChevronRight />
              </Button>
              <Button 
                className="btn-outline-premium" 
                style={{ 
                  background: "#0a1f44",
                  border: "2px solid #0a1f44",
                  borderRadius: "50px",
                  padding: "16px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  color: "#fff",
                  backdropFilter: "blur(10px)"
                }}
                onClick={() => document.getElementById('video-section').scrollIntoView({ behavior: 'smooth' })}
              >
                <FaPlay style={{ marginRight: "8px" }} /> Ver video
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* TABS SECTION */}
      <Container className="py-5" style={{ marginTop: "-80px", position: "relative", zIndex: 10 }}>
        <div 
          style={{ 
            background: "rgba(15, 20, 45, 0.95)",
            backdropFilter: "blur(20px)",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
            border: "1px solid rgba(255,255,255,0.1)"
          }}
        >
          <div style={{ display: "flex", gap: "20px", marginBottom: "40px", flexWrap: "wrap", justifyContent: "center" }}>
            {['mision', 'vision', 'competencias'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: activeTab === tab ? `linear-gradient(135deg, ${carrera.colorPrimario}, ${carrera.colorSecundario})` : "transparent",
                  border: activeTab === tab ? "none" : "2px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  padding: "12px 32px",
                  borderRadius: "50px",
                  fontSize: "1rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "capitalize"
                }}
                className="tab-button"
              >
                {tab}
              </button>
            ))}
          </div>

          <div style={{ minHeight: "200px" }}>
            {activeTab === 'mision' && (
              <div style={{ animation: "fadeIn 0.5s" }}>
                <h3 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>Misión</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#d0d0d0" }}>{carrera.mision}</p>
              </div>
            )}
            {activeTab === 'vision' && (
              <div style={{ animation: "fadeIn 0.5s" }}>
                <h3 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>Visión</h3>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#d0d0d0" }}>{carrera.vision}</p>
              </div>
            )}
            {activeTab === 'competencias' && (
              <div style={{ animation: "fadeIn 0.5s" }}>
                <h3 className="fw-bold mb-4" style={{ fontSize: "2rem" }}>Competencias Profesionales</h3>
                <Row className="g-3">
                  {carrera.competencias.map((comp, i) => (
                    <Col md={6} key={i}>
                      <div 
                        style={{ 
                          padding: "20px",
                          background: "rgba(255,255,255,0.05)",
                          borderRadius: "16px",
                          border: "1px solid rgba(255,255,255,0.1)",
                          display: "flex",
                          alignItems: "center",
                          gap: "16px",
                          transition: "all 0.3s ease"
                        }}
                        className="competencia-item"
                      >
                        <div 
                          style={{ 
                            width: "48px",
                            height: "48px",
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${carrera.colorPrimario}, ${carrera.colorSecundario})`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            flexShrink: 0
                          }}
                        >
                          {i + 1}
                        </div>
                        <span style={{ fontSize: "1rem", lineHeight: "1.5" }}>{comp}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>
            )}
          </div>
        </div>
      </Container>

      {/* APRENDIZAJES DESTACADOS */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Aprendizajes Destacados</h2>
          <p style={{ fontSize: "1.2rem", color: "#a0a0a0", maxWidth: "700px", margin: "0 auto" }}>
            Desarrolla las habilidades más demandadas en el mercado laboral
          </p>
        </div>
        <Row className="g-4">
          {carrera.aprendizajes.map((item, i) => (
            <Col md={6} lg={4} key={i}>
              <div 
                className="aprendizaje-card"
                style={{ 
                  background: "rgba(15, 20, 45, 0.8)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "24px",
                  padding: "40px",
                  textAlign: "center",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.4s ease",
                  height: "100%",
                  position: "relative",
                  overflow: "hidden"
                }}
              >
                <div 
                  style={{ 
                    width: "100px",
                    height: "100px",
                    margin: "0 auto 24px",
                    borderRadius: "24px",
                    background: `linear-gradient(135deg, ${item.color}30, ${item.color}10)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: item.color,
                    position: "relative",
                    zIndex: 2
                  }}
                >
                  {item.icon}
                </div>
                <h4 className="fw-bold" style={{ fontSize: "1.3rem", marginBottom: "16px" }}>
                  {item.texto}
                </h4>
                <div 
                  style={{ 
                    position: "absolute",
                    bottom: "-50px",
                    right: "-50px",
                    width: "150px",
                    height: "150px",
                    borderRadius: "50%",
                    background: `linear-gradient(135deg, ${item.color}20, ${item.color}05)`,
                    filter: "blur(40px)",
                    zIndex: 1
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* VIDEO SECTION */}
      <div id="video-section" style={{ background: "rgba(15, 20, 45, 0.5)", padding: "80px 0" }}>
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Conoce más sobre la carrera</h2>
            <p style={{ fontSize: "1.2rem", color: "#a0a0a0" }}>
              Descubre todo lo que puedes lograr en {carrera.titulo}
            </p>
          </div>
          <div 
            style={{ 
              maxWidth: "900px",
              margin: "0 auto",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
              position: "relative",
              paddingBottom: "56.25%",
              height: 0
            }}
          >
            <iframe
              src={carrera.video}
              title="Video de la carrera"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none"
              }}
            />
          </div>
        </Container>
      </div>

      {/* GALERÍA PREMIUM */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="display-4 fw-bold mb-3">Galería de Imágenes</h2>
          <p style={{ fontSize: "1.2rem", color: "#a0a0a0" }}>
            Explora nuestras instalaciones y experiencias de aprendizaje
          </p>
        </div>
        <Row className="g-4">
          {carrera.galeria.map((img, i) => (
            <Col md={4} key={i}>
              <div 
                className="gallery-item"
                onClick={() => setSelectedImage(img)}
                style={{ 
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: "300px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                }}
              >
                <img 
                  src={img} 
                  alt={`Galería ${i + 1}`}
                  style={{ 
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                />
                <div 
                  className="gallery-overlay"
                  style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(135deg, ${carrera.colorPrimario}00, ${carrera.colorSecundario}90)`,
                    opacity: 0,
                    transition: "opacity 0.4s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "3rem"
                  }}
                >
                  🔍
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* PERFIL DEL EGRESADO */}
      <div style={{ background: "rgba(15, 20, 45, 0.5)", padding: "80px 0" }}>
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6}>
              <div style={{ animation: "slideRight 1s ease-out" }}>
                <h2 className="display-4 fw-bold mb-4">Perfil del Egresado</h2>
                <p style={{ fontSize: "1.2rem", lineHeight: "1.8", color: "#d0d0d0", marginBottom: "32px" }}>
                  {carrera.perfil}
                </p>
                <div 
                  style={{ 
                    padding: "32px",
                    background: `linear-gradient(135deg, ${carrera.colorPrimario}20, ${carrera.colorSecundario}20)`,
                    borderRadius: "20px",
                    border: "1px solid rgba(255,255,255,0.1)"
                  }}
                >
                  <h4 className="fw-bold mb-3" style={{ fontSize: "1.5rem" }}>Oportunidades Laborales</h4>
                  <p style={{ fontSize: "1.1rem", lineHeight: "1.6", margin: 0 }}>
                    {carrera.oportunidades}
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div 
                style={{ 
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                  animation: "slideLeft 1s ease-out"
                }}
              >
                <img 
                  src={carrera.galeria[1] || carrera.imagen} 
                  alt="Perfil del egresado"
                  style={{ 
                    width: "100%",
                    height: "500px",
                    objectFit: "cover"
                  }}
                />
                <div 
                  style={{ 
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    padding: "32px",
                    background: `linear-gradient(to top, ${carrera.colorPrimario}dd, transparent)`,
                    backdropFilter: "blur(10px)"
                  }}
                >
                  <h3 className="fw-bold" style={{ fontSize: "2rem" }}>Tu futuro comienza aquí</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CTA SECTION */}
      <Container className="py-5 text-center">
        <div 
          style={{ 
            background: `linear-gradient(135deg, ${carrera.colorPrimario}, ${carrera.colorSecundario})`,
            borderRadius: "32px",
            padding: "80px 40px",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.4)"
          }}
        >
          <div style={{ position: "relative", zIndex: 2 }}>
            <h2 className="display-3 fw-bold mb-4">¿Listo para comenzar?</h2>
            <p className="fs-4 mb-5" style={{ maxWidth: "700px", margin: "0 auto 40px" }}>
              Da el primer paso hacia tu futuro profesional en {carrera.titulo}
            </p>
            <Button 
              className="btn-cta-premium"
              style={{ 
                background: "#0a1f44",
                color: "#fff",
                border: "none",
                borderRadius: "50px",
                padding: "20px 50px",
                fontSize: "1.2rem",
                fontWeight: "700",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
              }}
              onClick={() => setShowModal(true)}
            >
              Más información
            </Button>
          </div>
          <div 
            style={{ 
              position: "absolute",
              top: "-100px",
              right: "-100px",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(60px)"
            }}
          />
          <div 
            style={{ 
              position: "absolute",
              bottom: "-150px",
              left: "-150px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(80px)"
            }}
          />
        </div>
      </Container>

      {/* MODAL COMPLETO */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header 
          closeButton 
          style={{ 
            background: `linear-gradient(135deg, ${carrera.colorPrimario}, ${carrera.colorSecundario})`,
            color: "#fff",
            border: "none",
            padding: "24px"
          }}
        >
          <Modal.Title className="fw-bold fs-3">{carrera.titulo}</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#0f142d", color: "#fff", padding: "40px" }}>
          <img 
            src={carrera.imagen} 
            alt={carrera.titulo} 
            style={{ 
              width: "100%",
              borderRadius: "16px",
              marginBottom: "32px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
            }} 
          />
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginBottom: "32px" }}>
            {carrera.descripcion}
          </p>
          <div style={{ display: "grid", gap: "24px" }}>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario }}>Duración:</strong> {carrera.duracion}
            </div>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario }}>Perfil del egresado:</strong> {carrera.perfil}
            </div>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario }}>Oportunidades laborales:</strong> {carrera.oportunidades}
            </div>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario }}>Misión:</strong> {carrera.mision}
            </div>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario }}>Visión:</strong> {carrera.vision}
            </div>
            <div 
              style={{ 
                padding: "20px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >
              <strong style={{ color: carrera.colorPrimario, display: "block", marginBottom: "12px" }}>Competencias:</strong>
              <ul style={{ margin: 0, paddingLeft: "20px" }}>
                {carrera.competencias.map((c, i) => (
                  <li key={i} style={{ marginBottom: "8px", lineHeight: "1.6" }}>{c}</li>
                ))}
              </ul>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer style={{ background: "#0f142d", border: "none", padding: "24px" }}>
          <Button 
            style={{ 
              background: "#0a1f44",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "12px 32px",
              fontWeight: "600",
              fontSize: "1rem"
            }} 
            onClick={() => setShowModal(false)}
          >
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>

      {/* MODAL IMAGEN */}
      <Modal show={selectedImage !== null} onHide={() => setSelectedImage(null)} centered size="xl">
        <Modal.Body style={{ background: "#000", padding: 0 }}>
          <img 
            src={selectedImage} 
            alt="Imagen ampliada" 
            style={{ width: "100%", display: "block" }}
            onClick={() => setSelectedImage(null)}
          />
        </Modal.Body>
      </Modal>

      {/* FOOTER PREMIUM */}
      <footer 
        style={{ 
          background: "linear-gradient(to right, #0a0e27, #0f142d)",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          padding: "60px 0 30px"
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
            <Col md={4}>
              <h5 className="fw-bold mb-3">Síguenos</h5>
              <div style={{ display: "flex", gap: "16px" }}>
                {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map(social => (
                  <div 
                    key={social}
                    style={{ 
                      width: "45px",
                      height: "45px",
                      borderRadius: "12px",
                      background: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.3s ease"
                    }}
                    className="social-icon"
                  >
                    {social[0]}
                  </div>
                ))}
              </div>
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

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .btn-premium:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 12px 40px rgba(10, 31, 68, 0.6) !important;
          background: #0d2a5c !important;
        }
        .btn-outline-premium:hover {
          background: #0d2a5c !important;
          border-color: #0d2a5c !important;
          transform: translateY(-2px);
        }
        .btn-cta-premium:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 12px 48px rgba(10, 31, 68, 0.7) !important;
          background: #0d2a5c !important;
        }
        .tab-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .aprendizaje-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.6);
          border-color: rgba(255,255,255,0.2);
        }
        .gallery-item:hover img {
          transform: scale(1.1);
        }
        .gallery-item:hover .gallery-overlay {
          opacity: 1;
        }
        .competencia-item:hover {
          background: rgba(255,255,255,0.08) !important;
          transform: translateX(8px);
        }
        .social-icon:hover {
          background: rgba(255,255,255,0.2) !important;
          transform: translateY(-4px);
        }
      `}</style>
    </div>
  );
}

export default CarreraDetalle;