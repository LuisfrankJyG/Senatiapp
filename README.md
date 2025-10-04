# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

-------------------------------

# SENATI App

Aplicación web desarrollada con React y Vite para el Servicio Nacional de Adiestramiento en Trabajo Industrial (SENATI).

## Características Principales

- Diseño moderno y responsivo utilizando React Bootstrap
- Navegación fluida con menú interactivo y anclajes suaves
- Animaciones y efectos visuales para mejorar la experiencia de usuario
- Integración de iconos de React Icons

## Página About.jsx

La página About.jsx es una de las principales secciones de la aplicación, que incluye:

### Secciones Implementadas

- **Hero Section**: Banner principal con imagen de fondo y llamados a la acción
- **Menú de Navegación**: Menú interactivo con iconos y etiquetas para navegar entre secciones
- **Sobre Nosotros**: Información sobre la historia, misión y visión de SENATI
- **Alianzas**: Sección con imagen de fondo a pantalla completa y efecto de difuminado, mostrando banderas de países aliados con efectos de hover
- **Valores**: Tarjetas interactivas que muestran los valores institucionales
- **Convenios**: Sección con espaciado mejorado para separación entre secciones
- **Programas**: Sección con imagen de fondo a pantalla completa y efecto de difuminado
- **Servicios**: Presentación de servicios educativos y empresariales
- **Sedes**: Información sobre las diferentes sedes de SENATI
- **Mapa**: Integración de Google Maps para mostrar ubicaciones

### Mejoras Visuales Implementadas

- Imágenes de fondo a pantalla completa con efectos de difuminado
- Espaciado adecuado entre secciones para mejorar la legibilidad
- Efectos de hover en tarjetas y elementos interactivos
- Esquema de colores consistente con la identidad de SENATI (#00aaff y #0a39e6)
- Menú secundario flotante que aparece al desplazarse

## Estructura de Datos

El proyecto utiliza archivos de datos estructurados ubicados en el directorio `src/data/`:

- **carreras.js**: Contiene información sobre las carreras técnicas ofrecidas por SENATI, incluyendo títulos, descripciones, duración y requisitos.
- **servicios.js**: Define los servicios educativos y empresariales que ofrece la institución.

Estos archivos de datos permiten una gestión centralizada de la información, facilitando su actualización y mantenimiento sin necesidad de modificar los componentes de React.

## Tecnologías Utilizadas

- React 18
- Vite
- React Bootstrap
- React Icons
- CSS personalizado con estilos en línea

## Instalación y Ejecución

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build
```
