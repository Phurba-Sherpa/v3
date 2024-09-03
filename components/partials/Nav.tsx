import React from "react";
import logo from "../../public/img/logo.svg";

export const Nav = () => {
  return (
    <nav className="py-4 flex items-center px-12 border-b border-b-primary-500 shadow-md text-sm">
      <div className="w-16 h-16">
        <a href="#" className="">
          <img src={logo.src} className="h-full w-full" />
        </a>
      </div>
      <ul className="flex ml-auto gap-x-8 items-center">
        {["About", "Experience", "Work", "Contact"].map((label, key) => (
          <NavItem key={key} label={label} />
        ))}

        <a className="btn py-3" href="#">
          Resume
        </a>
      </ul>
    </nav>
  );
};

const NavItem = ({ label }) => {
  return (
    <li className="before:content-['01.'] before:text-green font-mono text-slate-200 before:mr-1">
      <a href="#">{label}</a>
    </li>
  );
};
