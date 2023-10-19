import React from "react";

const Layout = ({ children, className="" }) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light dark:bg-dark items-center 
    p-32 xl:p-24 xl:pt-0 lg:p-16 lg:pt-0 md:p-12 md:pt-0 sm:p-8 sm:pt-0 xs:pt-0 ${className}`}>
      {children}
    </div>
  );
}

export default Layout