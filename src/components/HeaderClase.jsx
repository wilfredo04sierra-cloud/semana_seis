import { motion } from 'framer-motion';

export default function HeaderClase({ titulo, subtitulo }) {
  return (
    <motion.header 
      className="header-clase"
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <span className="badge-tema">{subtitulo}</span>
      <h1 className="header-title">{titulo}</h1>
    </motion.header>
  );
}