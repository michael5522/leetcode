import { star } from "../assets/icons";
import Image from "next/image";

const PopularProductCard = ({ imgURL, name }) => {
  return (
    <div className="flex flex-col flex-1 w-full justify-center items-center max-sm:w-full">

      <Image
        src={imgURL}
        alt="alt img"
        className="w-[150px] h-[150px]"
      />
      <div className="mt-8 flex justify-center gap-2.5">

        <Image
          src={star}
          alt="rating icon"
          width={25}
          height={25}
        />
      </div>
      <h3 className="mt-2 text-2xl text-center">
        {name}
      </h3>

    </div>




  );
};

export default PopularProductCard;
