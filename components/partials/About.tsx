import Link from "../ui/Link";

const recentSkillList = [
  "React.js",
  "Next.js",
  "TypeScript",
  "tailwind css",
  "GoLang",
  "PostgreSQL",
  "React Testing Library",
  "Cypress",
  "Storybook",
  "GraphQL",
  "Neovim",
  "Prompt Engineering",
];

export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:w-[90%] mx-auto">
      <h2 className="head-numbering title-about">About Me</h2>
      <p className="text-xl mb-4 max-w-[65ch]">
        Hello! I am Phurba Sherpa, a React Developer based in Pokhara, Nepal. I
        build the Front-end of Websites and Web Applications that leads to the
        success of the overall product.
      </p>
      <p className="text-xl mb-4 max-w-[65ch]">
        <span className="mr-1">
          Fast-forward to today, and I’ve had the privilege of working at a
        </span>
        <Link url="#" label="Wealth Management" />
        <span>
          compnay, I also like sharing content related to the stuff that I have
          learned over the years in Web Development so it can help other people
          of the Dev Community.
        </span>
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
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-2/3">
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
