import { bigShoe2 } from "../assets/images";
import Button from "../components/Button";
import Image from "next/image";

const SuperQuality = () => {
  return (
    <section
      id='about-me'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full min-h-screen max-container border-2 border-purple-500'
    >
      <div className="flex flex-1 flex-col">

        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold text-center'>
          About Me

        </h2>

        <p className="lg:max-w-lg mt-4 info-text">
          Hi, I work in in front-end web development using Reactjs and am experienced in creating dynamic, user-friendly websites. I am proficient in using Tailwindcss to enhance the visual appeal of my projects.


        </p>
        <p className="lg:max-w-lg mt-6 info-text">
          Our dedication to detail and excellence ensures your satisfaction  is that I can create software from nothing that solves real problems.
        </p>

      </div>

      <div className="flex-1 flex justify-center items-center">

        <Image
          src={bigShoe2}
          alt="shoe8"
          width={450}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
