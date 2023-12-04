import React from "react";
import { Outlet } from "react-router-dom";

// Style
import "./style.css";

// Components
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Main */}
      <main>
        <div className="block h-[75px]"></div>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
