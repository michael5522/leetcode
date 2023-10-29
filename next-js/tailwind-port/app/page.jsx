import Navbar from './components/Navbar';
import  Hero  from './components/Hero';
export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
    </main>
  )
}
