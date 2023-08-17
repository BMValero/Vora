
import React, { useState } from "react";

/// React router dom
import Link from "next/link";

/// images
import logo from "../../images/logo.png";
import logoText from "../../images/logo-text.png";

console.log("logo", logo);

const NavHader = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="nav-header">
      <Link href="/" className="brand-logo">
        <img className="logo-abbr" src={logo.src} alt="" />
        <img className="logo-compact" src={logoText.src} alt="" />
        <img className="brand-title" src={logoText.src} alt="" />
      </Link>

      <div className="nav-control" onClick={() => setToggle(!toggle)}>
        <div className={`hamburger ${toggle ? "is-active" : ""}`}>
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
      </div>
    </div>
  );
};

export default NavHader;
