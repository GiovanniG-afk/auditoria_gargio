# Descripción Técnica
La herramienta de diagnóstico de red (Ping Tool) disponible para clientes avanzados no valida correctamente las entradas. Utilizando operadores de control de shell como `;` o `&&`, es posible concatenar y ejecutar comandos de sistema operativo subyacentes con los privilegios del servidor web.

# Impacto en ConectaTel (ISP)
Este es el escenario más destructivo. El servidor web afectado tiene acceso de red hacia el Core Network de ConectaTel. Al ejecutar comandos a nivel de sistema (`cat /etc/passwd`, `ifconfig`, o abrir una reverse shell), el atacante establece una cabeza de playa en la red interna. Podría acceder a las configuraciones de los enrutadores BGP, provocando cortes masivos de internet a nivel regional o la interceptación del tráfico troncal.