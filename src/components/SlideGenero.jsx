import wrappedData from '../wrappedData'

function SlideGenero() {
  return (
    <div className="slide">
      <p>Seu gênero favorito foi</p>
      <h1>{wrappedData.generoFavorito}</h1>
    </div>
  )
}

export default SlideGenero