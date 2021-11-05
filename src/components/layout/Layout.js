import React from "react";
import Navbar from "../sections/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col relative min-h-screen mx-0 my-auto">
      <div className="flex-grow mx-4">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
