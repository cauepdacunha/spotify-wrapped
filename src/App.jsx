import { useState, useEffect } from 'react'
import './App.css'
import SlideIntro from './components/Slideintro'
import SlideMinutos from './components/SlideMinutos'
import SlideArtista from './components/SlideArtista'
import SlideMusica from './components/slideMusica'
import SlideGenero from './components/SlideGenero'
import SlideTop5 from './components/SlideTop5'
import SlideResumo from './components/SlideResumo'
import BarraProgresso from './components/BarraProgresso'

const slides = [
  SlideIntro,
  SlideMinutos,
  SlideArtista,
  SlideMusica,
  SlideGenero,
  SlideTop5,
  SlideResumo,
]

function App() {
  const [slideAtual, setSlideAtual] = useState(0)

  useEffect(() => {
    if (slideAtual === slides.length - 1) return

    const timer = setTimeout(() => {
      setSlideAtual(slideAtual + 1)
    }, 3000)

    return () => clearTimeout(timer)
  }, [slideAtual])

  const SlideAtual = slides[slideAtual]

  return (
    <div className="app">
      <BarraProgresso total={slides.length} atual={slideAtual} />
      <SlideAtual key={slideAtual} />
    </div>
  )
}

export default App