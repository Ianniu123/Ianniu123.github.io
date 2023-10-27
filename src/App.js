import Home from './components/Home'
import Navigation from './components/Navigation'
import NavMobile from './components/NavMobile'
import background from './assets/back.png'
import Project from './components/Project'
import About from './components/About'
import Contact from './components/Contact'
import { useRef, useState, useEffect } from 'react'
import { BsChevronDoubleDown, BsChevronDoubleUp } from 'react-icons/bs'
import 'animate.css'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const home = useRef(null)
  const about = useRef(null)
  const project = useRef(null)
  const contact = useRef(null)

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange)
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768
  const nav = isMobile ?  <NavMobile scrollToSection={scrollToSection} about={about} project={project} contact={contact} /> : <Navigation scrollToSection={scrollToSection} about={about} project={project} contact={contact} />


  return (
    <div>
      <BsChevronDoubleUp id="back" onClick={() => scrollToSection(home)} className="bouncer cursor-pointer fixed bottom-4 right-4 text-white text-4xl rounded-full border border-white z-10"></BsChevronDoubleUp>
      <div>
        <div id="nav">
          {nav}
        </div>
        <div ref={home} className="w-full bg-cover bg-center md:h-screen" style={{ backgroundImage: `url(${background})`}} id="home"> md:h-screen
          <Home />
          <BsChevronDoubleDown className='mt-32 z-10 bouncer text-white text-6xl ml-auto mr-auto cursor-pointer' onClick={() => scrollToSection(about)} ></BsChevronDoubleDown>
        </div>
        <div ref={about} id="about" className="mt-56 md:mt-0 lg:h-screen">
          <About className="h-full">
            <BsChevronDoubleDown className='mt-10 bouncer z-10 ml-auto mr-auto text-white text-6xl cursor-pointer' onClick={() => scrollToSection(project)} ></BsChevronDoubleDown>
          </About>
        </div>
        <div ref={project} id="project" className="mt-52 md:mt-72">
          <Project />
          <div ref={contact} id="contact" className="">
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
