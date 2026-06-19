# Descripción Técnica
Se detectó una vulnerabilidad de Inyección SQL ciega y basada en errores en el parámetro de búsqueda de contratos del portal de clientes. La falta de sanitización y el uso de consultas concatenadas permiten a un atacante alterar la sintaxis de la consulta original.

# Impacto en ConectaTel (ISP)
En el contexto de un ISP, la base de datos es el núcleo del negocio. Esta vulnerabilidad permite la extracción masiva de la base de datos de suscriptores, incluyendo nombres, direcciones, RUT/DNI, números de tarjetas de crédito asociadas a pagos recurrentes y los perfiles de velocidad/tráfico contratados. Un atacante podría incluso modificar su propio plan para obtener gigabits sin costo (fraude de telecomunicaciones).