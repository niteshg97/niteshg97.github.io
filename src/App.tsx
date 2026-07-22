import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'
import Skills from './components/sections/Skills'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Skills />
    </Layout>
  )
}

export default App
