"use client";
import React, { useState } from "react";
import { EXP } from "@/data/experience";

export const Experience = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <section id="experience" className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h2 className="head-numbering title-work">Where I've Worked</h2>
      <div className="flex flex-col md:flex-row">
        <Tabs
          tabs={["Wow Finstack", "IT Village"]}
          onClickTab={(index) => setTabIndex(index)}
          activeTabId={tabIndex}
        />
        <TabContent data={EXP.at(tabIndex)} />
      </div>
    </section>
  );
};

const TabContent = ({ data }) => {
  return (
    <div className="ml-5">
      <h3>
        <span>{data.role}</span>
        <a className="text-green" href="#">
          {data.company}
        </a>
      </h3>
      <p className="mb-6 font-mono text-sm text-slate-300">{data.duration}</p>
      <ul>
        {data.tasks.map((task, key) => (
          <li
            className="max-w-[60ch] before:content-['▹'] before:absolute before:left-0 before:text-green relative mb-2.5 pl-7 text-lg"
            key={key}
          >
            {task}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Tabs = ({ tabs, onClickTab, activeTabId }) => {
  return (
    <div className="md:w-44 border-b-2  md:border-l-2 border-b-primary-200 md:border-l-primary-200 md:border-b-transparent text-sm font-mono flex justify-center w-full md:block mb-7 md:mb-0">
      {tabs.map((tab, key) => (
        <TabItem
          key={key}
          tabLabel={tab}
          isActive={key === activeTabId}
          handleClick={() => onClickTab(key)}
        />
      ))}
    </div>
  );
};

const TabItem = ({ tabLabel, handleClick, isActive }) => {
  return (
    <button
      className={`w-full text-left pl-4 py-4 hover:bg-primary-300 border-b-2 md:border-l-2 ${isActive ? "border-b-green md:border-l-green md:border-b-transparent bg-primary-300" : "border-b-transparent md:border-l-transparent"}`}
      onClick={handleClick}
    >
      {tabLabel}
    </button>
  );
};
