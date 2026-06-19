# Recuperación (DRP)
Plan de Recuperación ante Desastres (Disaster Recovery Plan) adaptado para el escenario de compromiso masivo en ConectaTel.

## Escenario 1: Borrado/Robo de BD de Clientes
Contención: Aislar el servidor web de la base de datos principal y cortar acceso externo al portal de autogestión.
Notificación: Activar protocolo de notificación de brecha de datos (leyes de protección de datos locales).
Restauración: Recuperar base de datos desde el último backup offline no conectado a la red primaria (Cold Backup).
Verificación: Auditar logs para asegurar que el vector de ataque original (SQLi) haya sido parcheado antes de reactivar el portal.
## Escenario 2: Compromiso de Routers Core (vía RCE)
Contención: Desconexión física de la interfaz de administración afectada. Failover manual a hardware de red secundario.
Análisis: Revisión de tablas BGP y reglas de firewall inyectadas maliciosamente.
Erradicación: Reinstalación limpia del firmware de los enrutadores comprometidos (Wipe & Restore de golden images).
Recuperación: Restauración progresiva del tráfico troncal de clientes monitoreando anomalías de red.