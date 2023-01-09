import React from "react";
import Footer from "../Footer";
import Header from "../Header";
//import Header from "components/Header";
//import Footer from "components/Footer";

const CommonLayout = ({ children }) => {
  return (
    <div className="container common-layout">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default CommonLayout;
