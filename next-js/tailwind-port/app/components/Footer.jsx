// import { copyrightSign } from "../assets/icons";
// import { footerLogo } from "../assets/images";
import {footerInfo } from "../constants";
// import { facebook, instagram, twitter} from "../assets/icons";
import { city, email, phone } from "../assets/icons";
import Image from "next/image";
const Footer = () => {

  return (
    <footer className='max-container2'
    id="contact">
      <div className="flex flex-col">
        <a href="#home">
          <h1 className="text-white text-3xl text-center"> Andrew Mckiddny</h1>
        </a>
      </div>
      <div className="flex items-center max-sm:flex-col max-sm:mt-1 max-sm:gap-1 gap-10 mt-10 justify-center">
        {footerInfo.map((xd)=>(
          (
          <a
            href={xd.link}
            target="_blank"
            rel="noreferrer"
              key={xd.info}
            >
          <div className="flex flex-5 lg:gap-2 gap-1 flex-wrap items-center justify-center text-white mb-5">
            <Image
              src={xd.pic}
              alt={xd.info}
              width={24}
              height={24}
              className="bg-white rounded-full"
            />
            {xd.info}
          </div>
            </a>)
        ))}
      </div>
      <div className="flex flex-col justify-center items-center mt-10">
        <p className="text-white">Built with Next.js w/ Tailwind</p>
      </div>
    </footer>
  );
};

export default Footer;
