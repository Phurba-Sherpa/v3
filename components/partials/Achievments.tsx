import React from "react";

const data = [
  {
    title: "Harvard University: CS50's Introduction to Computer Science",
    issuer: "HarvardX",
    issuedAt: "18 Sept, 2023",
  },
  {
    title: "Responsve web design",
    issuer: "Coursera",
    issuedAt: "23 Dec, 2023",
  },
];

export const Achievments = () => {
  return (
    <section className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h3 className="head-numbering">Achievements</h3>

      <ul>
        {data.map((data, key) => (
          <AchievementItem key={key} data={data} />
        ))}
      </ul>
    </section>
  );
};

const AchievementItem = ({ data }) => {
  return (
    <li className="">
      <h4>{data.title}</h4>
      <p>
        <span>issuer:</span>
        <span>{data.issuer}</span>
      </p>
      <p>
        <span>issued at:</span>
        <span>{data.issuedAt}</span>
      </p>
    </li>
  );
};
