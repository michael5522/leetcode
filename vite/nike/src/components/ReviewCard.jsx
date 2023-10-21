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
    <div className="flex justify-center">
      <div className="flex  items-center flex-col">
        <img src={imgURL} width={150} height={150} className="rounded-full justify-center"/>
        <p className="mt-3 font-montserrat max-w-sm text-center text-slate-gray">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img src={star} width={30} height={30} />
          <p className="text-xl font-montserrat text-slate-gray">{`(${rating})`}</p>
        </div>

        <p className="text-3xl  font-bold font-montserrat text-slate-gray">{customerName}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
