import { star } from "../assets/icons";

const PopularProductCard = ({ imgURL, name, price }) => {
  console.log(imgURL, name, price)
  return (
  //   <div className='flex flex-1 flex-col w-full max-sm:w-full'>
  //     <img src={imgURL} alt={name} className='w-[282px] h-[282px]' />
  //     <div className='mt-8 flex justify-start gap-2.5'>
  //       <img src={star} alt='rating icon' width={24} height={24} />
  //       <p className='font-montserrat text-xl leading-normal text-slate-gray'>
  //         (4.5)
  //       </p>
  //     </div>
  //     <h3 className='mt-2 text-2xl leading-normal font-semibold font-palanquin'>
  //       {name}
  //     </h3>
  //     <p className='mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal'>
  //       {price}
  //     </p>
  //   </div>
  // );









  <div className="flex w-full flex-col">
    <div className="flex">
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px]"
        />
    </div>
    <div className="flex mt-5">
      <img
      src={star}
      alt="star img"
      />
      <h3>(5)</h3>
    </div>
    <h3 className="font-palanquin mt-2 text-2xl leading-normal font-semibold">{name}</h3>
    <h3 className="mt-2 font-semibold text-2xl leading-normal font-palanquin text-coral-red">{price}</h3>

  </div>
  );
};

export default PopularProductCard;
