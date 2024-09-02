import React from "react";

export const RightSidebar = () => {
  return (
    <aside className=" h-screen lg:flex flex-col items-center pt-8 right-10 w-10 hidden md:fixed">
      <a href="#">Resume</a>
      <div className="rotate-90 mt-auto mb-44">
        <a href="#" className=" relative sidebar__email">
          phurba1404@gmail.com
        </a>
      </div>
    </aside>
  );
};
