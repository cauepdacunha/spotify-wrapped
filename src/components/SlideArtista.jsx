import wrappedData from "../wrappedData";

function SlideArtista() {
    return(
        <div className="slide">
            <p>Seu artista favorito foi</p>
            <h1>{wrappedData.artistaTop.nome}</h1>
            <p>Você  ouviu {wrappedData.artistaTop.vezesOuvido} vezes</p>
        </div>
    )
}

export default SlideArtista