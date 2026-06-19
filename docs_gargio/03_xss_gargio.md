# Descripción Técnica
Se identificó una vulnerabilidad XSS Almacenado (Stored XSS) en el módulo de apertura de "Tickets de Soporte Técnico" del portal de clientes. El payload malicioso se guarda en la base de datos y se ejecuta en el navegador del administrador de red cuando este revisa el ticket.

# Impacto en ConectaTel (ISP)
Si un técnico de NOC (Network Operations Center) abre el ticket infectado, el script puede robar su cookie de sesión (Session Hijacking). Con privilegios de administrador de red, el atacante tendría acceso al panel de monitoreo de tráfico, pudiendo visualizar patrones de navegación de clientes, degradar la calidad de servicio (QoS) o desviar tráfico hacia servidores maliciosos.