const recentSkillList = [
  "Neovim",
  "Next.js",
  "tailwind css",
  "TypeScript",
  "GoLang",
  "Advance CSS",
];

export const About = () => {
  return (
    <section className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h2 className="head-numbering">About Me</h2>
      <p className="text-xl mb-4 max-w-[65ch]">
        Hello! I am Phurba Sherpa, a React Developer based in Pokhara, Nepal. I
        building the Front-end of Websites and Web Applications that leads to
        the success of the overall product.
      </p>
      <p className="text-xl mb-4 max-w-[65ch]">
        I have serious passion for UI effects, animations and creating
        intuitive, dynamic user experiences. I also like sharing content related
        to the stuff that I have learned over the years in Web Development so it
        can help other people of the Dev Community.
      </p>
      <p className="text-xl mb-4 max-w-[65ch]">
        I'm open to Job opportunities where I can contribute, learn and grow. If
        you have a good opportunity that matches my skills and experience then
        don't hesitate to contact me.
      </p>
      <p className="mb-5 text-xl">
        Below are a few technologies I've had worked so far:
      </p>
      <RecentSkillList />
    </section>
  );
};

const RecentSkillList = () => {
  return (
    <ul className="grid grid-cols-2 gap-2 w-2/3 md:w-1/3">
      {recentSkillList.map((skill, index) => (
        <SkillItem key={index} skill={skill} />
      ))}
    </ul>
  );
};

const SkillItem = ({ skill }: { skill: String }) => {
  return (
    <li className="text-xs font-mono before:content-['▹'] before:absolute before:left-0 before:text-sm before:text-green before:leading-[12px] relative pl-5">
      {skill}
    </li>
  );
};
