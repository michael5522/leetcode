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
      {/* <section className='xl:padding-l wide:padding-r'> */}
      <section className=''>
        <Hero />
      </section>
      <section className="padding">
        <About />
      </section>

      <section className="padding-x py-10 bg-gray-100">
        <Projects />
      </section>

      <section className="padding">
        <Skills />
      </section>


      <section className='bg-coral-red padding-x padding-t py-10 bg-tree bg-cover bg-center'>
        <Footer/>
      </section>
    </main>
  )
}
