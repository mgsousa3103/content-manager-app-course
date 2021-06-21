import React from "react";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ActiveResource from "components/ActiveResource";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ActiveResource />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
