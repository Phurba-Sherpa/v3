type IExp = {
  company: string;
  role: string;
  duration: string;
  tasks: string[];
  website: string;
};

export const EXP: IExp[] = [
  {
    company: "Peakmetrics",
    website: "https://www.peakmetrics.com/",
    role: "Mid. Frontend Developer",
    duration: "March 2025 - Present",
    tasks: [
      "Revamping the UI to give more modern and consistent look",
      "Delivered new features",
      "Bug fixing, modifying UI as per the client feedback",
      "Write re-usable components and storybook",
    ],
  },
  {
    company: "Kairos Wealth",
    website: "https://www.kairoswealth.com/",
    role: "Mid. Frontend Developer",
    duration: "October 2024 - March 2025",
    tasks: [
      "Revamping the UI to give more modern and consistent look",
      "Refactoring code, making it more performant",
      "Organizing the code structure to make it easy to maintain in future",
    ],
  },
  {
    company: "Wow Finstack",
    website: "https://www.wowfinstack.com/",
    role: "React Developer",
    duration: "October 2022 - Present",
    tasks: [
      "Debit Management System, transforming an outdated legacy system into a modern, efficient solution using ReactJS",
      "implemented role-based access controls and effectively managed token rotation, enhancing the security posture of the system",
      " I contributed to a multi-currency project, utilizing ReactJS, Tailwind CSS, and React Query to optimize performance and deliver a seamless user experience",
    ],
  },
  {
    company: "IT Village Technology",
    role: "Jr. Java Developer",
    duration: "June - October 2022",
    tasks: [
      "Interned at IT Village Technology, a fintech startup, for 3 months as an API Developer.",
      " Developed RESTful APIs using GO and Gin Framework, postgres, liquibase, sqlc with docker image",
      "joined as a Java Developer at Switch Engine in the Card Management System for 4-5 month",
      "I was responsible for making the system compatible with postgres since the sytem migrated form oracle to postgres",
    ],
    website: "http://185.185.127.219/",
  },
];
