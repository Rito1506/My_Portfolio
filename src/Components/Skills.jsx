import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiPostgresql,
  SiVite,
  SiJquery,
} from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-300" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-400" /> },
  { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
];

export default function Skills() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 px-4 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute flex top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute flex bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tech Stack
        </motion.h2>

        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl shadow-2xl p-8 md:p-12 mx-auto max-w-4xl">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.07 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-400 via-purple-400 to-teal-400 opacity-40 blur-lg group-hover:opacity-70 transition duration-300"></div>
                  <div className="text-4xl z-10 relative group-hover:scale-125 group-hover:shadow-xl transition-all duration-200">
                    {skill.icon}
                  </div>
                </div>
                <p className="text-sm mt-2 text-gray-300">{skill.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
