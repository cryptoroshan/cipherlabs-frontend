import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";

import logoIcon from "/imgs/landing/logo.svg";
import CipherLabsIcon from "/imgs/landing/CipherLabs.svg";
import menuIcon from "/imgs/landing/menu.svg";
import closeIcon from "/imgs/landing/close.svg";

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center w-full">
      <Link to="/" className="flex flex-row gap-[14px] hover:cursor-pointer">
        <img src={logoIcon} />
        <img src={CipherLabsIcon} />
      </Link>
      <Menu as="div" className="inline-block text-left bg-accent !z-50">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <img className="hover:cursor-pointer" src={menuIcon} />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-in-out transform"
          enterFrom="translate-x-1/2"
          enterTo="translate-x-0"
          leave="transition ease-in-out transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <Menu.Items className="absolute left-0 top-0 w-screen h-screen bg-primary">
            <Menu.Item>
              <img className="absolute top-[26px] right-6 lg:right-[27px] 2xl:right-[29px] hover:cursor-pointer" src={closeIcon} />
            </Menu.Item>
            <div className="flex flex-col justify-center px-1 py-1 h-full">
              <Menu.Item>
                {({ active }) => (
                  <Link
                    to="/"
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 lg:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Analytics
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Trading Journal
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    KRSI Indicator
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Governance
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Contact Us
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    About Us
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Terms Of Use
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link
                    className="text-accent text-2xl lg:text-[40px] font-extrabold leading-9 xl:leading-[60px] 2xl:leading-[96px] text-center w-fit mx-auto"
                    style={{
                      textShadow: "0px 0px 100px #000",
                    }}
                  >
                    Privacy Policy
                  </Link>
                )}
              </Menu.Item>

            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </header>
  );
};

export default Header;
