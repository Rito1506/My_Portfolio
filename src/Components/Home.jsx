import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="w-full min-h-screen flex bg-gradient-to-br from-gray-900 via-black to-gray-800">
        {/* Blurred Animated Blobs with spin */}
        <div className="absolute flex top-0 left-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-teal-500 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute flex bottom-0 right-0 w-40 h-40 sm:w-60 sm:h-60 md:w-80 md:h-80 bg-purple-600 rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
        {/* Glassmorphism Card */}
        <div className="absolute flex w-full min-h-screen justify-center items-center px-2 sm:px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px 0 rgba(31,38,135,0.37)" }}
            className="absolute backdrop-blur-2xl bg-white/10 border-2 border-gradient-to-br from-teal-400/40 to-purple-400/40 rounded-2xl p-4 sm:p-6 md:p-10 flex flex-col text-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl transition-all duration-50"
          >
            <motion.img
              src="/profile.jpg"
              alt="Rohit Kumar"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-cover object-center rounded-full border-4 border-teal-500 shadow-md mx-auto mb-4 transition-transform duration-300"
            />

            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Rohit Kumar
            </motion.h1>

            <motion.h2
              className="text-base sm:text-lg md:text-xl text-teal-300 mt-1 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Creative Full Stack Storyteller
            </motion.h2>

            <motion.p
              className="text-xs sm:text-sm md:text-base text-gray-300 mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Every pixel has a past — welcome to mine.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a
                href="https://github.com/Rito1506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition transform hover:scale-110 text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/rohit-kumar-833aa7219/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-teal-400 transition transform hover:scale-110 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
