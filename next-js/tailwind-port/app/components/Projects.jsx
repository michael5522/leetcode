"use client";


import { useState } from "react";
import { shoes } from "../constants";
import ProjectCard from "./ProjectCard";
import { bigShoe1 } from "../assets/images";
import { desktopquote } from "../assets/project-images"
import Image from "next/image";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

import { projectInfo } from "../constants"
const Projects = () => {
  console.log('111', projectInfo)
  const [bigShoeImg, setBigShoeImg] = useState(desktopquote);
  const [currentTitle, setCurrentTitle] = useState(projectInfo[0].title)
  const [currentStack, setCurrentStack] = useState(projectInfo[0].stack)
  const [currentDesc, setCurrentDesc] = useState(projectInfo[0].desc)
  const [currentURL, setCurrentURL] = useState(projectInfo[0].href)
  return (
    <section
      id='projects'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-7 max-container border-2 border-slate-600 max-sm:gap-1 max-sm:min-h-half'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-1'>

        <h1 className='mt-1 font-palanquin text-8xl max-sm:text-[50px] max-sm:leading-[39px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-1'>
            Recent Projects
          </span>
          <br />
          <span className='text-coral-red text-4xl max-sm:text-2xl mt-2'>{currentTitle}</span>
        </h1>

        <div className='relative hidden py-0 max-sm:flex'>

          <Image
            src={bigShoeImg}
            alt="projects"
            width={500}
            height={502}
            className="object-contain relative z-0 h-[200px] rounded-xl border-2 border-green-100"
          />

          <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[10%] max-sm:px-6'>
            {projectInfo.map((projecto, index) => (

              <div key={index}>
                <ProjectCard
                  index={index}
                  imgURL={projecto}
                  changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                  bigShoeImg={bigShoeImg}
                  currentTitle={currentTitle}
                  changeTitle={(xd) => setCurrentTitle(xd)}
                  currentStack={currentStack}
                  changeStack={(ola) => setCurrentStack(ola)}
                  currentDesc={currentDesc}
                  changeDesc={(ola) => setCurrentDesc(ola)}
                  currentURL={currentURL}
                  changeURL={(ola) => setCurrentURL(ola)}
                />
              </div>

            ))}
          </div>
        </div>

        <p className='font-montserrat text-slate-gray min-h-[120px] text-lg leading-8 mt-14 mb-2 sm:max-w-sm max-sm:mt- max-sm:text-sm'>
          {currentDesc}
        </p>
        <p className='font-montserrat text-slate-gray min-h-[40px] text-md leading-8 mb-14 sm:max-w-sm italic max-sm:text-sm max-sm:mb-5'>
          {currentStack}
        </p>
        <div className="ms-1">
          <Button label='Live Demo' iconURL={arrowRight} linkURL={currentURL} />
        </div>

      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-splash  bg-contain bg-center max-sm:py-0 max-sm:hidden'>

        <Image
          src={bigShoeImg}
          alt="projects"
          width={700}
          height={502}
          className="object-contain relative z-0 rounded-xl border-2 border-slate-500"
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[8%] sm:left-[10%] max-sm:px-6'>
          {projectInfo.map((projecto, index) => (

            <div key={index}>
              <ProjectCard
                index={index}
                imgURL={projecto}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                currentTitle={currentTitle}
                changeTitle={(xd) => setCurrentTitle(xd)}
                currentStack={currentStack}
                changeStack={(ola) => setCurrentStack(ola)}
                currentDesc={currentDesc}
                changeDesc={(ola) => setCurrentDesc(ola)}
                currentURL={currentURL}
                changeURL={(ola) => setCurrentURL(ola)}
              />
            </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
