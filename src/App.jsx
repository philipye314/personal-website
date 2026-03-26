import { useState } from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import WorkExperiencePage from './components/WorkExperiencePage'
import Projects from './components/Projects'
import ProjectExperience from './components/ProjectExperience'
import Skills from './components/Skills'
import Footer from './components/Footer'
import SectionLine from './components/SectionLine'
import ScrollReveal from './components/ScrollReveal'
import TopoBg from './components/TopoBg'

export default function App() {
  const [selectedWork, setSelectedWork] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    const dark = saved !== 'light'
    document.documentElement.classList.toggle('light', !dark)
    return dark
  })

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev
      document.documentElement.classList.toggle('light', !next)
      localStorage.setItem('theme', next ? 'dark' : 'light')
      return next
    })
  }

  if (selectedWork) {
    return <WorkExperiencePage slug={selectedWork} onBack={() => setSelectedWork(null)} />
  }

  if (selectedProject) {
    return <ProjectExperience slug={selectedProject} onBack={() => setSelectedProject(null)} />
  }

  return (
    <div className="bg-[#111111] text-on-surface font-body selection:bg-secondary selection:text-on-secondary">
      <NavBar isDark={isDark} onToggleTheme={toggleTheme} />
      <div className="relative overflow-hidden">
        <TopoBg />

        <main className="max-w-7xl mx-auto px-8 pt-40 pb-24 relative z-10">
          <Hero />
          <ScrollReveal><SectionLine number="01" label="About" id="about" /></ScrollReveal>
          <ScrollReveal delay={100}><About /></ScrollReveal>
          <ScrollReveal><SectionLine number="02" label="Work Experience" id="work" /></ScrollReveal>
          <ScrollReveal delay={100}><WorkExperience onSelect={setSelectedWork} /></ScrollReveal>
          <ScrollReveal><SectionLine number="03" label="Projects" id="projects" /></ScrollReveal>
          <ScrollReveal delay={100}><Projects onSelect={setSelectedProject} /></ScrollReveal>
          <ScrollReveal><SectionLine number="04" label="Skills" id="stack" /></ScrollReveal>
          <ScrollReveal delay={100}><Skills /></ScrollReveal>
        </main>
      </div>
      <Footer />
    </div>
  )
}
