# Auditoría de Seguridad Web - ConectaTel (ISP)

Bienvenido al repositorio del proyecto final para la asignatura Fundamentos de Seguridad de la Información.

Este proyecto es una aplicación web interactiva que funciona como un informe ejecutivo. Su objetivo es presentar de manera clara y navegable los resultados de una auditoría de seguridad técnica realizada a "ConectaTel", un Proveedor de Servicios de Internet (ISP) ficticio.

## ¿De qué trata este proyecto?

En lugar de entregar un documento de texto tradicional, el análisis de seguridad se transformó en una plataforma web. El informe no solo muestra los ataques técnicos, sino que explica el impacto real para el negocio (como la pérdida de datos de clientes o caídas en la red).

### El proyecto integra dos elementos clave:

1- *El Análisis Técnico (Docs):* Archivos donde se explica paso a paso cómo funcionan los ataques, su nivel de gravedad (CVSS) y cómo solucionarlos.

2- *La Aplicación React:* La interfaz gráfica que da vida al texto, mostrando un menú lateral, las evidencias fotográficas y un mapa de calor visual para medir los riesgos.

## Vulnerabilidades Evaluadas

- Durante la auditoría (realizada en un entorno de pruebas controlado), se demostraron y documentaron tres fallas críticas:

- Inyección SQL (SQLi): Robo de bases de datos de clientes.

- Cross-Site Scripting (XSS Reflejado): Inyección de código malicioso para robar sesiones de administradores.

- Inyección de Comandos: Toma de control del servidor a través de herramientas de diagnóstico de red.

## Tecnologías Utilizadas

- React.js - Para construir la interfaz de usuario.

- Vite - Para hacer que el proyecto cargue y se actualice súper rápido.

- Tailwind CSS - Para dar estilo y aplicar la paleta de colores corporativa.

- Lucide React - Para los íconos de la aplicación.

- Vercel - Para publicar la página en internet.

## Cómo probar el proyecto en tu computadora

Si quieres ver el código funcionando en tu propia máquina, sigue estos sencillos pasos en tu terminal:

1- Clona este repositorio:

git clone https://github.com/GiovanniG-afk/auditoria_gargio.git


2- Entra a la carpeta del proyecto:

cd auditoria_gargio


3- Instala las herramientas necesarias:

npm install


4- Enciende el servidor de pruebas:

npm run dev


5- Abre tu navegador y escribe la dirección que aparecerá en tu pantalla (por lo general es http://localhost:5173).

Autor: GiovanniG-afk

*Proyecto académico desarrollado para INACAP Valparaíso.*
