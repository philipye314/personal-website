import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SectionLine from './components/SectionLine'

export default function App() {
  return (
    <div className="bg-[#111111] text-on-surface font-body selection:bg-secondary selection:text-on-secondary">
      <NavBar />
      <div className="relative overflow-hidden">
        {/* Hero background layers */}
        <div className="absolute inset-x-0 top-0 h-[1000px] topo-bg pointer-events-none opacity-60"></div>
        <div className="absolute inset-x-0 top-0 h-[1000px] point-light pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-[1000px] bg-gradient-to-b from-[#111111]/40 via-transparent to-[#111111] pointer-events-none"></div>

        <main className="max-w-7xl mx-auto px-8 pt-40 pb-24 relative z-10">
          <Hero />
          <SectionLine number="01" label="About" id="about" />
          <About />
          <SectionLine number="02" label="Work Experience" id="work" />
          <WorkExperience />
          <SectionLine number="03" label="Projects" id="projects" />
          <Projects />
          <SectionLine number="04" label="Skills" id="stack" />
          <Skills />
        </main>
      </div>
      <Footer />
    </div>
  )
}
