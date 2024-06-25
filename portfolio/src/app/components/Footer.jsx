import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><img src="images/logo-white.png" className="h-12" alt="logo alalluna" /></span>
        <p className="text-stone-300 pt-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
