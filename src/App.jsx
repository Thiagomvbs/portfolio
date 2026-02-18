import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'

function App() {

  return (
    <main style={{ fontFamily: 'sans-serif' }}>
      <Header/>
      <About/>
      <Technologies/>
      <Projects/>
      <Footer/>
    </main>
  )
}

export default App
