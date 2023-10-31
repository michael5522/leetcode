import { star } from "../assets/icons";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name, price }) => {
  // console.log(imgURL, name, price)
  return (
    <div className="flex flex-col flex-1 w-full max-sm:w-full">

      <Image
        src={imgURL}
        alt="alt img"
        className="w-[282px] h-[282px]"
      />
      <div className="mt-8 flex justify-start gap-2.5">

        <Image
          src={star}
          alt="rating icon"
          width={25}
          height={25}
        />
        <p className="font-montserrat text-xl leading-normal text-slate-gray">
          (5)
        </p>
      </div>
      <h3 className="mt-2 text-2xl">
        {name}
      </h3>
      <p className="text-coral-red mt-2 font-semibold text-2xl">{price}</p>

    </div>




  );
};

export default PopularProductCard;
