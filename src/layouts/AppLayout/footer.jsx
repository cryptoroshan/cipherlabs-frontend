import { Link } from "react-router-dom";

import linkedinIcon from "/imgs/landing/linkedin.svg";
import twitterIcon from "/imgs/landing/twitter.svg";

const Footer = () => {
  return (
    <footer className="flex flex-row justify-between items-center w-full border-t border-gray-600 px-[22px] py-5 backdrop-blur">
      <a
        href="https://www.linkedin.com/company/cipher-labs-xyz"
        target="_blank"
      >
        <img src={linkedinIcon} />
      </a>
      <div className="flex flex-row gap-4">
        <Link to="/terms-of-use">
          <p className="text-sm font-medium text-footer">Terms Of Use</p>
        </Link>
        <p className="text-sm font-medium text-[#667085]">•</p>
        <Link to="/privacy-policy">
          <p className="text-sm font-medium text-footer">Privacy Policy</p>
        </Link>
      </div>
      <a href="https://twitter.com/cipherlabsxyz" target="_blank">
        <img src={twitterIcon} />
      </a>
    </footer>
  );
};

export default Footer;
