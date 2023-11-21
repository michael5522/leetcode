import { bigShoe1 } from "../assets/images";
import Image from "next/image";


const Hero = () => {
  console.log(bigShoe1)
  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-1 border-2 border-green-500 bg-ola max-sm:bg-minicard max-sm:min-h-half'
    >
      <div className='relative xl:w-2/5 max-xl:items-center flex pl-20 flex-col justify-center items-start w-full  max-xl:text-center max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-coral-red ml-5 max-sm:hidden'>
          Hello, I am
        </p>


        <div className='hidden flex-1 justify-center items-center bg-cover bg-center mt-3 pt-28 max-sm:flex'>
          <Image
            src={bigShoe1}
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
          </div>


        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[52px] max-sm:leading-[19px] font-bold ml-5 max-sm:-ml-0'>
          <span className='relative z-9'>
            Bob Burger
          </span>
          <br />
          <span className='text-coral-red  mt-3 max-sm:text-[22px] text-4xl max-sm:text-slate-500'>a Chicken nugget</span>
        </h1>

      </div>

      <div className='flex flex-1 justify-center items-center bg-cover bg-center mt-3 pt-28 max-xl:hidden'>
        <Image
        src={bigShoe1}
        alt="logo"
        width={250}
        height={250}
        className="object-contain"
        />


      </div>
    </section>
  );
};

export default Hero;
