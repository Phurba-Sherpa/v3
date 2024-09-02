import React from "react";

export const Projects = () => {
  return (
    <section className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h2 className="head-numbering">Some Things I’ve Built</h2>
      <div className="grid grid-cols-12 grid-rows-12">
        <div className="-z-20 col-start-1 col-span-full md:col-span-7 row-span-full after:content-[''] after:absolute after:inset-0 after:bg-red-900 after:z-10 relative after:opacity-60">
          <img
            className="w-full h-full"
            src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png"
            alt=""
          />
        </div>

        <div className="col-start-1 md:col-start-7 col-end-13 row-span-full text-right">
          <p className="capitalize text-green">featured project</p>
          <a href="#">Omnifood &mdash; never cook again</a>
          <p className="md:bg-primary-300 p-6">
            It is a complete responsive omnifood website, that aims to deliver
            the food at your door based on the subscrition chosen. This one I
            build during my online course of basic CSS in early days.
          </p>
          <ul>
            {["HTML", "CSS", "JavaScript"].map((skill, key) => (
              <li key={key}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Omnifood - Never cook again",
    desc: "It is a complete  responsive omnifood website, that aims to deliver the food at your door based on the subscrition chosen. This one I build during my online course of basic CSS in early days.",
    techList: ["HTML", "CSS", "JS"],
    codePreview:
      "https://github.com/Phurba-Sherpa/omnifood/blob/main/README.md",
    sitePreview: "https://omnifood.phurbasherpa.name.np/",
    imageUrl: "",
  },
  {
    title: "Natour - exciting tours",
    desc: "It is a modern natour website, a tour and travel that has their different packages available with complete pricing built using best practices and a lot of animations during my learning of advanced css concept and responsive web design. The main motive for building this project was to get confident with css, animation, and responsivness.",
    techList: ["NPM", "SASS", "HTML", "BEM"],
    codePreview: "https://github.com/Phurba-Sherpa/natour/blob/main/README.md",
    sitePreview: "https://natour.phurbasherpa.name.np/",
    imageUrl: "",
  },
  {
    title: "trillio - hotel booking app",
    desc: "It's a complete responsive dashboard, built during my learning of advance CSS course, its all design using a mordern css technique flex box with BEM methodology",
    techList: ["HTML", "CSS", "JS"],
    codePreview: "https://github.com/Phurba-Sherpa/trillio/blob/main/README.md",
    sitePreview: "https://phurba-sherpa.github.io/trillio/",
    imageUrl: "",
  },
  {
    title: "Nexter - your home, your freedom",
    desc: "It's a complete responsive landing page for room booking, built during my learning of advance CSS course, its all design using a mordern css technique grid with BEM methodology",
    techList: ["GRID", "SASS", "HTML", "BEM"],
    codePreview: "https://github.com/Phurba-Sherpa/nexter/blob/main/README.md",
    sitePreview: "https://nexter.phurbasherpa.name.np/",
    imageUrl: "",
  },
];
