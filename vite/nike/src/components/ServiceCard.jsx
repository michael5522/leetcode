const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div className="flex-1">
      <div className='w-12 h-12 flex rounded-full bg-coral-red justify-center items-center'>
        <img src={imgURL} width={24} height={24}/>
      </div>
      <h3 className='mt-5 font-palanquin text-3xl font-bold'>{label}</h3>
      <h3 className='mt-3 break-words font-montserrat text-lg leading-normal text-slate-gray'>{subtext}</h3>
    </div>
  );
};

export default ServiceCard;
