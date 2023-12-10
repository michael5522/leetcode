"use client";
import Image from "next/image";
import {hamburger, close} from '../assets/icons/';
import {navlogo} from '../assets/logos';
import {navLinks} from "../constants";
import {useState} from "react";
import Link from "next/link";
export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white z-20">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href='/'>
          <Image
            src={navlogo}
            alt="logo"
            width="100"
            height="55"
            className="cursor-pointer"
            priority
          />
        </Link>

        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
              {navLinks.map((xx) => (
                <li key={xx.label} className="ml-10 hover:border-b text-xl">
                  <a
                    href={xx.href}
                    className='font-montserrat leading-normal text-lg'
                  >
                  {xx.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>

        <div onClick={handleClick} className="sm:hidden cursor-pointer pl-24">
          <Image
            src={hamburger}
            width={25}
            height={25}
            alt="menu"
            className="focus:border-none active:border-none"
          />
        </div>

      </div>

      <div className={
        isOpen
          ? "fixed left-0 top-0 w-[75%] sm:hidden h-screen bg-[#FBFBFB] p-10 ease-in duration-500"
        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
      }>
        <div className="flex w-full items-center justify-end">
          <Image
            src={close}
            width={25}
            height={25}
            alt="close"
              className="focus:border-none active:border-none cursor-pointer"
            onClick={handleClick}
          />
        </div>

        <div className="flex-col py-4">
            <ul>
              {navLinks.map((xx) => (
                <li key={xx.label} className="py-4 cursor-pointer">
                  <a
                    href={xx.href}
                    className='font-montserrat leading-normal text-lg hover:border-b'
                    onClick={()=> setIsOpen(false)}
                  >
                    {xx.label}
                  </a>
                </li>
              ))}
            </ul>
        </div>
      </div>
    </nav>
  )
};
