"use client";
import React, { useState } from "react";
import logo from "../../public/img/logo.svg";
import { Icon } from "../ui/Icon";

const navList = [
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Work", link: "#work" },
  { label: "Contact", link: "#contact" },
  { label: "Article", link: "https://medium.com/@phurba" },
];

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="py-4 flex items-center px-4 md:px-12 border-b border-b-primary-500 shadow-md relative">
      <a href="#" className="w-16 h-16 inline-block">
        <img src={logo.src} className="h-full w-full" />
      </a>
      <nav
        className={`md:ml-auto translate-x-full opacity-0 pointer-events-none absolute inset-0 h-screen md:h-auto bg-primary-500/80 transition-all duration-500 flex justify-center z-10 items-center md:block md:z-0 md:opacity-100 md:translate-x-0 md:pointer-events-auto md:static md:bg-transparent ${isNavOpen ? "translate-x-0 opacity-100 pointer-events-auto" : ""}`}
      >
        <ul className="flex flex-col md:flex-row gap-8 items-center text-xl md:text-sm">
          {navList.map((nav, key) => (
            <NavItem key={key} link={nav.link} label={nav.label} />
          ))}

          <a className="btn py-3 text-base" href="#">
            Resume
          </a>
        </ul>
      </nav>
      {!isNavOpen && (
        <button
          onClick={() => setIsNavOpen(true)}
          className="text-green ml-auto block md:hidden"
        >
          <Icon width={42} height={42} icon="tabler:menu-deep" />
        </button>
      )}
      {isNavOpen && (
        <button
          onClick={() => setIsNavOpen(false)}
          className="text-green ml-auto z-50 md:hidden"
        >
          <Icon width={42} height={42} icon="ion:close-outline" />
        </button>
      )}
    </header>
  );
};

const NavItem = ({ label, link }) => {
  return (
    <li className="nav-link font-mono text-slate-200 hover:text-green transition">
      <a href={link}>{label}</a>
    </li>
  );
};
