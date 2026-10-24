import './App.css';
import ActividadItem from './components/ActividadItem';

function App() {
  const actividades = [
    { id: 1, fase: 'Diagnóstica', titulo: 'Trivia Rápida Interactiva', duracion: '5 minutos' },
    { id: 2, fase: 'Construcción', titulo: 'Taller Guiado de Componentes', duracion: '25 minutos' },
    { id: 3, fase: 'Aplicación', titulo: 'Pruebas de Estado con useState', duracion: '25 minutos' }
  ];

  return (
    <main className="plan-container">
      <header className="header">
        <p className="subtitle">Plan de Clase • React & Vite</p>
        <h1 className="title">Secuencia Didáctica</h1>
      </header>

      <section className="activities-list">
        {actividades.map((item) => (
          <ActividadItem 
            key={item.id}
            fase={item.fase}
            titulo={item.titulo}
            duracion={item.duracion}
          />
        ))}
      </section>
    </main>
  );
}

export default App;