import React, { useState } from 'react';
import { 
  Shield, 
  Database, 
  Code, 
  Terminal, 
  Server, 
  Grid, 
  CheckSquare, 
  LifeBuoy, 
  MessageSquare, 
  Menu, 
  X, 
  Activity,
  AlertTriangle,
  Lock,
  Sun,
  Moon
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('resumen');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Función de ayuda (bypass) para garantizar que los colores se apliquen 
  // independientemente de la configuración de Tailwind local.
  const t = (lightClass, darkClass) => isDarkMode ? darkClass : lightClass;

  const navigation = [
    { id: 'resumen', name: '01. Resumen Ejecutivo', icon: <Activity className="w-5 h-5" /> },
    { id: 'sqli', name: '02. Inyección SQL', icon: <Database className="w-5 h-5" /> },
    { id: 'xss', name: '03. Cross-Site Scripting (XSS)', icon: <Code className="w-5 h-5" /> },
    { id: 'comandos', name: '04. Inyección de Comandos', icon: <Terminal className="w-5 h-5" /> },
    { id: 'activos', name: '05. Activos de Información', icon: <Server className="w-5 h-5" /> },
    { id: 'matriz', name: '06. Matriz de Riesgos', icon: <Grid className="w-5 h-5" /> },
    { id: 'controles', name: '07. Controles y Mitigación', icon: <CheckSquare className="w-5 h-5" /> },
    { id: 'recuperacion', name: '08. Recuperación (DRP)', icon: <LifeBuoy className="w-5 h-5" /> },
    { id: 'prompts', name: '09. Bitácora IA', icon: <MessageSquare className="w-5 h-5" /> },
  ];

  const ImagePlaceholder = ({ src, alt, caption }) => (
    <div className={`my-6 border rounded-lg overflow-hidden shadow-sm transition-colors duration-300 ${t('border-[#a8e0ff] bg-[#f8fbff]', 'border-[#574b60] bg-[#574b60]')}`}>
      <div className="flex flex-col items-center justify-center p-8 min-h-[200px] relative group">
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full h-auto object-contain z-10 rounded shadow-sm"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
        <div className={`hidden flex-col items-center justify-center opacity-80 absolute inset-0 transition-colors duration-300 ${t('text-[#3e517a] bg-[#eef7ff]', 'text-[#a8e0ff] bg-[#3f334d]/95')}`}>
          <AlertTriangle className="w-12 h-12 mb-2 text-[#b08ea2]" />
          <p className="font-mono text-sm">[Imagen: {src}]</p>
          <p className="text-xs mt-1 opacity-75">Falta la captura en la carpeta local</p>
        </div>
      </div>
      <div className={`text-sm py-2 px-4 text-center font-mono border-t transition-colors duration-300 ${t('bg-[#3e517a] text-[#a8e0ff] border-[#70cad1]', 'bg-[#3f334d] text-[#a8e0ff] border-[#574b60]')}`}>
        {caption}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'resumen':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Resumen Ejecutivo</h1>
            <p className={`text-lg mb-6 leading-relaxed transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              El presente documento detalla los resultados de la auditoría de seguridad técnica realizada al portal de autogestión y sistemas subyacentes de <strong className={t('', 'text-white')}>E09 ConectaTel Telecomunicaciones / ISP</strong>. La evaluación se centró en identificar vulnerabilidades que expongan datos de suscriptores, modifiquen planes de servicio o comprometan el tráfico de red.
            </p>
            <div className={`border-l-4 p-6 rounded-r-lg shadow-sm mb-6 transition-colors duration-300 ${t('bg-[#f0f9ff] border-[#3e517a]', 'bg-[#574b60] border-[#70cad1]')}`}>
              <h3 className={`text-xl font-semibold mb-3 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Contexto del Negocio Auditado</h3>
              <ul className={`space-y-2 ${t('text-gray-700', 'text-gray-300')}`}>
                <li><strong className={t('text-[#3e517a]', 'text-[#a8e0ff]')}>Empresa:</strong> ConectaTel Telecomunicaciones</li>
                <li><strong className={t('text-[#3e517a]', 'text-[#a8e0ff]')}>Rubro:</strong> Proveedor de Servicios de Internet (ISP)</li>
                <li><strong className={t('text-[#3e517a]', 'text-[#a8e0ff]')}>Criticidad:</strong> Alta. Manejo de PII (Información Personal Identificable), datos de facturación y control de infraestructura de enrutamiento.</li>
              </ul>
            </div>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Durante la auditoría (basada en el entorno de pruebas estandarizado), se identificaron hallazgos críticos de inyección y manipulación de scripts que, trasladados al contexto de ConectaTel, permitirían a un atacante comprometer la confidencialidad de los clientes y la disponibilidad de la red.
            </p>
          </div>
        );

      case 'sqli':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Inyección SQL (SQLi)</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#b08ea2] text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">CRÍTICO</span>
              <span className={`font-mono text-sm border px-2 py-1 rounded transition-colors duration-300 ${t('text-gray-600 border-gray-300', 'text-gray-400 border-[#574b60]')}`}>CVSS: 8.5</span>
            </div>

            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Descripción Técnica</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Se detectó una vulnerabilidad de Inyección SQL ciega y basada en errores en el parámetro de búsqueda de contratos del portal de clientes. La falta de sanitización y el uso de consultas concatenadas permiten a un atacante alterar la sintaxis de la consulta original.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Impacto en ConectaTel (ISP)</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              En el contexto de un ISP, la base de datos es el núcleo del negocio. Esta vulnerabilidad permite la <strong className={t('', 'text-white')}>extracción masiva de la base de datos de suscriptores</strong>, incluyendo nombres, direcciones, RUT/DNI, números de tarjetas de crédito asociadas a pagos recurrentes y los perfiles de velocidad/tráfico contratados. Un atacante podría incluso modificar su propio plan para obtener gigabits sin costo (fraude de telecomunicaciones).
            </p>

            <ImagePlaceholder 
              src="docs_gargio\img_gargio\sqli_gargio.png" 
              alt="Captura de Inyección SQL"
              caption="Fig 1: Extracción de tablas de usuarios mediante UNION SELECT en el portal."
            />
          </div>
        );

      case 'xss':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Cross-Site Scripting (XSS)</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#70cad1] text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">ALTO</span>
              <span className={`font-mono text-sm border px-2 py-1 rounded transition-colors duration-300 ${t('text-gray-600 border-gray-300', 'text-gray-400 border-[#574b60]')}`}>CVSS: 7.2</span>
            </div>

            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Descripción Técnica</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Se identificó una vulnerabilidad XSS Almacenado (Stored XSS) en el módulo de apertura de "Tickets de Soporte Técnico" del portal de clientes. El payload malicioso se guarda en la base de datos y se ejecuta en el navegador del administrador de red cuando este revisa el ticket.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Impacto en ConectaTel (ISP)</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Si un técnico de NOC (Network Operations Center) abre el ticket infectado, el script puede <strong className={t('', 'text-white')}>robar su cookie de sesión (Session Hijacking)</strong>. Con privilegios de administrador de red, el atacante tendría acceso al panel de monitoreo de tráfico, pudiendo visualizar patrones de navegación de clientes, degradar la calidad de servicio (QoS) o desviar tráfico hacia servidores maliciosos.
            </p>

            <ImagePlaceholder 
              src="docs_gargio\img_gargio\xss_gargio.png" 
              alt="Captura de XSS"
              caption="Fig 2: Robo de cookie de sesión de administrador mediante XSS Almacenado."
            />
          </div>
        );

      case 'comandos':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Inyección de Comandos</h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-[#b08ea2] text-white px-3 py-1 rounded-full text-sm font-bold tracking-wide shadow-sm">CRÍTICO</span>
              <span className={`font-mono text-sm border px-2 py-1 rounded transition-colors duration-300 ${t('text-gray-600 border-gray-300', 'text-gray-400 border-[#574b60]')}`}>CVSS: 9.8</span>
            </div>

            <h3 className={`text-xl font-semibold mb-2 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Descripción Técnica</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              La herramienta de diagnóstico de red (Ping Tool) disponible para clientes avanzados no valida correctamente las entradas. Utilizando operadores de control de shell como `;` o `&&`, es posible concatenar y ejecutar comandos de sistema operativo subyacentes con los privilegios del servidor web.
            </p>

            <h3 className={`text-xl font-semibold mb-2 mt-6 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}>Impacto en ConectaTel (ISP)</h3>
            <p className={`mb-4 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Este es el escenario más destructivo. El servidor web afectado tiene acceso de red hacia el <strong className={t('', 'text-white')}>Core Network</strong> de ConectaTel. Al ejecutar comandos a nivel de sistema (`cat /etc/passwd`, `ifconfig`, o abrir una reverse shell), el atacante establece una cabeza de playa en la red interna. Podría acceder a las configuraciones de los enrutadores BGP, provocando cortes masivos de internet a nivel regional o la interceptación del tráfico troncal.
            </p>

            <ImagePlaceholder 
              src="docs_gargio\img_gargio\comandos_gargio.png" 
              alt="Captura de Inyección de Comandos"
              caption="Fig 3: Ejecución de 'cat /etc/passwd' concatenado al comando ping."
            />
          </div>
        );

      case 'activos':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Activos de Información</h1>
            <p className={`mb-6 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Identificación y valoración de los activos críticos de ConectaTel afectados por las vulnerabilidades encontradas, evaluados en base a la triada CIA (Confidencialidad, Integridad, Disponibilidad).
            </p>

            <div className={`overflow-x-auto rounded-lg shadow-md border transition-colors duration-300 ${t('border-[#8ee3f5]', 'border-[#574b60]')}`}>
              <table className="min-w-full text-left text-sm">
                <thead className={`transition-colors duration-300 ${t('bg-[#3e517a] text-[#a8e0ff]', 'bg-[#574b60] text-[#a8e0ff]')}`}>
                  <tr>
                    <th className="px-4 py-3 font-semibold">Activo</th>
                    <th className="px-4 py-3 font-semibold">Tipo</th>
                    <th className="px-4 py-3 font-semibold">Descripción (Contexto ISP)</th>
                    <th className="px-4 py-3 font-semibold text-center">Criticidad</th>
                  </tr>
                </thead>
                <tbody className={`divide-y transition-colors duration-300 ${t('bg-white divide-[#8ee3f5]', 'bg-[#3f334d] divide-[#574b60]')}`}>
                  <tr className={`transition-colors ${t('hover:bg-[#f8fbff]', 'hover:bg-[#574b60]')}`}>
                    <td className={`px-4 py-4 font-medium ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Base de Datos de Suscriptores</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Información</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Almacena PII, datos de facturación, medios de pago y metadatos de consumo de ancho de banda.</td>
                    <td className="px-4 py-4 text-center"><span className="bg-[#b08ea2] text-white px-2 py-1 rounded text-xs font-bold">EXTREMA</span></td>
                  </tr>
                  <tr className={`transition-colors ${t('hover:bg-[#f8fbff]', 'hover:bg-[#574b60]')}`}>
                    <td className={`px-4 py-4 font-medium ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Sistema de Enrutadores Core</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Infraestructura</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Equipos de red que gestionan el tráfico de internet de todos los clientes de la región.</td>
                    <td className="px-4 py-4 text-center"><span className="bg-[#b08ea2] text-white px-2 py-1 rounded text-xs font-bold">EXTREMA</span></td>
                  </tr>
                  <tr className={`transition-colors ${t('hover:bg-[#f8fbff]', 'hover:bg-[#574b60]')}`}>
                    <td className={`px-4 py-4 font-medium ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Portal de Autogestión Web</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Software</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Interfaz para que los clientes paguen facturas, cambien planes de velocidad y reporten fallas.</td>
                    <td className="px-4 py-4 text-center"><span className="bg-[#70cad1] text-white px-2 py-1 rounded text-xs font-bold">ALTA</span></td>
                  </tr>
                  <tr className={`transition-colors ${t('hover:bg-[#f8fbff]', 'hover:bg-[#574b60]')}`}>
                    <td className={`px-4 py-4 font-medium ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Plataforma de Tickets (NOC)</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Software</td>
                    <td className={`px-4 py-4 ${t('text-gray-600', 'text-gray-400')}`}>Sistema interno utilizado por técnicos para gestionar incidentes de red y servicio al cliente.</td>
                    <td className="px-4 py-4 text-center"><span className="bg-[#70cad1] text-white px-2 py-1 rounded text-xs font-bold">ALTA</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        );

      case 'matriz':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Matriz de Riesgo</h1>
            <p className={`mb-8 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Mapa de calor visual que relaciona la probabilidad de explotación frente al impacto en el negocio para ConectaTel.
            </p>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
              <div className={`hidden md:flex transform -rotate-90 font-bold tracking-widest h-10 items-center justify-center relative left-8 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>
                PROBABILIDAD
              </div>

              <div className="relative">
                <div className={`grid grid-cols-3 gap-1 p-1 border-2 rounded shadow-lg w-full max-w-[500px] aspect-square relative transition-colors duration-300 ${t('bg-gray-200 border-[#3e517a]', 'bg-[#574b60] border-[#3f334d]')}`}>
                  
                  {/* Fila: Alta Probabilidad */}
                  <div className="bg-[#facc15] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Medio</span>
                  </div>
                  <div className="bg-[#fb923c] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Alto</span>
                  </div>
                  <div className="bg-[#b08ea2] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                     <span className="font-bold text-white shadow-sm flex flex-col items-center">
                        <Database className="w-6 h-6 mb-1 text-white" />
                        <span className="text-xs">SQLi</span>
                     </span>
                     <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-48 ${t('bg-white text-black shadow border-[#b08ea2]', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Extremo (Prob: Alta, Imp: Crítico)</span>
                  </div>

                  {/* Fila: Media Probabilidad */}
                  <div className="bg-[#4ade80] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Bajo</span>
                  </div>
                  <div className="bg-[#facc15] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Medio</span>
                  </div>
                  <div className="bg-[#fb923c] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className="font-bold text-white shadow-sm flex flex-col items-center">
                        <Code className="w-6 h-6 mb-1 text-white" />
                        <span className="text-xs">XSS</span>
                     </span>
                     <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-48 ${t('bg-white text-black shadow border-[#fb923c]', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Alto (Prob: Media, Imp: Crítico)</span>
                  </div>

                  {/* Fila: Baja Probabilidad */}
                  <div className="bg-[#4ade80] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Bajo</span>
                  </div>
                  <div className="bg-[#4ade80] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                     <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-32 ${t('bg-white text-black shadow border-transparent', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Bajo</span>
                  </div>
                  <div className="bg-[#fb923c] hover:opacity-80 transition relative flex items-center justify-center p-2 text-center group cursor-help">
                    <span className="font-bold text-white shadow-sm flex flex-col items-center">
                        <Terminal className="w-6 h-6 mb-1 text-white" />
                        <span className="text-xs">Cmd Inj</span>
                     </span>
                     <span className={`hidden group-hover:block absolute text-xs p-1 rounded border -top-8 z-10 w-48 ${t('bg-white text-black shadow border-[#fb923c]', 'bg-[#3f334d] text-white shadow-black/50 border-[#574b60]')}`}>Riesgo Alto (Prob: Baja, Imp: Crítico)</span>
                  </div>
                </div>
                
                <div className={`absolute -left-6 top-0 bottom-0 flex flex-col justify-around text-xs font-semibold py-4 transition-colors duration-300 ${t('text-gray-500', 'text-gray-400')}`}>
                  <span>Alta</span>
                  <span>Media</span>
                  <span>Baja</span>
                </div>

                <div className={`absolute -bottom-6 left-0 right-0 flex justify-around text-xs font-semibold px-4 transition-colors duration-300 ${t('text-gray-500', 'text-gray-400')}`}>
                  <span>Bajo</span>
                  <span>Medio</span>
                  <span>Crítico</span>
                </div>
              </div>
            </div>
            
            <div className={`text-center font-bold tracking-widest mt-6 transition-colors duration-300 ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>
              IMPACTO AL NEGOCIO
            </div>

            <div className={`mt-12 p-4 border rounded-lg transition-colors duration-300 ${t('bg-[#f8fbff] border-[#a8e0ff]', 'bg-[#574b60] border-[#3f334d]')}`}>
              <h4 className={`font-semibold mb-2 flex items-center ${t('text-[#3e517a]', 'text-[#8ee3f5]')}`}><Lock className="w-4 h-4 mr-2"/> Resumen de Posicionamiento</h4>
              <ul className={`text-sm space-y-2 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
                <li><strong className={t('', 'text-white')}>SQLi:</strong> Alta probabilidad (fácilmente automatizable con SQLmap) e impacto crítico (robo de base de datos de ISP completa).</li>
                <li><strong className={t('', 'text-white')}>XSS:</strong> Probabilidad media (requiere interacción humana del soporte técnico) e impacto crítico (robo de sesión de administrador).</li>
                <li><strong className={t('', 'text-white')}>Inyección de Comandos:</strong> Probabilidad baja (requiere acceso a panel avanzado) pero impacto crítico (toma de control total del servidor y puente hacia la red core).</li>
              </ul>
            </div>
          </div>
        );

      case 'controles':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Controles y Mitigación</h1>
            <p className={`mb-6 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Medidas técnicas y administrativas recomendadas para asegurar la infraestructura de ConectaTel y remediar los hallazgos.
            </p>

            <div className="space-y-6">
              <div className={`p-6 rounded-lg shadow border-l-4 border-[#b08ea2] transition-colors duration-300 ${t('bg-white', 'bg-[#574b60]')}`}>
                <h3 className={`text-lg font-bold flex items-center ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>
                  <Database className="w-5 h-5 mr-2 text-[#b08ea2]" /> Mitigación SQLi
                </h3>
                <ul className={`mt-3 list-disc pl-5 space-y-1 ${t('text-gray-600', 'text-gray-300')}`}>
                  <li>Implementar <strong className={t('', 'text-white')}>Consultas Preparadas (Parameterized Queries)</strong> mediante PDO (PHP Data Objects) o equivalentes en el backend del portal de clientes.</li>
                  <li>Aplicar el Principio de Menor Privilegio: El usuario de la base de datos usado por la web no debe tener permisos de escritura sobre tablas de facturación, ni acceso a la base de datos `information_schema`.</li>
                  <li>Implementar un Web Application Firewall (WAF) en el borde de la red para bloquear patrones anómalos (ej: `UNION SELECT`).</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg shadow border-l-4 border-[#70cad1] transition-colors duration-300 ${t('bg-white', 'bg-[#574b60]')}`}>
                <h3 className={`text-lg font-bold flex items-center ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>
                  <Code className="w-5 h-5 mr-2 text-[#70cad1]" /> Mitigación XSS
                </h3>
                <ul className={`mt-3 list-disc pl-5 space-y-1 ${t('text-gray-600', 'text-gray-300')}`}>
                  <li>Codificación de salida (Output Encoding) al renderizar contenido de tickets de soporte en el panel administrativo.</li>
                  <li>Uso de bibliotecas de sanitización HTML como DOMPurify para limpiar los datos ingresados por usuarios antes de almacenarlos.</li>
                  <li>Implementar banderas `HttpOnly` y `Secure` en las cookies de sesión para evitar su robo mediante JavaScript.</li>
                  <li>Configurar cabeceras <strong className={t('', 'text-white')}>Content Security Policy (CSP)</strong> restrictivas.</li>
                </ul>
              </div>

              <div className={`p-6 rounded-lg shadow border-l-4 border-[#8ee3f5] transition-colors duration-300 ${t('bg-white', 'bg-[#574b60]')}`}>
                <h3 className={`text-lg font-bold flex items-center ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>
                  <Terminal className="w-5 h-5 mr-2 text-[#8ee3f5]" /> Mitigación de Comandos
                </h3>
                <ul className={`mt-3 list-disc pl-5 space-y-1 ${t('text-gray-600', 'text-gray-300')}`}>
                  <li>Evitar realizar llamadas directas a comandos del sistema operativo (como `ping` en bash). Utilizar en su lugar librerías de red nativas del lenguaje de programación.</li>
                  <li>Si es absolutamente necesario ejecutar comandos, aplicar una lista blanca estricta (Allowlist) de IPs/Dominios válidos en formato de expresión regular, rechazando cualquier metacarácter (`;`, `|`, `&`).</li>
                  <li>Ejecutar el proceso del servidor web bajo un entorno enjaulado (Chroot/Jail) para limitar el acceso al sistema de archivos del SO.</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 'recuperacion':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Recuperación (DRP)</h1>
            <p className={`mb-6 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Plan de Recuperación ante Desastres (Disaster Recovery Plan) adaptado para el escenario de compromiso masivo en ConectaTel.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className={`text-white p-6 rounded-lg shadow-lg transition-colors duration-300 ${t('bg-[#3e517a]', 'bg-[#574b60] border border-[#3f334d]')}`}>
                <h3 className="text-xl font-bold text-[#8ee3f5] mb-4">Escenario 1: Borrado/Robo de BD de Clientes</h3>
                <ol className="list-decimal pl-5 space-y-3 text-sm">
                  <li><strong>Contención:</strong> Aislar el servidor web de la base de datos principal y cortar acceso externo al portal de autogestión.</li>
                  <li><strong>Notificación:</strong> Activar protocolo de notificación de brecha de datos (leyes de protección de datos locales).</li>
                  <li><strong>Restauración:</strong> Recuperar base de datos desde el último backup offline no conectado a la red primaria (Cold Backup).</li>
                  <li><strong>Verificación:</strong> Auditar logs para asegurar que el vector de ataque original (SQLi) haya sido parcheado antes de reactivar el portal.</li>
                </ol>
              </div>

              <div className={`p-6 rounded-lg shadow-lg border transition-colors duration-300 ${t('bg-[#f8fbff] border-[#70cad1]', 'bg-[#574b60] border-[#3f334d]')}`}>
                <h3 className={`text-xl font-bold mb-4 ${t('text-[#3e517a]', 'text-white')}`}>Escenario 2: Compromiso de Routers Core (vía RCE)</h3>
                <ol className={`list-decimal pl-5 space-y-3 text-sm ${t('text-gray-700', 'text-gray-300')}`}>
                  <li><strong className={t('', 'text-white')}>Contención:</strong> Desconexión física de la interfaz de administración afectada. Failover manual a hardware de red secundario.</li>
                  <li><strong className={t('', 'text-white')}>Análisis:</strong> Revisión de tablas BGP y reglas de firewall inyectadas maliciosamente.</li>
                  <li><strong className={t('', 'text-white')}>Erradicación:</strong> Reinstalación limpia del firmware de los enrutadores comprometidos (Wipe & Restore de golden images).</li>
                  <li><strong className={t('', 'text-white')}>Recuperación:</strong> Restauración progresiva del tráfico troncal de clientes monitoreando anomalías de red.</li>
                </ol>
              </div>
            </div>
          </div>
        );

      case 'prompts':
        return (
          <div className="animate-fade-in">
            <h1 className={`text-3xl font-bold mb-6 border-b-2 pb-2 transition-colors duration-300 ${t('text-[#3e517a] border-[#70cad1]', 'text-[#a8e0ff] border-[#a8e0ff]/50')}`}>Bitácora de IA</h1>
            <p className={`mb-6 transition-colors duration-300 ${t('text-gray-700', 'text-gray-300')}`}>
              Registro de uso de Inteligencia Artificial (ChatGPT/Gemini) para asistir en la redacción, cálculo de CVSS y generación de controles para el informe.
            </p>

            <div className="space-y-4">
              {[
                { tarea: "Cálculo de CVSS Base", prompt: 'Actúa como analista de seguridad. Calcula el score CVSS v3.1 para una vulnerabilidad XSS Almacenado en un panel de soporte de un ISP, asumiendo requerimiento de privilegios bajos pero interacción de usuario requerida. Explica el vector resultante.', uso: "Se utilizó la calculadora online y el prompt para confirmar la puntuación de 7.2 y redactar la justificación técnica." },
                { tarea: "Contextualización del Riesgo", prompt: '¿Cuál es el impacto real para un Proveedor de Servicios de Internet (ISP) si un atacante logra Inyección de Comandos en el servidor web que aloja su portal de diagnóstico ping?', uso: "La respuesta ayudó a estructurar la sección de impacto conectando el servidor web con el Core Network y el tráfico BGP." },
                { tarea: "Desarrollo del DRP", prompt: 'Genera un resumen de un plan de recuperación ante desastres (DRP) en 4 pasos (Contención, Notificación, Restauración, Verificación) para un ISP que sufrió el borrado de su base de datos de facturación.', uso: "Adaptación del texto generado para la sección de Recuperación (Escenario 1)." }
              ].map((item, index) => (
                <div key={index} className={`border rounded-lg overflow-hidden shadow-sm transition-colors duration-300 ${t('border-gray-200', 'border-[#3f334d]')}`}>
                  <div className={`px-4 py-3 border-b transition-colors duration-300 ${t('bg-[#f0f9ff] border-gray-200', 'bg-[#574b60] border-[#3f334d]')}`}>
                    <h4 className={`font-semibold ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Tarea: {item.tarea}</h4>
                  </div>
                  <div className={`p-4 transition-colors duration-300 ${t('bg-white', 'bg-[#3f334d]')}`}>
                    <p className={`text-sm font-mono p-3 rounded mb-3 border-l-2 transition-colors duration-300 ${t('bg-gray-100 border-[#8ee3f5] text-gray-600', 'bg-[#574b60] border-[#a8e0ff] text-gray-300')}`}>
                      &gt; "{item.prompt}"
                    </p>
                    <p className={`text-sm ${t('text-gray-700', 'text-gray-300')}`}><strong className={t('', 'text-white')}>Aplicación en el informe:</strong> {item.uso}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return <div>Seleccione una sección</div>;
    }
  };

  return (
    <div className={`min-h-screen flex flex-col md:flex-row font-sans transition-colors duration-300 ${t('bg-gray-50 text-gray-800', 'bg-[#3f334d] text-gray-100')}`}>
        
      {/* Botón de Menú Móvil */}
      <button 
        className={`md:hidden fixed top-4 right-16 z-50 text-white p-2 rounded shadow-lg transition-colors duration-300 ${t('bg-[#3e517a]', 'bg-[#574b60]')}`}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <aside className={`
        fixed md:static inset-y-0 left-0 z-40
        w-72 text-white shadow-xl
        transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 transition-all duration-300 ease-in-out
        flex flex-col border-r
        ${t('bg-[#3e517a] border-transparent', 'bg-[#574b60] border-[#3f334d]')}
      `}>
        <div className={`p-6 border-b ${t('border-[#70cad1]/30', 'border-[#3f334d]')}`}>
          <div className="flex items-center space-x-3 mb-2">
            <Shield className="w-8 h-8 text-[#8ee3f5]" />
            <h2 className="text-xl font-bold tracking-wider">AUDITORÍA</h2>
          </div>
          <p className="text-[#a8e0ff] text-sm opacity-90 font-medium">ConectaTel Telecomunicaciones</p>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => {
                    setActiveTab(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    w-full flex items-center space-x-3 px-6 py-3 text-left transition-colors
                    ${activeTab === item.id 
                      ? t('bg-[#70cad1]/20 border-l-4 border-[#8ee3f5] text-[#8ee3f5] font-medium', 'bg-[#3f334d] border-l-4 border-[#a8e0ff] text-white font-medium')
                      : t('text-gray-300 hover:bg-[#3e517a]/80 hover:text-white', 'text-gray-300 hover:bg-[#3f334d]/50 hover:text-white')}
                  `}
                >
                  {item.icon}
                  <span className="text-sm">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={`p-4 border-t text-xs text-[#a8e0ff] opacity-70 ${t('border-[#70cad1]/30', 'border-[#3f334d]')}`}>
          Evaluación 03 - Reporte de Seguridad Web
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Topbar / Header */}
        <header className={`shadow-sm border-b py-4 px-6 md:px-12 flex justify-between items-center z-10 shrink-0 transition-colors duration-300 ${t('bg-white border-gray-200', 'bg-[#574b60] border-[#3f334d] shadow-none')}`}>
          <div>
            <h2 className={`text-sm font-semibold uppercase tracking-wider ${t('text-gray-500', 'text-gray-400')}`}>Proyecto E09</h2>
            <div className={`text-xl font-bold ${t('text-[#3e517a]', 'text-[#a8e0ff]')}`}>Informe Confidencial ISP</div>
          </div>
          <div className="flex items-center space-x-4">
            <div className={`hidden md:flex items-center space-x-2 text-sm px-3 py-1 rounded-full border transition-colors duration-300 ${t('text-[#70cad1] bg-[#e6f7f9] border-[#8ee3f5]', 'text-[#a8e0ff] bg-[#3f334d] border-[#574b60]')}`}>
              <Lock className="w-4 h-4" />
              <span className="font-medium">Solo Lectura</span>
            </div>
            
            {/* Botón de Modo Oscuro */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#70cad1] transition-colors duration-300 ${t('hover:bg-gray-100 text-[#3e517a]', 'hover:bg-[#3f334d] text-yellow-400')}`}
              aria-label="Alternar modo oscuro"
              title="Alternar tema"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        {/* Dynamic Content Area */}
        <div className={`flex-1 overflow-y-auto p-6 md:p-12 relative transition-colors duration-300 ${t('bg-white', 'bg-[#3f334d]')}`}>
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </div>

        {/* Footer with QR */}
        <footer className={`text-[#a8e0ff] py-6 px-8 flex flex-col md:flex-row justify-between items-center shrink-0 border-t-4 transition-colors duration-300 ${t('bg-[#3e517a] border-[#b08ea2]', 'bg-[#574b60] border-[#3f334d]')}`}>
          <div className="mb-4 md:mb-0">
            <h4 className="font-bold text-white mb-1">Auditoría Ejecutada por</h4>
            <p className="text-sm opacity-90">GiovanniG-afk</p>
            <p className="text-xs opacity-70 mt-2">© 2026 Seguridad Informática</p>
          </div>
          
          <div className={`flex items-center space-x-4 p-3 rounded-lg border ${t('bg-white/10 border-[#70cad1]/30', 'bg-[#3f334d]/50 border-[#3f334d]')}`}>
            <div className="text-right">
              <p className="text-sm font-bold text-white">Código Fuente & Autor</p>
              <a 
                href="https://github.com/GiovanniG-afk" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-[#8ee3f5] hover:underline"
              >
                github.com/GiovanniG-afk
              </a>
            </div>
            {/* Generación de QR usando API pública hacia el enlace de GitHub */}
            <div className="bg-white p-1 rounded">
              <img 
                src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=https://github.com/GiovanniG-afk&color=${isDarkMode ? '3f334d' : '3e517a'}`} 
                alt="QR GitHub" 
                className="w-16 h-16 object-cover"
              />
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}