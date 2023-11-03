import Image from "next/image";
const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg, currentTitle, changeTitle, currentStack, changeStack, currentDesc, changeDesc, currentURL, changeURL }) => {

  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
    if(currentTitle !== imgURL.title){
      changeTitle(imgURL.title)
    }
    if(currentStack !== imgURL.stack){
      changeStack(imgURL.stack)
    }
    if(currentDesc !== imgURL.desc){
      changeDesc(imgURL.desc)
    }
    if(currentURL !== imgURL.href){
      changeURL(imgURL.href)
    }

  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe
        ? "border-coral-red"
        : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-44 sm:h-44 rounded-md max-sm:p-4'>
        <Image
          src={imgURL.thumbnail}
          alt='pic of project in mobile'
          width={90}
          height={90}
          className='object-cover rounded-md'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
