import Image from "next/image";

const SkillsCard = ({ imgURL, name, href }) => {
  return (
    <div className="flex flex-col flex-1 w-full justify-center items-center max-sm:w-full">
      <div className="w-37 h-37 flex justify-center items-center bg-coral-red rounded-full">
        <a
          href={href}
          target="_blank" rel="noreferrer"
        >
          <Image
            src={imgURL}
            alt="alt img"
            className=" object-contain w-[100px] h-[100px] hover:scale-125 transition-all duration-500 rounded-full max-sm:w-[82px] max-sm:h-[82px]"
          />
        </a>
      </div>
      <div className="mt-1 flex justify-center items-center gap-1.5">
            <h3 className="mt-2 text-2xl text-center max-sm:text-base mb-2">
              {name}
            </h3>
      </div>
    </div>
  );
};

export default SkillsCard;
