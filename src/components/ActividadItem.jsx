// src/components/ActividadItem.jsx
import React from 'react';

function ActividadItem({ titulo, tiempo, tipo }) {
    return (
        <div style={{ border: '1px solid #cbd5e1', padding: '15px', borderRadius: '8px', marginBottom: '10px', background: '#f8fafc' }}>
            <span style={{ background: '#0ea5e9', color: 'white', padding: '2px 8px', borderRadius: '4px', fontSize: '0.8em' }}>{tipo}</span>
            <h4 style={{ margin: '8px 0 4px 0', color: '#0f172a' }}>{titulo}</h4>
            <p style={{ margin: 0, fontSize: '0.85em', color: '#64748b' }}>⏱️ Duración: {tiempo}</p>
        </div>
    );
}

export default ActividadItem;
