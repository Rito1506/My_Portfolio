import { motion } from "framer-motion";
import { FaGithub, FaBuilding } from "react-icons/fa";

const projects = [
  {
    title: "Internship @ Prodigiwave",
    description:
      "Built responsive UI using React and Tailwind from Figma/Framer designs. Created animated mobile menu, floating contact form, and custom 404 page.",
    tech: ["React.js", "TailwindCSS", "Figma", "Framer"],
    github: "https://github.com/Rito1506/Prodigiwave-public",
  },
  {
    title: "ETHLinked",
    description:
      "A decentralized DApp for posting achievements. Features MetaMask login, Web3.js integration, and a responsive UI.",
    tech: ["JavaScript", "Bootstrap", "Web3.js"],
    github: "https://github.com/Rito1506/ETHLinked",
  },
  {
    title: "Otaku Vista",
    description:
      "Anime & manga streaming platform with login, user profiles, watchlists, and responsive layout. Uses external REST APIs.",
    tech: ["JavaScript", "Bootstrap", "REST APIs"],
    github: "https://github.com/Rito1506/Otaku-Vista",
  },
  {
    title: "TailwindCSS Practice Project",
    description:
      "A collection of practice components and layouts built with TailwindCSS to explore its utility-first workflow.",
    tech: ["TailwindCSS", "HTML", "CSS"],
    github: "https://github.com/Rito1506/TailwindCSS-Practice-Project",
  },
  {
    title: "Simon Game",
    description:
      "A classic Simon memory game built with JavaScript. Features sound, color animations, and increasing difficulty.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Rito1506/simon_game",
  },
  {
    title: "TrendyTrops",
    description:
      "An e-commerce web app for trendy clothing and accessories. Includes product listings, cart, and responsive design.",
    tech: ["React.js", "CSS", "JavaScript"],
    github: "https://github.com/Rito1506/TrendyTrops",
  },
  {
    title: "UsChat",
    description:
      "A real-time chat application with user authentication and group chat features.",
    tech: ["React.js", "Node.js", "Socket.io"],
    github: "https://github.com/Rito1506/UsChat",
  },
  {
    title: "Tindog",
    description:
      "A fun landing page for a fictional dog dating app, inspired by Tinder. Built with Bootstrap.",
    tech: ["Bootstrap", "HTML", "CSS"],
    github: "https://github.com/Rito1506/tindog",
  },
];

export default function Projects() {
  return (
    <section className="w-full bg-gray-900 py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-400 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur rounded-xl border border-white/10 p-6 shadow-lg transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 text-sm mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-800 px-2 py-1 rounded-full text-gray-200 border border-gray-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-gray-300 hover:text-teal-400 transition"
              >
                {project.title.includes("Internship") ? (
                  <>
                    <FaBuilding className="mr-2" />
                    Company Repo
                  </>
                ) : (
                  <>
                    <FaGithub className="mr-2" />
                    View Code
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
