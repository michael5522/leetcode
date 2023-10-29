import Image from "next/image";
import {hamburger} from '../assets/icons/';
import {headerLogo} from '../assets/images';
import {navLinks} from "../constants";

export default function Navbar() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <div className="flex justify-between items-center max-container">
        <a href='/'>

          <Image
            src={headerLogo}
            alt="logo"
            width={125}
            height={29}
            className='m-0 w-[129px] h-[29px]'
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((xx) => (
            <li key={xx.label}>
              <a
                href={xx.href}
                className='font-montserrat leading-normal text-lg text-slate-gray'
              >
                {xx.label}
              </a>
            </li>
          ))}
        </ul>


        <div className="hidden max-lg:block">
          <Image
            src={hamburger}
            alt="hamburger"
            width={25}
            height={25}
          />
        </div>
      </div>
    </header>
  );
};
