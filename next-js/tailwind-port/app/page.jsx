import Navbar from './components/Navbar';
import Hero  from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>

      <section className="padding-x py-10">
        <Projects />
      </section>

      <section className="padding">
        <Skills />
      </section>


      <section className='bg-coral-red padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}
