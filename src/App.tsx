import Layout from './components/layout/Layout'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Research from './components/sections/Research'

function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Research />
    </Layout>
  )
}

export default App
