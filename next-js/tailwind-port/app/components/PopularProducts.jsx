import { products } from "../constants";
import { logos } from "../constants";
import { toolimages } from "../constants";
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id='skills' className='max-container max-sm:mt-12 border-2 border-red-500'>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-palanquin font-bold text-coral-red">Technical Skills
        </h2>

      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-14">
        {logos.map((xd) => (
          <PopularProductCard {...xd} key={xd.name} />
        ))}
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-palanquin font-bold mt-10 text-coral-red">Tools
        </h2>

      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 sm:gap-6 gap-14">
        {toolimages.map((xd) => (
          <PopularProductCard {...xd} key={xd.name} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
