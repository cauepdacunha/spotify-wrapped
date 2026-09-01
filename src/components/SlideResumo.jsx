import wrappedData from '../wrappedData'

function SlideResumo() {
  return (
    <div className="slide">
      <h1>Seu resumo de 2026</h1>
      <p>{wrappedData.minutosOuvidos.toLocaleString('pt-BR')} minutos ouvidos</p>
      <p>Artista top: {wrappedData.artistaTop.nome}</p>
      <p>Música mais tocada: {wrappedData.musicaTop.nome}</p>
      <p>Gênero favorito: {wrappedData.generoFavorito}</p>
    </div>
  )
}

export default SlideResumo