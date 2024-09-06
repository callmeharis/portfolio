import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-center items-center w-full fixed z-10 top-3">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="#home" className="nav-item">
          Home
        </Link>
        <Link href="#projects" className="nav-item">
          Projects
        </Link>
        <Link href="#about" className="nav-item">
          About
        </Link>
        <Link href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default Header;
