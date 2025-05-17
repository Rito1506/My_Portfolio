import { motion } from "framer-motion";
import { FaEnvelope, FaDownload, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

export default function About() {
  return (
    <>
      <div className="w-full h-fit flex bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute flex top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute flex bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="w-full min-h-[60vh] flex items-center justify-center py-10 px-2 z-10">
          <motion.div
            className="bg-white/10 backdrop-blur-xl border border-teal-400/30 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center gap-8 p-6 md:p-12 w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Text Section */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
                About Me
              </h2>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed mb-4">
                Hey! I'm{" "}
                <span className="text-teal-300 font-semibold">Rohit Kumar</span>
                , a passionate{" "}
                <span className="text-purple-300 font-semibold">
                  full stack developer
                </span>{" "}
                and{" "}
                <span className="text-teal-300 font-semibold">
                  digital storyteller
                </span>
                . I believe in crafting immersive, performant, and meaningful
                web experiences that resonate.
              </p>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                When I'm not coding, you can find me exploring new tech trends,
                improving my design taste, or working on side projects that
                inspire.
              </p>
              {/* Fun Fact or Quote */}
              <div className="italic text-purple-200 mb-6">
                “Code is like humor. When you have to explain it, it’s bad.”
              </div>
              {/* Skills */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-teal-300">
                  Top Skills
                </h3>
                <div className="flex gap-4 text-2xl">
                  <FaReact className="text-cyan-400" title="React" />
                  <FaNodeJs className="text-green-400" title="Node.js" />
                  <FaHtml5 className="text-orange-400" title="HTML5" />
                  <FaCss3Alt className="text-blue-400" title="CSS3" />
                  <FaJs className="text-yellow-300" title="JavaScript" />
                </div>
              </div>
              {/* Call to Action */}
              <div className="flex gap-4 mt-4">
                <a
                  href="mailto:rohitsah103@gmail.com"
                  className="flex items-center gap-2 bg-teal-500 hover:bg-teal-600 !text-white px-4 py-2 rounded-lg transition"
                >
                  <FaEnvelope /> Contact Me
                </a>
                <a
                  href="\public\RohitCV.pdf"
                  download
                  className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 !text-white px-4 py-2 rounded-lg transition"
                >
                  <FaDownload /> Download Resume
                </a>
              </div>
            </div>
            {/* Profile Image */}
            <motion.img
              src="/My_Portfolio/profile.jpg"
              alt="Rohit"
              className="w-32 h-32 md:w-48 md:h-48 rounded-xl object-cover border-4 border-gradient-to-br from-teal-400 to-purple-400 shadow-lg hover:scale-105 transition-transform duration-200"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
