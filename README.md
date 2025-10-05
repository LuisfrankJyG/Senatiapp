# SENATI App

Aplicación web desarrollada con React y Vite para el Servicio Nacional de Adiestramiento en Trabajo Industrial (SENATI).

## Integrantes

- LUIS FRANCISCO SOLANO CAMPOS
- JARIB JOSUE NOLE ANCAJIMA
- BRUNO FAVIAN SALDARRIAGA MEJIAS

## Posible problema

Al ejecutar 
```
npm run dev
```
Puede que salga este error o parecidos:
```
"vite" no se reconoce como un comando interno o externo,
programa o archivo por lotes ejecutable.
```

Para solucionarlo solo ejecute:
```
npm install vite --save-dev
```



## Características Principales

- Diseño moderno y responsivo utilizando React Bootstrap
- Navegación fluida con menú interactivo y anclajes suaves
- Animaciones y efectos visuales para mejorar la experiencia de usuario
- Integración de iconos de React Icons
- Página Home rediseñada para una experiencia más profesional y amigable
- Sección de Carreras con listado dinámico y navegación a detalle de cada carrera

## Actualizaciones Recientes

- **Home.jsx**: Se actualizó la página principal con un **diseño más profesional, amigable y entendible**, incluyendo hero con carousel, cards animadas y secciones informativas con estilo uniforme.  
- **Carreras.jsx**: Nueva página que lista todas las carreras disponibles de SENATI con cards interactivas, imágenes y descripciones resumidas.  
- **CarreraDetalle.jsx**: Página de detalle de cada carrera. Al seleccionar una carrera desde `Carreras.jsx`, se muestra información completa según su `id`, incluyendo:  
  - Descripción extendida  
  - Duración, perfil del egresado y oportunidades laborales  
  - Misión y visión  
  - Competencias y aprendizajes destacados con iconos  
  - Galería de imágenes y videos  
  - Modal informativo con todos los detalles  

## Página About.jsx

La página About.jsx incluye:

### Secciones Implementadas

- **Hero Section**: Banner principal con imagen de fondo y llamados a la acción  
- **Menú de Navegación**: Menú interactivo con iconos y etiquetas para navegar entre secciones  
- **Sobre Nosotros**: Información sobre la historia, misión y visión de SENATI  
- **Alianzas**: Sección con imagen de fondo a pantalla completa mostrando países aliados con efectos hover  
- **Valores**: Tarjetas interactivas que muestran los valores institucionales  
- **Convenios**: Espaciado mejorado entre secciones  
- **Programas**: Imagen de fondo a pantalla completa con efecto de difuminado  
- **Servicios**: Presentación de servicios educativos y empresariales  
- **Sedes**: Información sobre las diferentes sedes de SENATI  
- **Mapa**: Integración de Google Maps para mostrar ubicaciones  

### Mejoras Visuales Implementadas

