// src/App.jsx
import React from 'react';
import ActividadItem from './components/ActividadItem';

function App() {
    return (
        <div style={{ maxWidth: '600px', margin: '20px auto', padding: '20px', fontFamily: 'Segoe UI' }}>
            <h2 style={{ color: '#0f4c81' }}>Secuencia Didáctica - Plan de Clase</h2>

            {/* Reutilizamos el mismo componente pasando diferentes props */}
            <ActividadItem titulo="Trivia Rápida Interactiva" tiempo="5 minutos" tipo="Diagnóstica" />
            <ActividadItem titulo="Taller Guiado de Componentes" tiempo="25 minutos" tipo="Construcción" />
            <ActividadItem titulo="Pruebas de Estado con useState" tiempo="25 minutos" tipo="Aplicación" />
        </div>
    );
}

export default App;