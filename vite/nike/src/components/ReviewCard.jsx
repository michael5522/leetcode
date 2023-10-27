import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  // console.log(imgURL, customerName, rating, feedback)
  return (
    <div className="flex flex-col justify-center items-center">
      <img
       src={imgURL}
        className="rounded-full w-[120px] h-[120px]"
      />
      <p className="mt-6 info-text text-center max-w-sm">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2">
        <img
          src={star}
          width={20}
          height={20}
          className="object-contain m-0"
        />
        <p className="text-xl mont-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 font-palanquin text-3xl text-center font-bold">{customerName}</h3>
    </div>


  );
};

export default ReviewCard;
