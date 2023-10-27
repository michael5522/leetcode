import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className='max-container'>
     <div className="flex flex-col">
    <img
      src={footerLogo}
      width="120"
      height="50"
    />
    <p className="text-white flex sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
    </p>

    <div className="flex">
      {socialMedia.map((xd)=>(
        <div className="flex bg-white rounded-full" key={xd.alt}>
          <img
            src={xd.src}
            alt={xd.alt}
          />
        </div>
      ))}
    </div>
  </div>

  <div className="flex">
    {footerLinks.map((xx)=>(
      <ol className="text-white">
        {xx.title}
        {xx.links.map((link)=>(
          <li>{link.name}</li>
        ))}
      </ol>
    ))}
  </div>

  <div className="flex justify-between">
    <div className="flex">
      <img
        src={copyrightSign}
      />
      <p className="text-white">Copyright. All rights reserved.</p>
    </div>
    <div className="flex">
      <p className="text-white">Terms and conditions</p>
    </div>
  </div>
    </footer>
  );
};

export default Footer;
