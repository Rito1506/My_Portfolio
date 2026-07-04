import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaServer, FaGithub, FaNetworkWired, FaGlobe, FaDatabase, FaCode } from "react-icons/fa";
import { SiVite, SiRedux, SiDotnet, SiPostman } from "react-icons/si";

export const skillGroups = [
  {
    category: "Frontend",
    items: [
      { name: "React.js", Icon: FaReact },
      { name: "Vite", Icon: SiVite },
      { name: "Redux", Icon: SiRedux },
      { name: "JavaScript", Icon: FaJs },
      { name: "HTML5", Icon: FaHtml5 },
      { name: "CSS3", Icon: FaCss3Alt },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "ASP.NET Core", Icon: SiDotnet },
      { name: "C#", Icon: FaCode },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "REST APIs", Icon: FaServer },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "Microsoft SQL Server", Icon: FaDatabase },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", Icon: FaGitAlt },
      { name: "GitHub", Icon: FaGithub },
      { name: "IIS", Icon: FaServer },
      { name: "FTP", Icon: FaNetworkWired },
      { name: "GoDaddy", Icon: FaGlobe },
      { name: "Postman", Icon: SiPostman },
    ],
  },
];

/* Flat highlight set used in the About section */
export const topSkills = [
  { name: "React.js", Icon: FaReact },
  { name: "ASP.NET Core", Icon: SiDotnet },
  { name: "C#", Icon: FaCode },
  { name: "Node.js", Icon: FaNodeJs },
  { name: "SQL Server", Icon: FaDatabase },
];
