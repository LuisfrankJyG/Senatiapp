import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';

function Contact() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <style>{`
                .contact-wrapper {
                    background: linear-gradient(135deg, #0a1931 0%, #1e3c72 100%);
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                }

                .header-section {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 1.5rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
                }

                .header-title {
                    color: white;
                    font-size: 1.8rem;
                    font-weight: 700;
                    margin: 0;
                    text-align: center;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }

                .main-content {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding: 3rem 0;
                }

                .contact-card {
                    background: rgba(255, 255, 255, 0.98);
                    border-radius: 25px;
                    border: none;
                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
                    backdrop-filter: blur(10px);
                    overflow: hidden;
                }

                .card-header-custom {
                    background: linear-gradient(135deg, #0a2d5e);
                    padding: 2.5rem 2rem;
                    text-align: center;
                    border: none;
                }

                .card-header-custom h2 {
                    color: white;
                    font-size: 2.5rem;
                    font-weight: 700;
                    margin: 0 0 0.5rem 0;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }

                .card-header-custom p {
                    color: rgba(255, 255, 255, 0.95);
                    font-size: 1.1rem;
                    margin: 0;
                }

                .card-body-custom {
                    padding: 2.5rem 2rem;
                }

                .form-label-custom {
                    color: #4a5568;
                    font-weight: 600;
                    font-size: 0.95rem;
                    margin-bottom: 0.5rem;
                }

                .form-control-custom {
                    border: 2px solid #e2e8f0;
                    border-radius: 12px;
                    padding: 0.85rem 1rem;
                    font-size: 1rem;
                    transition: all 0.3s ease;
                    background-color: #f7fafc;
                }

                .form-control-custom:focus {
                    border-color: #667eea;
                    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
                    background-color: white;
                    outline: none;
                }

                .form-control-custom::placeholder {
                    color: #a0aec0;
                }

                .error-message {
                    color: #dc2626;
                    font-size: 0.875rem;
                    margin-top: 0.5rem;
                    font-weight: 500;
                    display: block;
                }

                .submit-button {
                    background: linear-gradient(135deg, #0a2d5e);
                    border: none;
                    color: white;
                    padding: 1rem 2rem;
                    font-size: 1.1rem;
                    font-weight: 600;
                    border-radius: 12px;
                    width: 100%;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                }

                .submit-button:hover {
                    transform: translateY(-2px);
                    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.6);
                }

                .submit-button:active {
                    transform: translateY(0);
                }

                .footer-section {
                    background: rgba(255, 255, 255, 0.1);
                    backdrop-filter: blur(10px);
                    padding: 1.5rem 0;
                    border-top: 1px solid rgba(255, 255, 255, 0.2);
                    margin-top: auto;
                }

                .footer-text {
                    color: white;
                    text-align: center;
                    margin: 0;
                    font-size: 0.95rem;
                    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
                }

                .icon-decoration {
                    display: inline-block;
                    margin: 0 0.5rem;
                    animation: pulse 2s infinite;
                }

                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.7; }
                }

                @media (max-width: 768px) {
                    .card-header-custom h2 {
                        font-size: 2rem;
                    }
                    
                    .card-body-custom {
                        padding: 1.5rem 1rem;
                    }
                    
                    .main-content {
                        padding: 2rem 0;
                    }
                }
            `}</style>

            <div className="contact-wrapper">
                {/* Header */}
                <header className="header-section">
                    <Container>
                        <h1 className="header-title">
                            <span className="icon-decoration">✉️</span>
                            Portal de Contacto
                            <span className="icon-decoration">✉️</span>
                        </h1>
                    </Container>
                </header>

                {/* Main Content */}
                <main className="main-content">
                    <Container>
                        <Row className="justify-content-center">
                            <Col xs={12} md={10} lg={8} xl={6}>
                                <Card className="contact-card">
                                    <div className="card-header-custom">
                                        <h2>Contáctanos</h2>
                                        <p>Nos encantaría saber de ti</p>
                                    </div>
                                    <div className="card-body-custom">
                                        <Formik
                                            initialValues={{ 
                                                nombre: '', 
                                                email: '',
                                                mensaje: ''
                                            }}
                                            validationSchema={Yup.object({
                                                nombre: Yup.string().required('Nombre requerido'),
                                                email: Yup.string().email('Email inválido').required('Email requerido'),
                                                mensaje: Yup.string().required('Mensaje requerido')
                                            })}
                                            onSubmit={(values) => {
                                                console.log('Formulario enviado: ', values);
                                                alert('Formulario enviado con éxito');
                                            }}
                                        >
                                            {({ handleSubmit }) => (
                                                <FormikForm onSubmit={handleSubmit}>
                                                    <div className="mb-4">
                                                        <label htmlFor="nombre" className="form-label-custom">
                                                            Nombre Completo
                                                        </label>
                                                        <Field 
                                                            name="nombre" 
                                                            type="text" 
                                                            placeholder="Ingresa tu nombre completo"
                                                            className="form-control-custom"
                                                        />
                                                        <ErrorMessage 
                                                            name="nombre" 
                                                            component="div" 
                                                            className="error-message"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="email" className="form-label-custom">
                                                            Correo Electrónico
                                                        </label>
                                                        <Field 
                                                            name="email" 
                                                            type="email" 
                                                            placeholder="tucorreo@ejemplo.com"
                                                            className="form-control-custom"
                                                        />
                                                        <ErrorMessage 
                                                            name="email" 
                                                            component="div" 
                                                            className="error-message"
                                                        />
                                                    </div>

                                                    <div className="mb-4">
                                                        <label htmlFor="mensaje" className="form-label-custom">
                                                            Mensaje
                                                        </label>
                                                        <Field 
                                                            name="mensaje" 
                                                            as="textarea" 
                                                            rows="5"
                                                            placeholder="Escribe tu mensaje aquí..."
                                                            className="form-control-custom"
                                                            style={{ resize: 'none' }}
                                                        />
                                                        <ErrorMessage 
                                                            name="mensaje" 
                                                            component="div" 
                                                            className="error-message"
                                                        />
                                                    </div>

                                                    <button 
                                                        type="submit" 
                                                        className="submit-button"
                                                        onMouseEnter={() => setIsHovered(true)}
                                                        onMouseLeave={() => setIsHovered(false)}
                                                    >
                                                        {isHovered ? '¡Enviar Ahora! 🚀' : 'Enviar Mensaje'}
                                                    </button>
                                                </FormikForm>
                                            )}
                                        </Formik>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </main>

                {/* Footer */}
                <footer className="footer-section">
                    <Container>
                        <p className="footer-text">
                            Esta es la sección de CONTACTO © 2025 | Todos los derechos reservados
                        </p>
                    </Container>
                </footer>
            </div>
        </>
    );
}

export default Contact;