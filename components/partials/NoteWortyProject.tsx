"use client";
import React, { useState } from "react";
import { Icon } from "../ui/Icon";
import { noteWorthyProjects } from "@/data/noteworthy-projects";

export const NoteWorthyProjects = () => {
  const [showMore, setShowMore] = useState(true);

  let renderableProjects = noteWorthyProjects.slice(0, 7);
  if (!showMore) {
    renderableProjects = noteWorthyProjects;
  }

  return (
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="">Other Noteworthy Projects</h2>
        <a className="text-sm text-green font-mono" href="#">
          view the archive{" "}
        </a>
      </div>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {renderableProjects.map((proj, index) => (
          <ProjectItem key={index} data={proj} />
        ))}
      </ul>
      <div className="text-center">
        <button className="btn" onClick={() => setShowMore((prev) => !prev)}>
          {showMore ? "Show More" : "Show Less"}
        </button>
      </div>
    </section>
  );
};

const ProjectItem = ({ data }) => {
  return (
    <div className="px-7 py-8 rounded-md bg-primary-300 flex flex-col hover:-translate-y-1 transition-all duration-200 ease-in">
      <div className="mb-9 flex items-center gap-x-3">
        <a href={data.github}>
          <Icon
            width={40}
            color="#64ffda"
            height={40}
            icon="mdi:folder-outline"
          />
        </a>
        <a href={data.github} className="ml-auto" target="_blank">
          <Icon width={22} height={22} icon="mdi:github" />
        </a>
        <a href={data.live} target="_blank">
          <Icon icon="mdi:external-link" width={22} height={22} />
        </a>
      </div>
      <h3 className="mb-2.5 hover:text-green">{data.title}</h3>
      <p className="text-lg leading-6 mb-5">{data.desc}</p>
      <ul className="flex gap-x-4 font-mono mt-auto">
        {data.techStack.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ul>
    </div>
  );
};
