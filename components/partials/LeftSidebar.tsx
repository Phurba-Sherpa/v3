import React from "react";
import { Icon } from "../ui/Icon";
const linkList = [
  { icon: "mdi:linkedin", link: "https://www.linkedin.com/in/phurbas" },
  { icon: "mdi:codepen", link: "https://codepen.io/phurba" },
  { icon: "mdi:github", link: "https://github.com/phurba-sherpa" },
  { icon: "fa6-brands:medium", link: "https://medium.com/@phurba" },
];
export const LeftSidebar = () => {
  return (
    <aside className="hidden lg:flex  h-[87vh] flex-col items-center justify-center pt-8 left-10 w-10 md:fixed">
      <ul className="flex flex-col items-center after:content-[''] after:h-24 after:w-0.5 after:table after:bg-slate-300 after:mt-6 mt-auto ">
        {linkList.map((socialMedia, key) => (
          <SocialLink
            icon={socialMedia.icon}
            link={socialMedia.link}
            key={key}
          />
        ))}
      </ul>
    </aside>
  );
};

const SocialLink = ({ icon, link }) => {
  return (
    <li className="text-slate-300 hover:text-green mb-2 hover:-translate-y-1 transition-all duration-200">
      <a href={link} target="_blank">
        <Icon icon={icon} width={22} />
      </a>
    </li>
  );
};
