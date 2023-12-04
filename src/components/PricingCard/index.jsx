import React from "react";

const index = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
      {/* 15 kun */}
      <div className="shadow p-5 rounded-lg border-t-4 border-[#ff0060] bg-white">
        <p className="uppercase text-sm font-medium text-[#dd0055]">Start</p>

        <p className="mt-4 text-3xl text-gray-700 font-medium">Bepul</p>

        <p className="mt-4 font-medium text-gray-700">
          Bir martalik foydalanish
        </p>

        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              15 kunlik obuna
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              QR-kod
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Tayyor vizitka dizayni
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="https://t.me/virtualcarduz_bot"
            target="_blank"
            className="block text-center bg-[#ff0060] hover:bg-[#dd0055] px-3 py-2 rounded-lg w-full text-white"
          >
            Buyurtma Berish
          </a>
        </div>
      </div>

      {/* 1 oy */}
      <div className="shadow p-5 rounded-lg border-t-4 border-[#ff0060] bg-white">
        <p className="uppercase text-sm font-medium text-[#dd0055]">Standart</p>

        <p className="mt-4 text-3xl text-gray-700 font-medium">
          25 000 <span className="text-base font-normal">/so'm</span>
        </p>

        <p className="mt-4 font-medium text-gray-700">Cheksiz foydalanish</p>

        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              1 oylik obuna
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              QR-kod
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Tayyor vizitka dizayni
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="https://t.me/virtualcarduz_bot"
            target="_blank"
            className="block text-center bg-[#ff0060] hover:bg-[#dd0055] px-3 py-2 rounded-lg w-full text-white"
          >
            Buyurtma Berish
          </a>
        </div>
      </div>

      {/* 1 yil */}
      <div className="shadow p-5 rounded-lg border-t-4 border-[#ff0060] bg-white">
        <p className="uppercase text-sm font-medium text-[#dd0055]">Premium</p>

        <p className="mt-4 text-3xl text-gray-700 font-medium">
          150 000 <span className="text-base font-normal">/so'm</span>
        </p>

        <p className="mt-4 font-medium text-gray-700">Cheksiz foydalanish</p>

        <div className="mt-8">
          <ul className="grid grid-cols-1 gap-4">
            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              1 yillik obuna
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              QR-kod
            </li>

            <li className="inline-flex items-center text-gray-600">
              <svg
                className="w-4 h-4 mr-2 fill-current text-[#ff0060]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
              </svg>
              Tayyor vizitka dizayni
            </li>
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="https://t.me/virtualcarduz_bot"
            target="_blank"
            className="block text-center bg-[#ff0060] hover:bg-[#dd0055] px-3 py-2 rounded-lg w-full text-white"
          >
            Buyurtma Berish
          </a>
        </div>
      </div>
    </div>
  );
};

export default index;
