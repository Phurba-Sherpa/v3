import React from "react";
import { Icon } from "../ui/Icon";

export const LeftSidebar = () => {
  return (
    <aside className="hidden lg:flex  h-screen flex-col items-center pt-8 left-10 w-10 md:fixed">
      <a href="#">PS</a>
      <ul className="flex flex-col items-center after:content-[''] after:h-24 after:w-0.5 after:table after:bg-slate-300 after:mt-6 mt-auto ">
        <Icon icon="mdi:github" />
        <Icon icon="mdi:linkedin" />
        <Icon icon="mdi:codepen" />
        <Icon icon="mdi:twitter" />
        <Icon icon="mdi:instagram" />
      </ul>
    </aside>
  );
};
