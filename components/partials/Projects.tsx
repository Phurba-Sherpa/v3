import React from "react";
import { Icon } from "../ui/Icon";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="work" className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h2 className="head-numbering title-project">Some Things I’ve Built</h2>
      {projects.map(
        (
          { imageUrl, techList, desc, title, codePreview, sitePreview },
          key,
        ) => (
          <ProjectItem
            key={key}
            img={imageUrl}
            code={codePreview}
            title={title}
            live={sitePreview}
            desc={desc}
            techList={techList}
            contentRight={key % 2 === 0}
          />
        ),
      )}
    </section>
  );
};

const ProjectItem = ({ contentRight, img, ...props }) => {
  return (
    <div className="grid grid-cols-12 gap-x-2 mb-12 md:mb-24">
      <ProjImage contentRight={contentRight} img={img} />
      <ProjectContent contentRight={contentRight} {...props} />
    </div>
  );
};

const ProjImage = ({ contentRight, img }) => {
  return (
    <div
      className={`-z-20 col-start-1 -col-end-1 ${contentRight ? "md:col-end-8" : "md:col-start-7"} row-span-full after:content-[''] after:absolute after:inset-0 after:bg-primary  relative  after:opacity-90 md:after:opacity-70`}
    >
      <img className="w-full h-full object-cover" src={img.src} alt="" />
    </div>
  );
};

const ProjectContent = ({
  contentRight,
  title,
  desc,
  techList,
  code,
  live,
}) => {
  return (
    <div
      className={`col-start-1 -col-end-1 ${contentRight ? " md:col-start-7 -col-end-1" : "md:col-start-1 md:col-end-8 "}  row-span-full ${contentRight ? "md:text-right" : " "} p-10 md:p-0 md:bg-transparent bg-primary-300/80 `}
    >
      <p className="capitalize text-green font-mono my-2.5 text-xs">
        featured project
      </p>
      <h3 className="mb-2.5">
        <a href={live} className="hover:text-green transition" target="_blank">
          {title}
        </a>
      </h3>
      <p className="md:bg-primary-300 md:p-4 text-lg text-slate-300 py-5 rounded-sm bg-transparent">
        {desc}
      </p>
      <ul
        className={`flex items-center gap-x-4 my-2.5 text-slate ${contentRight ? " md:justify-end " : " "}`}
      >
        {techList.map((skill, key) => (
          <li className="text-slate-300" key={key}>
            {skill}
          </li>
        ))}
      </ul>
      <div
        className={`mt-2.5 flex items-center text-slate-200 gap-x-3 ${contentRight ? " md:justify-end" : " "}`}
      >
        <a href={code} className="" target="_blank">
          <Icon width={24} height={24} icon="mdi:github" />
        </a>
        <a href={live} target="_blank">
          <Icon width={24} height={24} icon="mdi:external-link" />
        </a>
      </div>
    </div>
  );
};
