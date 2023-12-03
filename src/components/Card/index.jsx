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
// import uzlaptopLogo from "../../assets/static/uzlaptop.png";

const Card = (props) => {
  const [enabled, setEnabled] = useState(
    localStorage.getItem("darkModeEnabled") === "true"
  );

  const data = props.data;

  // const imagePath = "assets/";

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
    <div className="site-container flex justify-center items-center h-full py-[30px]">
      <div className="w-[675px] max-[700px]:w-full ">
        <div className="card w-full shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] py-[20px] px-[30px] rounded-2xl bg-[#fdfeffe7] dark:bg-[#32364fc2]">
          {/* HEADER */}
          <header className="header flex justify-between items-center mb-[40px] max-[700px]:mb-[20px]">
            <a
              href="https://t.me/virtualcarduz"
              target="_blank"
              className="font-bold text-[#333751] text-[20px] dark:text-[#fdfeff]"
            >
              VCARD
            </a>
            <Switch
              checked={enabled}
              onChange={toggleDarkMode}
              className={`${enabled ? "bg-[#333751]" : "bg-[#ebebeb]"}
          p-[2px] relative inline-flex h-[40px] w-[74px] shrink-0 cursor-pointer rounded-full border-[1px] border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75 shadow-lg dark:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)]`}
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
              src={data.avatar}
              alt=""
              className="rounded-full object-cover w-[120px] h-[120px] shadow-[5px_5px_15px_0px_rgba(0,0,0,0.2)] self-center mb-7 max-[700px]:mb-[15px] max-[700px]:w-[85px] max-[700px]:h-[85px]"
            />
            <div className="info mb-5 w-[60%] max-[504px]:w-[90%]">
              <h2 className="name text-3xl font-semibold mb-2 text-[#333751] text-center dark:text-[#fdfeff]">
                {data.name}
              </h2>
              <h3 className="font-semibold text-base uppercase text-[#acaeb8] text-center tracking-wide mb-1">
                {data.job}
              </h3>
              <p className="text-[15px] leading-5 font-semibold italic text-[#333751] text-center dark:text-[#fdfeff]">
                {data.info}
              </p>
            </div>
            <a
              href={`tel:${data.workPhone}`}
              className="call flex justify-center items-center gap-x-2 py-[12px] px-[30px] mb-9 rounded-full text-white font-semibold self-center shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] bg-gradient-to-r from-pink-500 to-purple-500 transition-all ease-linear duration-300 hover:ease-in hover:from-purple-500 hover:to-pink-500 max-[700px]:mb-[20px]"
            >
              <BsTelephoneFill />
              <span>Bog'lanish</span>
            </a>

            <span className="block w-[90%] h-[1px] bg-[#e9e9e9] rounded-full mb-9 max-[504px]:w-[100%] max-[700px]:mb-[20px]" />

            <div className="links w-full flex justify-evenly flex-wrap gap-x-4 gap-y-5 max-[700px]:gap-2">
              {/* MOBILE */}
              {data.workPhone && (
                <a
                  href={`tel:${data.workPhone}`}
                  className="link mobile flex flex-col items-center w-[110px]"
                >
                  <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#1dbf38] to-[#4cfc69] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] max-[700px]:w-[60px] max-[700px]:h-[60px]">
                    <BsTelephoneFill className="mx-auto text-[40px] max-[700px]:text-[25px]" />
                  </div>
                  <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                    Mobil raqam
                  </h3>
                  <p className="text-[#acaeb8] leading-4 text-sm italic">
                    {data.workPhone}
                  </p>
                </a>
              )}

              {/* ADDRESS */}
              {data.addressLink && (
                <a
                  href={data.addressLink}
                  target="_blank"
                  className="link address flex flex-col items-center w-[110px]"
                >
                  <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#ff3334] to-[#df0202] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] max-[700px]:w-[60px] max-[700px]:h-[60px]">
                    <GrLocation className="mx-auto text-[40px] max-[700px]:text-[25px]" />
                  </div>
                  <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                    Manzil
                  </h3>
                  <p className="text-[#acaeb8] leading-4 text-sm italic text-center">
                    {data.address}
                  </p>
                </a>
              )}

              {/* WEBSITE */}
              {data.website && (
                <a
                  href={`https://${data.website}`}
                  target="_blank"
                  className="link website flex flex-col items-center w-[110px]"
                >
                  <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#27d4fb] to-[#276def] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] max-[700px]:w-[60px] max-[700px]:h-[60px]">
                    <TfiWorld className="mx-auto text-[40px] max-[700px]:text-[25px]" />
                  </div>
                  <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                    Vebsayt
                  </h3>
                  <p className="text-[#acaeb8] leading-4 text-sm italic">
                    {data.website}
                  </p>
                </a>
              )}

              {/* INSTAGRAM */}
              {data.instagram && (
                <a
                  href={`https://instagram.com/${data.instagram}`}
                  target="_blank"
                  className="link website flex flex-col items-center w-[110px]"
                >
                  <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] max-[700px]:w-[60px] max-[700px]:h-[60px]">
                    <FaInstagram className="mx-auto text-[40px] max-[700px]:text-[25px]" />
                  </div>
                  <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                    Instagram
                  </h3>
                  <p className="text-[#acaeb8] leading-4 text-sm italic">
                    {data.instagram}
                  </p>
                </a>
              )}

              {/* TELEGRAM */}
              {data.telegram && (
                <a
                  href={`https://t.me/${data.telegram}`}
                  target="_blank"
                  className="link website flex flex-col items-center w-[110px]"
                >
                  <div className="flex justify-between items-center w-[100px] h-[100px] rounded-full bg-gradient-to-r from-[#40bcfe] to-[#0c8ccc] mb-[6px] transition-all ease-linear duration-300 hover:shadow-[5px_5px_15px_0px_rgba(0,0,0,0.1)] max-[700px]:w-[60px] max-[700px]:h-[60px]">
                    <FaTelegramPlane className="mx-auto text-[40px] max-[700px]:text-[25px]" />
                  </div>
                  <h3 className="text-[15px] leading-5 font-bold mb-1 text-[#333751] dark:text-[#fdfeff] ">
                    Telegram
                  </h3>
                  <p className="text-[#acaeb8] leading-4 text-sm italic">
                    {data.telegram}
                  </p>
                </a>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Card;
