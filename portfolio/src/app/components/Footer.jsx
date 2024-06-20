import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-10 flex justify-between">
        <span><img src="images/logo.png" className="h-10" alt="logo alalluna" /></span>
        <p className="text-slate-600 pt-4">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
