import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  return (
    <header className="z-10 w-full absolute padding-x py-8">
      <nav className="flex max-container justify-between items-center">
        <a href="/">
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>

        <ul className="flex flex-1 justify-center gap-16 items-center max-lg:hidden">
        {navLinks.map((item)=>(
          <li key={item.label}>
            <a
            href={item.href}
            className="font-montserrat text-slate-gray">
              {item.label}
            </a>
          </li>
        ))}
        </ul>

        <div className="flex gap-2 text-lg font-montserrat font-medium max-lg:hidden wide:mr-24">
          <a href="/">Sign in</a>
          <span></span>
          <a href="/">Explore now</a>
        </div>

        <div className="hidden max-lg:block">
          <img
            src={hamburger}
            alt="hamburg icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>


  );
};

export default Nav;
