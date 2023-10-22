import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  console.log(imgURL, customerName, rating, feedback)
  return (
    // <div className='flex justify-center items-center flex-col'>
    //   <img
    //     src={imgURL}
    //     alt='customer'
    //     className='rounded-full object-cover w-[120px] h-[120px]'
    //   />
    //   <p className='mt-6 max-w-sm text-center info-text'>{feedback}</p>
    //   <div className='mt-3 flex justify-center items-center gap-2.5'>
    //     <img
    //       src={star}
    //       width={24}
    //       height={24}
    //       alt='rating star'
    //       className='object-contain m-0'
    //     />
    //     <p className='text-xl font-montserrat text-slate-gray'>({rating})</p>
    //   </div>
    //   <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
    //     {customerName}
    //   </h3>
    // </div>


  <div className="flex flex-col justify-center items-center">
    <img src={imgURL}
    className="rounded-full w-[120px] h-[120px] object-cover"
    />
    <p className="info-text flex text-center mt-6 max-w-sm">{feedback}</p>
    <div className="flex">
        <img
          src={star}
          width={20}
          height={20}
        />
        <p className="info-text">{`(${rating})`}</p>
    </div>
      <p className="text-2xl">{customerName}</p>

  </div>
  );
};

export default ReviewCard;
