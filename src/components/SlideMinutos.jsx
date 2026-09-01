import wrappedData from "../wrappedData";

function slideMinutos () {
    return (
        <div className="slide">
            <p>Você ouviu música por</p>
            <h1>{wrappedData.minutosOuvidos.toLocaleString('pt-br')}</h1>
            <p>Minutos em 2026</p>
        </div>
    )
}

export default slideMinutos