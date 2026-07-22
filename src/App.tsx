import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Skills from './components/sections/Skills'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
      <Achievements />
      <Contact />
    </Layout>
  )
}

export default App
