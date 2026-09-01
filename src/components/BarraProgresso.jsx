function BarraProgresso({ total, atual }) {
  return (
    <div className="barra-progresso">
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="segmento">
          <div
            className={
              index < atual
                ? 'preenchido completo'
                : index === atual
                ? 'preenchido animando'
                : 'preenchido'
            }
          />
        </div>
      ))}
    </div>
  )
}

export default BarraProgresso