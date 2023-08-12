import { Link } from "react-router-dom";

import linkedinIcon from "/imgs/landing/linkedin.svg";
import termsofuseIcon from "/imgs/landing/termsofuse.svg";
import twitterIcon from "/imgs/landing/twitter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center w-full border-t border-gray-600 px-[22px] py-5 backdrop-blur">
      <a href="https://www.linkedin.com/company/cipher-labs-xyz" target="_blank">
        <img src={linkedinIcon} />
      </a>
      <Link to="/privacy-policy" className="flex flex-row gap-4 hover:cursor-pointer">
        <img src={termsofuseIcon} />
      </Link>
      <a href="https://twitter.com/cipherlabsxyz" target="_blank">
        <img src={twitterIcon} />
      </a>
    </footer>
  );
};

export default Footer;
