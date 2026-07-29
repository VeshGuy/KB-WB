import Features from './components/Features'
import UseCases from './components/UseCases'
import Footer from './components/Footer'
import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <UseCases />
      </main>
      <Footer />
    </>
  )
}

export default App
