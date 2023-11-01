import { products } from "../constants";
import { logos } from "../constants"
import PopularProductCard from "../components/PopularProductCard";
const PopularProducts = () => {
  return (
    <section id='skills' className='max-container max-sm:mt-12 border-2 border-red-500'>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-palanquin font-bold">Technical <span className="text-coral-red">Skills</span>
        </h2>

      </div>

      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {logos.map((xd) => (
          <PopularProductCard {...xd} key={xd.name} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
