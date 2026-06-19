# Resumen Ejecutivo

El presente documento detalla los resultados de la auditoría de seguridad técnica realizada al portal de autogestión y sistemas subyacentes de E09 ConectaTel Telecomunicaciones / ISP. La evaluación se centró en identificar vulnerabilidades que expongan datos de suscriptores, modifiquen planes de servicio o comprometan el tráfico de red.

# Contexto del Negocio Auditado
Empresa: ConectaTel Telecomunicaciones
Rubro: Proveedor de Servicios de Internet (ISP)
Criticidad: Alta. Manejo de PII (Información Personal Identificable), datos de facturación y control de infraestructura de enrutamiento.
Durante la auditoría (basada en el entorno de pruebas estandarizado), se identificaron hallazgos críticos de inyección y manipulación de scripts que, trasladados al contexto de ConectaTel, permitirían a un atacante comprometer la confidencialidad de los clientes y la disponibilidad de la red.