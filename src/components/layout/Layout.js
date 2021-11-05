import React from "react";
import Navbar from "../sections/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen mx-0 my-auto max-w-lg p-4">
      <div className="flex-grow">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
