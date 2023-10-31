import Navbar from './components/Navbar';
import  Hero  from './components/Hero';
import PopularProducts from './components/PopularProducts';
import SuperQuality from './components/SuperQuality';
import Services from './components/Services';
import SpecialOffer from './components/SpecialOffer';
import CustomerReviews from './components/CustomerReviews';
import Subscribe from './components/Subscribe';
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>

      <section className="padding-x py-10">
        <Services/>
      </section>
      <section className="padding">
        <SpecialOffer/>
      </section>
      <secion className="padding">
        <CustomerReviews/>
      </secion>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className=' bg-black padding-x padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}