- Imágenes de fondo a pantalla completa con efectos de difuminado  
- Espaciado adecuado entre secciones  
- Efectos de hover en tarjetas y elementos interactivos  
- Esquema de colores consistente con la identidad de SENATI (#00aaff y #0a39e6)  
- Menú secundario flotante que aparece al desplazarse  

## Estructura de Datos

El proyecto utiliza archivos de datos estructurados en `src/data/`:

- **carreras.js**: Contiene información detallada de todas las carreras técnicas ofrecidas por SENATI  
- **servicios.js**: Define los servicios educativos y empresariales disponibles  

Estos archivos permiten **gestión centralizada de la información**, facilitando actualizaciones sin modificar los componentes.

## Tecnologías Utilizadas

- React 18  
- Vite  
- React Bootstrap  
- React Icons  
- CSS personalizado con estilos en línea  

## Contact.jsx - Documentación de Cambios

Componente de formulario de contacto moderno y responsivo construido con React, Formik, Yup y React Bootstrap

### 1. Estructura del Componente
✅ Campos del Formulario

Nombre: Campo de texto requerido
Email: Campo de email con validación de formato
Mensaje: Textarea para mensajes largos

### 2. Librerias y dependencias

```
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useState } from 'react';
```

Nuevas dependencias añadidas:

react-bootstrap: Para componentes de layout (Container, Row, Col, Card)
useState: Para manejar el estado del hover en el botón


### 3. Diseño y Estilos
🎨 Background Principal
``` cssbackground: linear-gradient(135deg, #667eea 0%, #764ba2 100%) ```
Gradiente morado-índigo aplicado en toda la pantalla
🪟 Efectos Glassmorphism

Header: backdrop-filter: blur(10px) con fondo semitransparente
Footer: Mismo efecto de vidrio esmerilado
Card: rgba(255, 255, 255, 0.98) para mantener legibilidad

🎯 Estructura Visual
┌─────────────────────────────────┐
│         HEADER (Sticky)         │
├─────────────────────────────────┤
│                                 │
│         MAIN CONTENT            │
│    ┌───────────────────┐        │
│    │   Contact Card    │        │
│    │                   │        │
│    │  - Nombre         │        │
│    │  - Email          │        │
│    │  - Mensaje        │        │
│    │  [Botón Enviar]   │        │
│    └───────────────────┘        │
│                                 │
├─────────────────────────────────┤
│         FOOTER (Fixed)          │
└─────────────────────────────────┘

### 4. Validaciones con Yup
```
    javascriptvalidationSchema={Yup.object({
    nombre: Yup.string().required('Nombre requerido'),
    email: Yup.string().email('Email inválido').required('Email requerido'),
    mensaje: Yup.string().required('Mensaje requerido')
    })} 
```
Validaciones implementadas:

✅ Nombre: Campo obligatorio
✅ Email: Formato válido + obligatorio
✅ Mensaje: Campo obligatorio

### 5. Mensajes de Error
javascript
```
    <ErrorMessage 
    name="nombre" 
    component="div" 
    className="error-message"
    />
```
css
```
    .error-message {
    color: #dc2626;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    font-weight: 500;
    }
```

### 6. **Componentes React Bootstrap**

#### 📦 Container
Envuelve todo el contenido con márgenes responsivos automáticos

#### 📐 Row y Col
Sistema de grid para centrar y hacer responsivo el formulario:
```javascript
<Row className="justify-content-center">
    <Col xs={12} md={10} lg={8} xl={6}>
        {/* Formulario */}
    </Col>
</Row>
```

#### 🃏 Card
Tarjeta con header personalizado y body para el formulario.

---

### 7. **Interactividad**

#### 🖱️ Hover en Botón
```javascript
const [isHovered, setIsHovered] = useState(false);

<button 
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
>
    {isHovered ? '¡Enviar Ahora! 🚀' : 'Enviar Mensaje'}
</button>
```

#### ⚡ Efectos CSS
- Transiciones suaves en inputs al hacer focus
- Elevación del botón al hacer hover
- Animación de pulso en íconos del header

---

### 8. **Responsividad**

#### 📱 Mobile First
```css
@media (max-width: 768px) {
    .card-header-custom h2 {
        font-size: 2rem;
    }
    
    .card-body-custom {
        padding: 1.5rem 1rem;
    }
}
```

#### 📊 Breakpoints
- **xs**: Móviles (< 576px) - 100% ancho
- **md**: Tablets (≥ 768px) - 83% ancho
- **lg**: Desktop (≥ 992px) - 66% ancho
- **xl**: Pantallas grandes (≥ 1200px) - 50% ancho

---

### 9. **Header y Footer**

#### 🎯 Header
```javascript
<header className="header-section">
    <Container>
        <h1 className="header-title">
            <span className="icon-decoration">✉️</span>
            Portal de Contacto
            <span className="icon-decoration">✉️</span>
        </h1>
    </Container>
</header>
```

#### 🎯 Footer
```javascript
<footer className="footer-section">
    <Container>
        <p className="footer-text">
            Esta es la sección de CONTACTO © 2025 | Todos los derechos reservados
        </p>
    </Container>
</footer>
```

---

### 10. **Funcionalidad onSubmit**

```javascript
onSubmit={(values) => {
    console.log('Formulario enviado: ', values);
    alert('Formulario enviado con éxito');
}}
```

**Acciones al enviar:**
1. Imprime los valores en consola
2. Muestra un alert de confirmación

---

## 🚀 Características Destacadas

✨ **Diseño moderno y atractivo**
- Gradientes llamativos
- Efectos glassmorphism
- Sombras y bordes redondeados

🎨 **Totalmente personalizado con CSS**
- Sin dependencia excesiva de frameworks
- Estilos inline para casos específicos
- CSS modular y bien organizado

📱 **100% Responsivo**
- Se adapta a todos los dispositivos
- Grid system de Bootstrap
- Media queries para ajustes finos

✅ **Validación robusta**
- Validación en tiempo real
- Mensajes de error claros
- Feedback visual inmediato

🎭 **Animaciones sutiles**
- Transiciones suaves
- Efectos hover
- Experiencia de usuario mejorada

---

## 📦 Instalación de Dependencias

```bash
npm install formik yup react-bootstrap bootstrap
```

**Importar Bootstrap CSS en tu archivo principal:**
```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## 🔧 Uso del Componente

```javascript
import Contact from './components/Contact';

function App() {
    return (
        <div>
            <Contact />
        </div>
    );
}
```

---


Desarrollado usando React + Formik + Yup + Bootstrap

---

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```
