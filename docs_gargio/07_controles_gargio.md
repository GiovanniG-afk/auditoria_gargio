# Controles y Mitigación
Medidas técnicas y administrativas recomendadas para asegurar la infraestructura de ConectaTel y remediar los hallazgos.

## Mitigación SQLi
Implementar Consultas Preparadas (Parameterized Queries) mediante PDO (PHP Data Objects) o equivalentes en el backend del portal de clientes.
Aplicar el Principio de Menor Privilegio: El usuario de la base de datos usado por la web no debe tener permisos de escritura sobre tablas de facturación, ni acceso a la base de datos `information_schema`.
Implementar un Web Application Firewall (WAF) en el borde de la red para bloquear patrones anómalos (ej: `UNION SELECT`).
## Mitigación XSS
Codificación de salida (Output Encoding) al renderizar contenido de tickets de soporte en el panel administrativo.
Uso de bibliotecas de sanitización HTML como DOMPurify para limpiar los datos ingresados por usuarios antes de almacenarlos.
Implementar banderas `HttpOnly` y `Secure` en las cookies de sesión para evitar su robo mediante JavaScript.
Configurar cabeceras Content Security Policy (CSP) restrictivas.
## Mitigación de Comandos
Evitar realizar llamadas directas a comandos del sistema operativo (como `ping` en bash). Utilizar en su lugar librerías de red nativas del lenguaje de programación.
Si es absolutamente necesario ejecutar comandos, aplicar una lista blanca estricta (Allowlist) de IPs/Dominios válidos en formato de expresión regular, rechazando cualquier metacarácter (`;`, `|`, `&`).
Ejecutar el proceso del servidor web bajo un entorno enjaulado (Chroot/Jail) para limitar el acceso al sistema de archivos del SO.