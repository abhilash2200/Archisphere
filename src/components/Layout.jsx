import React from "react";
import Header from "./Header";
import Footer from "./Footer.Jsx";
import { ToastContainer } from "react-toastify";

const Layout = ({ children }) => {
  return (
    <>
      <ToastContainer />
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
