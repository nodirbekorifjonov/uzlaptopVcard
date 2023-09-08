import React, { useState, useEffect } from "react";
import "./style.css";
import { Switch } from "@headlessui/react";

import { useTheme } from "../../hooks/useTheme";

import { FiSun, FiMoon } from "react-icons/fi";
import { BsTelephoneFill } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { TfiWorld } from "react-icons/tfi";
import { FaInstagram, FaTelegramPlane } from "react-icons/fa";

// images
import uzlaptopLogo from "../../assets/static/uzlaptop.png";

const Card = () => {
  const [enabled, setEnabled] = useState(
    localStorage.getItem("darkModeEnabled") === "true"
  );

  const { changeMode } = useTheme();

  // Update localStorage whenever 'enabled' changes
  useEffect(() => {
    localStorage.setItem("darkModeEnabled", enabled);
  }, [enabled]);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setEnabled(!enabled);
    const newMode = !enabled && "dark";
    changeMode(newMode);
  };

  return (
    <div className="max-w-[675px] h-full my-[40px] mx-auto">
      <div className="card w-full shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] py-[30px] px-[30px] rounded-2xl bg-[#fdfeffe7] dark:bg-[#32364fc2]">
        {/* HEADER */}
        <header className="header flex justify-between items-center mb-[64px]">
          <a
            href="https://t.me/vcarduz"
            target="_blank"
            className="font-bold text-[#333751] text-[20px] dark:text-[#fdfeff]"
          >
            VCARD
          </a>
          <Switch
            checked={enabled}
            onChange={toggleDarkMode}
            className={`${enabled ? "bg-[#333751]" : "bg-[#ebebeb]"}
          p-[2px] relative inline-flex h-[40px] w-[74px] shrink-0 cursor-pointer rounded-full border-[1px] border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 shadow-lg`}
          >
            <span className="sr-only">Use setting</span>
            <span
              aria-hidden="true"
              className={`${enabled ? "translate-x-9" : "translate-x-0"}
            pointer-events-none h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out flex justify-center items-center`}
            >
              {enabled ? <FiMoon /> : <FiSun />}
            </span>
          </Switch>
        </header>
        {/* MAIN */}
        <main className="main flex flex-col items-center">
          <img
            src={uzlaptopLogo}
            alt=""
            className="rounded-full object-cover w-[120px] h-[120px] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.2)] self-center mb-7"
          />
          <div className="info mb-5 w-[60%] max-[504px]:w-[90%]">
            <h2 className="name text-3xl font-semibold mb-2 text-[#333751] text-center dark:text-[#fdfeff]">
              Abdug'ani Qodirov
            </h2>
            <h3 className="font-semibold text-base uppercase text-[#acaeb8] text-center tracking-wide mb-1">
              Menedjer
            </h3>
            <p className="text-[15px] leading-5 font-semibold italic text-[#333751] text-center dark:text-[#fdfeff]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              mollitia.
            </p>
          </div>
          <a
            href="tel:+998882710323"
            className="call flex justify-center items-center gap-x-2 py-[12px] px-[30px] mb-9 rounded-full text-white font-semibold self-center shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] bg-gradient-to-r from-pink-500 to-purple-500 transition-all ease-linear duration-300 hover:ease-in hover:from-purple-500 hover:to-pink-500"
          >
            <BsTelephoneFill />
            <span>Bog'lanish</span>
          </a>

          <span className="block w-[90%] h-[1px] bg-[#e9e9e9] rounded-full mb-9 max-[504px]:w-[100%]" />

          <div className="links w-full flex justify-evenly flex-wrap gap-x-8 gap-y-7">
            {/* MOBILE */}
            <a
              href="tel:+998971283333"
              className="link mobile flex flex-col items-center w-[110px]"
            >
              <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#1dbf38] to-[#4cfc69] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]">
                <BsTelephoneFill className="mx-auto text-[40px]" />
              </div>
              <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                Mobil raqam
              </h3>
              <p className="text-[#acaeb8] leading-4 italic">+998971283333</p>
            </a>

            {/* ADDRESS */}
            <a
              href="https://yandex.com/maps/-/CDQc4T2~"
              target="_blank"
              className="link address flex flex-col items-center w-[110px]"
            >
              <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#ff3334] to-[#df0202] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]">
                <GrLocation className="mx-auto text-[40px]" />
              </div>
              <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                Manzil
              </h3>
              <p className="text-[#acaeb8] leading-4 italic">
                "Malika" savdo majmuasi B43a
              </p>
            </a>

            {/* WEBSITE */}
            <a
              href="https://uzlaptop.net"
              target="_blank"
              className="link website flex flex-col items-center w-[110px]"
            >
              <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#27d4fb] to-[#276def] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]">
                <TfiWorld className="mx-auto text-[40px]" />
              </div>
              <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                Vebsayt
              </h3>
              <p className="text-[#acaeb8] leading-4 italic">uzlaptop.net</p>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://instagram.com/uz_laptop"
              target="_blank"
              className="link website flex flex-col items-center w-[110px]"
            >
              <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]">
                <FaInstagram className="mx-auto text-[40px]" />
              </div>
              <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                Instagram
              </h3>
              <p className="text-[#acaeb8] leading-4 italic">uz_laptop</p>
            </a>

            {/* TELEGRAM */}
            <a
              href="https://t.me/uzlaptop"
              target="_blank"
              className="link website flex flex-col items-center w-[110px]"
            >
              <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#40bcfe] to-[#0c8ccc] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]">
                <FaTelegramPlane className="mx-auto text-[40px]" />
              </div>
              <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                Telegram
              </h3>
              <p className="text-[#acaeb8] leading-4 italic">uzlaptop</p>
            </a>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Card;
