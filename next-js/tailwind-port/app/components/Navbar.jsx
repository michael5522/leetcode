"use client";
// import Image from "next/image";
// import {hamburger, close} from '../assets/icons/';
import {navLinks} from "../constants";

// import {useState} from "react";
// import Link from "next/link";
// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleClick = () => {
//     console.log('fuk you!')
//     setIsOpen(!isOpen);
//     console.log(isOpen)
//   }
//   return (

//     <header className="padding-x py-8 absolute z-10 w-full">
//       <div className="flex justify-between items-center max-container">
//         <a href='/'>

//           <h1>Person Name</h1>
//         </a>

//         <ul className="flex-1 flex justify-end items-center gap-16 max-lg:hidden">
//           {navLinks.map((xx) => (
//             <li key={xx.label}>
//               <a
//                 href={xx.href}
//                 className='font-montserrat leading-normal text-lg text-slate-gray'
//               >
//                 {xx.label}
//               </a>
//             </li>
//           ))}
//         </ul>


//         <div className="hidden max-lg:block">
//             <button
//               className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//               onClick={handleClick}
//             >
//               {isOpen ? (
//                 <div className="flex flex-col">
//                   <div className="flex absolte justify-items-end justify-self-end">
//                   <Image src={close} width={25} height={25} alt="logo" />
//                   </div>

//                   <ul className="items-center justify-center ">
//                       <li className="">
//                         <Link href="#about" onClick={handleClick}>
//                           About
//                         </Link>
//                       </li>
//                       <li className="">
//                         <Link href="#projects" onClick={handleClick}>
//                           Projects
//                         </Link>
//                       </li>
//                       <li className="">
//                     <Link href="#skills" onClick={handleClick}>
//                           Skills
//                         </Link>
//                       </li>
//                       <li className="">
//                     <Link href="#contact" onClick={handleClick}>
//                           Contact
//                         </Link>
//                       </li>
//                   </ul>
//                 </div>


//               ) : (
//                 <Image
//                   src={hamburger}
//                   width={25}
//                   height={25}
//                   alt="logo"
//                   className="focus:border-none active:border-none"
//                 />
//               )}
//             </button>


//         </div>



//       </div>
//     </header>
//   );
// };

import { useState } from "react";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex items-center justify-between border-b border-orange-100 py-8 border-2 mx-3">
      <a href="/">
        <img src="https://designbygio.it/images/logo.png" alt="logo" />
      </a>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-coral-red"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-coral-red"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-end justify-between min-h-[250px]">

                {navLinks.map((xx) => (
                          <li key={xx.label}
                          className="border-gray-400 border-2 uppercase my-8 pr-8"
                          >
                            <a
                              href={xx.href}
                              className='font-montserrat leading-normal text-slate-gray text-3xl'
                            >
                              {xx.label}
                            </a>
                          </li>
                        ))}

            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        border-2;
        border-gray-100;
      }
    `}</style>
    </div>
  );
}
