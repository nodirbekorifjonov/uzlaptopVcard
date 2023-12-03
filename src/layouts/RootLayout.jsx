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
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default RootLayout;
