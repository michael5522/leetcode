import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container" id="about-us">
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl font-palanquin font-bold">We Provide You <span className="text-coral-red">Super Quality </span>Shoes</h2>
        <p className="info-text mt-2">Ensuring premium comfort and style, our meticulously crafted footwear is desgined to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance. Our dedication to detail and excellence ensures your satisfaction.</p>

        <p className="info-text mt-5 lg:max-w-lg">Our dedication to detail and excellence ensures your satisfaction</p>
        <div className="flex mt-8">
          <Button label="View details" />
        </div>
      </div>

      <div className="flex flex-1">
        <img
          src={shoe8}
          alt="ok shoe"
          className="object-contain"
        />
      </div>
    </section>



































    // <section
    // id='about-us'
    //   className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'>

    //   <div className="flex flex-1 flex-col">
    //     <h2 className="font-palanquin capitalize text-4xl font-bold">We provide You
    //       <span className="text-coral-red">Super</span>
    //       <span className="text-coral-red">Quality</span>
    //       Shoes
    //     </h2>

    //     <p className='mt-4 lg:max-w-lg info-text'>
    //          Ensuring premium comfort and style, our meticulously crafted footwear
    //          is designed to elevate your experience, providing you with unmatched
    //           quality, innovation, and a touch of elegance.
    //     </p>

    //     <p className='mt-6 lg:max-w-lg info-text'>
    //         Our dedication to detail and excellence ensures your satisfaction
    //     </p>

    //     <div className='mt-11'>
    //      <Button label='View details' />
    //     </div>
    //   </div>

    //   <div className='flex-1 flex justify-center items-center'>
    //     <img
    //         src={shoe8}
    //         alt='product detail'
    //         width={570}
    //         height={522}
    //         className='object-contain'
    //       />
    //   </div>

    // </section>

  );
};

export default SuperQuality;
