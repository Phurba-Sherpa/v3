import React from "react";
import { Icon } from "../ui/Icon";
const linkList = [
  "mdi:linkedin",
  "mdi:codepen",
  "mdi:twitter",
  "fa6-brands:medium",
];
export const LeftSidebar = () => {
  return (
    <aside className="hidden lg:flex  h-[87vh] flex-col items-center justify-center pt-8 left-10 w-10 md:fixed">
      <ul className="flex flex-col items-center after:content-[''] after:h-24 after:w-0.5 after:table after:bg-slate-300 after:mt-6 mt-auto ">
        {linkList.map((icon, key) => (
          <SocialLink icon={icon} key={key} />
        ))}
      </ul>
    </aside>
  );
};

const SocialLink = ({ icon }) => {
  return (
    <li className="text-slate-300 hover:text-green mb-2 hover:-translate-y-1 transition-all duration-200">
      <a href="#">
        <Icon icon={icon} width={22} />
      </a>
    </li>
  );
};
