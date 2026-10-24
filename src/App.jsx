import './App.css';
import HeaderClase from './components/HeaderClase';
import ObjetivosCard from './components/ObjetivosCard';
import ActividadItem from './components/ActividadItem';

function App() {
  const objetivos = [
    "Comprender la manipulación de estado reactivo en React.",
    "Aplicar microinteracciones y animaciones pedagógicas con Framer Motion.",
    "Refactorizar componentes mediante la técnica de Pair Programming."
  ];

  const actividades = [
    { id: 1, fase: 'Diagnóstica', titulo: 'Trivia Rápida Interactiva', duracion: '5 minutos' },
    { id: 2, fase: 'Construcción', titulo: 'Taller Guiado de Componentes', duracion: '25 minutos' },
    { id: 3, fase: 'Aplicación', titulo: 'Pruebas de Estado con useState y Framer Motion', duracion: '25 minutos' }
  ];

  return (
    <main className="app-container">
      <div className="panel-clase">
        <HeaderClase 
          titulo="Secuencia Didáctica Interactiva" 
          subtitulo="Semana 6 • Desarrollo Web & React" 
        />

        <ObjetivosCard objetivos={objetivos} />

        <section className="seccion-actividades">
          <h3 className="section-title">📋 Secuencia de Actividades</h3>
          <div className="actividades-contenedor">
            {actividades.map((act) => (
              <ActividadItem 
                key={act.id}
                fase={act.fase}
                titulo={act.titulo}
                duracion={act.duracion}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;