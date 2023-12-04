import React, { useEffect } from "react";

// Style
import "./style.css";

// Images
import Logo from "../../assets/static/logo.png";
import UZ from "../../assets/static/flags/uz.png";
import RU from "../../assets/static/flags/ru.png";
import EN from "../../assets/static/flags/en.png";

// React Icons
import { TiPlus } from "react-icons/ti";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

import { useState } from "react";

const index = () => {
  const [changeLang, setChangeLang] = useState("uz");
  const [dropdown, setDropdown] = useState(false);
  const [showNav, setShowNav] = useState(false);

  const handleDropdown = () => {
    !dropdown ? setDropdown(true) : setDropdown(false);
  };

  const handleShowNav = () => {
    !showNav ? setShowNav(true) : setShowNav(false);
  };

  return (
    <header
      // style={{ paddingTop: "1rem", paddingBottom: "1rem" }}
      className={`header sticky top-0 z-[100] py-[5px] mb-[10px] bg-white dark:bg-[#32364f] ${
        showNav && "shadow-[0px_12px_11px_-14px_rgba(34,60,80,0.22)]"
      } dark:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]`}
    >
      <div className="site-container flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="site__logo flex items-center select-none">
          <img src={Logo} alt="" width={70} />
          <span className="text-[16px] font-poppinsMedium leading-[1.3] text-black dark:text-white">
            <span className="font-bold tracking-[1px]">Virtual</span>
            <br />
            Card
          </span>
        </a>

        {/* Navigation Bar */}
        <nav className="sitenav max-[595px]:hidden">
          <ul className="sitenav__list flex items-center gap-5 text-[17px] text-[#333751] dark:text-white">
            <li className="sitenav__item">
              <a href="/" className="sitenav__link hover:text-[#ff0060]">
                Tariflar
              </a>
            </li>
            <li className="sitenav__item">
              <a href="/" className="sitenav__link hover:text-[#ff0060]">
                Bog'lanish
              </a>
            </li>
            <li className="sitenav__item">
              <a
                href="https://t.me/virtualcarduz_bot"
                target="_blank"
                className="sitenav__link flex items-center gap-[4px] text-[16px] bg-[#ff0060] text-white py-2 px-3 rounded-md border-[2px] border-transparent transition-all hover:bg-[#dd0055]"
              >
                <span className="font-medium">Yaratish</span>
                <TiPlus />
              </a>
            </li>
            <li
              onClick={handleDropdown}
              className="sitenav__item relative flex justify-center items-center p-[6px] pb-[8px] bg-transparent border-[2px] border-[#ff0060] rounded-full leading-[1] font-bold text-[#ff0060] cursor-pointer"
            >
              {changeLang}
              {dropdown && (
                <ul className="dropdown__list absolute left-[-20px] top-[50px] py-2 w-[80px] bg-white flex flex-col rounded shadow-[3px_3px_14px_0px_rgba(34,60,80,0.2)] max-[1285px]: translate-x-[-30px]">
                  <li
                    onClick={() => setChangeLang("uz")}
                    className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                  >
                    <span className="mr-auto">uz</span>{" "}
                    <img src={UZ} alt="" width={25} />
                  </li>
                  <li
                    onClick={() => setChangeLang("ru")}
                    className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                  >
                    <span className="mr-auto">ru</span>{" "}
                    <img src={RU} alt="" width={25} />
                  </li>
                  <li
                    onClick={() => setChangeLang("en")}
                    className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                  >
                    <span className="mr-auto">en</span>{" "}
                    <img src={EN} alt="" width={25} />
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>

        {/* Header Mobile */}
        <div className="header-mobile">
          <button
            onClick={handleShowNav}
            className="header-hamburger bg-[#ff0060] py-[10px] px-[15px] text-white rounded transition-all hover:bg-[#dd0055]"
          >
            {!showNav ? <GiHamburgerMenu /> : <CgClose />}
          </button>

          {/* Mobile Navigation */}
          {showNav && (
            <nav
              onClick={() => setShowNav(false)}
              className="mobile-sitenav flex flex-col items-center absolute top-[88px] bottom-0 w-[80%] h-[85vh] right-0 py-5 px-3 bg-white shadow-[-4px_20px_30px_0px_rgba(34,60,80,0.14)]"
            >
              <ul className="mobile-sitenav__list flex flex-col justify-between text-center gap-4">
                <li className="sitenav__item">
                  <a
                    href="/"
                    className="sitenav__link hover:text-[#ff0060] py-4"
                  >
                    Tariflar
                  </a>
                </li>
                <li className="sitenav__item">
                  <a
                    href="/"
                    className="sitenav__link hover:text-[#ff0060] py-4"
                  >
                    Bog'lanish
                  </a>
                </li>
                <li className="sitenav__item">
                  <a
                    href="https://t.me/virtualcarduz_bot"
                    target="_blank"
                    className="sitenav__link flex items-center gap-[4px] text-[16px] bg-[#ff0060] text-white py-2 px-3 rounded-md border-[2px] border-transparent transition-all hover:bg-[#dd0055]"
                  >
                    <span className="font-medium">Yaratish</span>
                    <TiPlus />
                  </a>
                </li>
                <li
                  onClick={handleDropdown}
                  className="sitenav__item relative flex justify-center items-center p-[6px] pb-[10px] bg-transparent border-[2px] border-[#ff0060] rounded-full leading-[1] font-bold text-[#ff0060] cursor-pointer"
                >
                  {changeLang}
                  {dropdown && (
                    <ul className="dropdown__list absolute align-middle left-[10px] top-[50px] py-2 w-[80px] flex flex-col rounded shadow-[3px_3px_14px_0px_rgba(34,60,80,0.2)]">
                      <li
                        onClick={() => setChangeLang("uz")}
                        className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                      >
                        <span className="mr-auto">uz</span>{" "}
                        <img src={UZ} alt="" width={25} />
                      </li>
                      <li
                        onClick={() => setChangeLang("ru")}
                        className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                      >
                        <span className="mr-auto">ru</span>{" "}
                        <img src={RU} alt="" width={25} />
                      </li>
                      <li
                        onClick={() => setChangeLang("en")}
                        className="dropdown__item flex py-[5px] px-3 hover:bg-neutral-200"
                      >
                        <span className="mr-auto">en</span>{" "}
                        <img src={EN} alt="" width={25} />
                      </li>
                    </ul>
                  )}
                </li>
              </ul>

              <ul className="mobile-sitenav__links flex absolute bottom-[50px] gap-2">
                <li className="">
                  <a
                    href="https://t.me/virtualcarduz"
                    target="_blank"
                    className="flex justify-center items-center w-[35px] h-[35px] border-[2px] border-[#40b0e2] text-[#40b0e2] rounded-full transition-all hover:border-transparent hover:text-white hover:bg-[#40b0e2]"
                  >
                    <FaTelegramPlane />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://www.instagram.com/virtualcard.uz/"
                    target="_blank"
                    className="flex justify-center items-center w-[35px] h-[35px] border-[2px] border-[#ee378e] text-[#ee378e] rounded-full transition-all hover:border-transparent hover:text-white hover:bg-[#ee378e]"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li className="">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    className="flex justify-center items-center w-[35px] h-[35px] border-[2px] border-[#0f0f0f] text-[#0f0f0f] rounded-full transition-all hover:border-transparent hover:text-white hover:bg-[#0f0f0f]"
                  >
                    <RiTwitterXLine />
                  </a>
                </li>
              </ul>
            </nav>
          )}
        </div>
        {/* {showNav && (
          <div className="overlay absolute top-0 bottom-0 left-0 w-full bg-black z-[-2] opacity-40"></div>
        )} */}
      </div>
    </header>
  );
};

export default index;
