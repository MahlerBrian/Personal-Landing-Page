import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import CV from './components/CV.jsx'
import Footer from './components/Footer.jsx'

// App stacks the five sections in order inside one centered, width-constrained
// column. There's no router — navigation is just anchor links (#projects, etc.).
export default function App() {
  return (
    <main className="page">
      <Hero />
      <About />
      <Projects />
      <CV />
      <Footer />
    </main>
  )
}
