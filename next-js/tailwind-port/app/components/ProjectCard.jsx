import Image from "next/image";
const ProjectCard = ({ source, currentTitle, changeTitle, currentStack, changeStack, currentDesc, changeDesc, currentURL, changeURL, defaultImage, changeDefaultImage }) => {

  const handleClick = () => {
    if (defaultImage !== source.bigImage) {
      changeDefaultImage(source.bigImage);
    }
    if (currentTitle !== source.title){
      changeTitle(source.title)
    }
    if (currentStack !== source.stack){
      changeStack(source.stack)
    }
    if (currentDesc !== source.desc){
      changeDesc(source.desc)
    }
    if (currentURL !== source.href){
      changeURL(source.href)
    }
  };

  return (
    <div
      className={`border-2  rounded-xl ${defaultImage === source.bigImage
        ? "border-coral-red"
        : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-hero bg-center bg-cover sm:w-44 sm:h-44 rounded-md max-sm:p-4'>
        <Image
          src={source.thumbnail}
          alt='pic of project in mobile'
          width={90}
          height={90}
          className='object-cover rounded-md'
        />
      </div>
    </div>
  );
};

export default ProjectCard;
