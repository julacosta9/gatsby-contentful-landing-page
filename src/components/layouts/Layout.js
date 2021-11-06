import React from "react";
import Navbar from "../sections/Navbar";

const Layout = ({ mainNavigationData, children }) => {
  return (
    <div className="flex flex-col relative overflow-hidden min-h-screen mx-0 my-auto">
      <div className="flex-grow mx-6">
        <Navbar data={mainNavigationData} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
