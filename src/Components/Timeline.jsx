import { motion } from "framer-motion";
import { LuLaptop, LuSchool, LuGraduationCap } from "react-icons/lu";

const timeline = [
  {
    icon: <LuLaptop className="text-white w-6 h-6" />,
    title: "Web Developer Intern",
    org: "Prodigiwave, Noida",
    date: "2023",
    desc: "Built responsive UI with React & Tailwind, integrated Web3Forms, and created dynamic navigation components.",
  },
  {
    icon: <LuGraduationCap className="text-white w-6 h-6" />,
    title: "MCA",
    org: "Khwaja Moinuddin Chishti Language University, Lucknow",
    date: "2022 – 2024",
    desc: "Specialized in Full Stack Development and advanced programming.",
  },
  {
    icon: <LuSchool className="text-white w-6 h-6" />,
    title: "BCA",
    org: "College, Ghaziabad",
    date: "2019 – 2022",
    desc: "Completed major project: ETHLinked — a decentralized DApp using Web3.js & Bootstrap.",
  },
];

export default function Timeline() {
  return (
    <section className="w-full bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-20 px-4 text-white relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute flex top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute flex bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Experience & Education
        </motion.h2>

        {/* Modern timeline: gradient line with glowing effect */}
        <div className="relative ml-4">
          {/* Gradient vertical line with glow */}
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-teal-400 via-purple-400 to-teal-400 rounded-full shadow-[0_0_16px_4px_rgba(45,212,191,0.3)]"></div>
          {timeline.map((item, i) => (
            <motion.div
              key={i}
              className="mb-10 ml-8 group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 32px 0 rgba(31,38,135,0.17)",
              }}
            >
              {/* Animated timeline dot with ring and glow */}
              <span className="absolute -left-7 top-2 w-8 h-8 bg-gradient-to-br from-teal-400 to-purple-400 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-lg ring-4 ring-teal-400/30 group-hover:ring-purple-400/40 transition-all duration-300">
                {item.icon}
              </span>
              <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/10 transition-all duration-200 group-hover:bg-white/10">
                <h3 className="text-xl font-semibold text-teal-300 mb-1">
                  {item.title}
                </h3>
                <p className="text-purple-300 font-medium text-sm mb-1">
                  {item.org}
                </p>
                <p className="text-gray-400 text-xs mb-2">{item.date}</p>
                <p className="text-gray-200">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Custom spin animation for blobs */}
      <style>
        {`
          .animate-pulse {
            animation: pulse 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% { opacity: .2; }
            50% { opacity: .4; }
          }
        `}
      </style>
    </section>
  );
}
