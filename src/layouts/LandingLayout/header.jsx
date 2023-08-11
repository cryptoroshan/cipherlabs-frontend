import { Link } from "react-router-dom";

import logoIcon from "/imgs/landing/logo.svg";
import CipherLabsIcon from "/imgs/landing/CipherLabs.svg";
import menuIcon from "/imgs/landing/menu.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      <Link to="/" className="flex flex-row gap-[14px] hover:cursor-pointer">
        <img src={logoIcon} />
        <img src={CipherLabsIcon} />
      </Link>
      <img className="hover:cursor-pointer" src={menuIcon} />
    </header>
  );
};

export default Header;
