import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  console.log(products)
  return (
    <section id="products"
    className="flex max-container">
      <div className="flex flex-col">
        <h2 className="text-4xl font-bold">Our <span className="text-coral-red">Popular</span> products</h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>

        <div className="flex gap-5">
          {products.map((pp) => (
            <PopularProductCard key={pp.imgURL} {...pp} />
          ))}
        </div>
      </div>


    </section>






  );
};

export default PopularProducts;
