import React from "react";

type LinkProps = {
  url: string;
  label: string;
};

export default function Link({ url, label }) {
  return (
    <a
      href={url}
      className="text-green inline-block relative after:content-[''] after:absolute after:w-full after:h-[1px] after:bottom-0 after:left-0 leading-4 after:bg-current after:transition-all after:duration-300 after:ease-in after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100"
    >
      {label}
    </a>
  );
}
