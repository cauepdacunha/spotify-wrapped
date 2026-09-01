import wrappedData from '../wrappedData'

function SlideTop5() {
  return (
    <div className="slide">
      <h1>Suas top 5 músicas</h1>
      <ol>
        {wrappedData.top5Musicas.map((musica, index) => (
          <li key={index}>{musica}</li>
        ))}
      </ol>
    </div>
  )
}

export default SlideTop5