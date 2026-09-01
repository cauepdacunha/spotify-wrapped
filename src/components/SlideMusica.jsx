import wrappedData from '../wrappedData'

function SlideMusica() {
  return (
    <div className="slide">
      <p>Sua música mais tocada foi</p>
      <h1>{wrappedData.musicaTop.nome}</h1>
      <p>de {wrappedData.musicaTop.artista}</p>
    </div>
  )
}

export default SlideMusica