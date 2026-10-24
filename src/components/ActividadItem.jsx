import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ActividadItem({ fase, titulo, duracion }) {
  const [completada, setCompletada] = useState(false);

  return (
    <motion.article 
      layout
      className={`activity-item ${completada ? 'completada' : ''}`}
      transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
    >
      <div className="activity-info">
        <span className={`badge-fase ${fase.toLowerCase()}`}>{fase}</span>
        <h4 className="activity-heading">{titulo}</h4>
        <span className="duracion">⏱ {duracion}</span>
      </div>

      <button 
        type="button"
        className="btn-estado"
        onClick={() => setCompletada(!completada)}
      >
        {completada ? '✓ Completada' : 'Pendiente'}
      </button>
    </motion.article>
  );
}