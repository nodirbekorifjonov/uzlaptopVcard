import React from "react";
import "./style.css";

// Images
import heroImage from "../../assets/static/phone-img.png";

// React Icons
import { BsQrCodeScan } from "react-icons/bs";
import { RiShareLine } from "react-icons/ri";
import { GoTrophy } from "react-icons/go";

// Components
import PricingCard from "../../components/PricingCard";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero text-[#444] font-poppins text-[16px] py-[50px] max-[895px]:py-[30px]">
        <div className="site-container flex justify-between items-center max-[895px]:flex-col max-[895px]:gap-[50px]">
          {/* Hero Information */}
          <div className="hero__info w-[400px] max-[895px]:w-[70%] max-[895px]:text-center max-[595px]:w-full">
            <h1 className="hero__title text-[45px] font-medium leading-[1.2] mb-[15px] max-[895px]:text-[40px] max-[595px]:text-[30px] max-[595px]:mb-[5px]">
              Hammasi raqamli biznes kartadan boshlanadi.
            </h1>
            <p className="hero__description leading-[1.8] mb-[30px] max-[595px]:text-[15px]">
              Mijozlar va hamkorlar bilan kontaktlarni (messenjerlar,
              telefonlar, elektron pochta va boshqalar) almashishning oson usuli
            </p>
            <a
              href="https://t.me/virtualcarduz_bot"
              target="_blank"
              className="hero__btn py-[15px] px-[30px] text-[14px] bg-[#ff0060] font-semibold text-white rounded-[30px] transition-all hover:bg-[#dd0055]"
            >
              VIZITKA YARATISH
            </a>
          </div>
          {/* Hero Image */}
          <img
            src={heroImage}
            alt=""
            width={468}
            className="hero__img max-[895px]:w-[400px]"
          />
        </div>
      </section>

      {/* Work Section */}
      <section className="work text-[#444] font-poppins text-[16px] py-[40px] bg-[#f7f7f7]">
        <div className="site-container">
          {/* Work Title */}
          <h2 className="work__title text-[25px] mb-[25px] text-center">
            Bu qanday ishlaydi?
          </h2>
          {/* Work Cards */}
          <ul className="work__list flex justify-around flex-wrap gap-y-[20px]">
            <li className="work__item relative w-[320px] bg-[#ff0060]">
              <div className="w-full h-full flex flex-col items-center text-center pt-[30px] px-[20px] pb-[50px] bg-[#f7f7f7] cursor-pointer transition-all duration-500 border-[2px] border-transparent hover:border-[#ff0060] hover:translate-x-[8px] hover:translate-y-[-8px]">
                <BsQrCodeScan className="text-[80px] mb-[20px] text-[#ff0060]" />
                <h3 className="work__item-title text-[20px] mb-[10px]">
                  Raqamli tashrif qog'ozini yarating
                </h3>
                <p className="work__item-description text-[#929399]">
                  Vizitkangiz uchun osongina QR kod yarating va ajoyib birinchi
                  taassurot qoldiring. Profilingizni to'ldiring, bu oson
                </p>
              </div>
            </li>
            <li className="work__item relative w-[320px] bg-[#40b0e2]">
              <div className="w-full h-full flex flex-col items-center text-center pt-[30px] px-[20px] pb-[50px] bg-[#f7f7f7] cursor-pointer transition-all duration-500 border-[2px] border-transparent hover:border-[#40b0e2] hover:translate-x-[8px] hover:translate-y-[-8px]">
                <RiShareLine className="text-[80px] mb-[20px] text-[#40b0e2]" />
                <h3 className="work__item-title text-[20px] mb-[10px]">
                  Kartangizni har kimga ulashing
                </h3>
                <p className="work__item-description text-[#929399]">
                  Raqamli tashrif qogʻozingizni QR koddan foydalangan har bir
                  kishi bilan osongina baham koʻring yoki uni elektron pochta,
                  havola va boshqalar orqali yuboring. QR kodni yuklab
                  olishingiz va varaqalar, axborotnomalar yoki reklama taxtasi
                  kabi istalgan narsani chop etishingiz mumkin.
                </p>
              </div>
            </li>
            <li className="work__item relative w-[320px] bg-[#F79327]">
              <div className="w-full h-full flex flex-col items-center text-center pt-[30px] px-[20px] pb-[50px] bg-[#f7f7f7] cursor-pointer transition-all duration-500 border-[2px] border-transparent hover:border-[#F79327] hover:translate-x-[8px] hover:translate-y-[-8px]">
                <GoTrophy className="text-[80px] mb-[20px] text-[#F79327]" />
                <h3 className="work__item-title text-[20px] mb-[10px]">
                  Ko'proq mijozlarni oling
                </h3>
                <p className="work__item-description text-[#929399]">
                  Sizning mijozlaringiz siz bilan bog'lanish yo'lini topadi.
                  Ular qilishlari kerak bo'lgan narsa QR kodni skanerlash va siz
                  bilan bog'lanish uchun eng yaxshi kanalni tanlashdir.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricining"
        className="pricing text-[#444] font-poppins text-[16px] py-[40px]"
      >
        <div className="site-container">
          {/* Work Title */}
          <h2 className="work__title text-[25px] mb-[25px] text-center">
            Tariflar
          </h2>
          {/* Pricing Cards */}
          <PricingCard />
        </div>
      </section>
    </>
  );
};

export default Home;
