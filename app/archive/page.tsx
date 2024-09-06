import React from "react";
import { noteWorthyProjects } from "@/data/noteworthy-projects";
import { Icon } from "@/components/ui/Icon";

const Archive = () => {
  return (
    <section className="py-16 md:py-24 mx-auto">
      <h1 className="text-4xl text-slate-200 leading-[1.1] lg:text-7xl">
        Archive
      </h1>
      <p className="text-sm font-mono font-normal text-green lg:text-base">
        Big list of things I've worked on
      </p>
      <ArchiveList />
    </section>
  );
};

const ArchiveList = () => {
  return (
    <table className="w-full font-mono my-24">
      <tbody className="[&>*]:mb-3">
        <tr className="grid grid-cols-12 font-bold [&>*]:p-2.5 gap-4 items-center">
          <td className=" col-span-3 lg:col-span-1 ">Year</td>
          <td className="col-span-6 lg:col-span-5">Title</td>
          <td className="hidden lg:block col-span-5">Built with</td>
          <td className="col-span-3 lg:col-span-1">Link</td>
        </tr>
        {noteWorthyProjects.map((proj, key) => (
          <ArchiveItem
            key={key}
            title={proj?.title}
            code={proj?.github}
            live={proj?.live}
            techstacks={proj?.techStack}
          />
        ))}
      </tbody>
    </table>
  );
};

const ArchiveItem = ({ title, live, code, techstacks }) => {
  return (
    <tr className="grid grid-cols-12 [&>*]:p-2.5 gap-4 items-center hover:bg-primary-200 border-b border-b-primary-300">
      <td className="text-green col-span-3 lg:col-span-1">2022</td>
      <td className="col-span-6 pr-5 text-slate-200 font-bold font-sans text-xl leading-6 lg:col-span-5">
        {title}
      </td>
      <td className="hidden lg:block col-span-5 p4-4 text-xs">
        <ul className="list-disc flex gap-8 flex-wrap ">
          {techstacks.map((tech, key) => (
            <li key={key}>{tech}</li>
          ))}
        </ul>
      </td>
      <td className="flex items-center gap-x-2 col-span-3 lg:col-span-1">
        <a href={code} className="">
          <Icon width={22} height={22} icon="mdi:github" />
        </a>
        <a href={live}>
          <Icon icon="mdi:external-link" width={22} height={22} />
        </a>
      </td>
    </tr>
  );
};

export default Archive;
