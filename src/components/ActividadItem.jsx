function ActividadItem({ fase, titulo, duracion }) {
  return (
    <article className="activity-card">
      <span className="badge">{fase}</span>
      <h2 className="activity-title">{titulo}</h2>
      <div className="activity-meta">
        <span>⏱ Duración:</span>
        <strong>{duracion}</strong>
      </div>
    </article>
  );
}

export default ActividadItem;