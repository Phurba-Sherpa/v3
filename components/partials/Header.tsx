import React from "react";

export const Header = () => {
  return (
    <section className="mt-32 pb-10">
      <h1 className="font-mono mb-6 text-green">Hi, my name is</h1>
      <h2 className="text-4xl md:text-7xl">Phurba Sherpa.</h2>
      <h3 className="text-4xl md:text-7xl mb-5 text-slate">
        I build things for the web.
      </h3>
      <p className="max-w-[60ch] mb-12 text-xl">
        For over 2 years I've had experience with software development.
        Currently, developing and maintaining robust and user-friendly
        applications for the fintech industry at Wow Finstack Nepal.
      </p>
      <a
        href="mailto:phurba1404@gmail.com"
        target="_blank"
        className="btn"
      >
        phurba1404@gmail.com
      </a>
    </section>
  );
};
