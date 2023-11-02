"use client";


  import { useState } from "react";
  import { shoes } from "../constants";
  import ShoeCard from "./ShoeCard";
  import { bigShoe1 } from "../assets/images";
  import { desktopwedding } from "../assets/project-images"
  import Image from "next/image";

  import {projectInfo} from "../constants"
  const Services = () => {
    console.log(projectInfo, shoes, desktopwedding)
    const [bigShoeImg, setBigShoeImg] = useState(desktopwedding);

    return (
      <section
        id='projects'
        className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
      >
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-1'>

          <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
            <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-1'>
              Recent Projects
            </span>
            <br />
            <span className='text-coral-red inline-block mt-3'>Nike</span> Shoes
          </h1>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>

        </div>

        <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>

          <Image
           src={bigShoeImg}
           alt="projects"
           width={610}
           height={502}
           className="object-contain relative z-0 rounded-xl"
          />

          <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
            {projectInfo.map((image, index) => (
              <div key={index}>
                <ShoeCard
                  index={index}
                  imgURL={image}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                />
              </div>

            ))}
          </div>
        </div>
      </section>
    );
  };

  export default Services;
