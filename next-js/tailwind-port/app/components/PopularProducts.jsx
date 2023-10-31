import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  console.log('111', products)
  return (
    <section id='projects' className='max-container max-sm:mt-12 border-2 border-red-500'>
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">Our <span className="text-coral-red">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Expereince Top notch quality and style with our sought after selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {products.map((xd) => (
          <PopularProductCard {...xd} key={xd.name} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
