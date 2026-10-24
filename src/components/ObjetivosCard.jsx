import { motion } from 'framer-motion';

export default function ObjetivosCard({ objetivos }) {
  return (
    <motion.section 
      className="objetivos-card"
      whileHover={{ scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h3 className="section-title">🎯 Objetivos de la Sesión</h3>
      <ul className="objetivos-list">
        {objetivos.map((obj, index) => (
          <li key={index}>{obj}</li>
        ))}
      </ul>
    </motion.section>
  );
}