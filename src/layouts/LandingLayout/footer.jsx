import { Link } from "react-router-dom";

import linkedinIcon from "/imgs/landing/linkedin.svg";
import termsofuseIcon from "/imgs/landing/termsofuse.svg";
import closeIcon from "/imgs/landing/close.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center w-full">
      <a href="/" target="_blank">
        <img src={linkedinIcon} />
      </a>
      <Link to="/privacy-policy" className="flex flex-row gap-4 hover:cursor-pointer">
        <img src={termsofuseIcon} />
      </Link>
      <img className="hover:cursor-pointer" src={closeIcon} />
    </footer>
  );
};

export default Footer;
