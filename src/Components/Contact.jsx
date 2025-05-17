import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaFileDownload,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="w-full bg-gray-950 py-20 px-4 text-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-teal-400 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        <p className="text-gray-400 mb-6">
          Want to collaborate or just say hi? I'm always open to new
          opportunities and creative ideas.
        </p>

        <div className="flex justify-center gap-6 mb-6">
          <a
            href="mailto:your.email@example.com"
            className="text-gray-300 hover:text-teal-400 text-xl"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/Rito1506"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/rohit-kumar-833aa7219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-teal-400 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>

        <a
          href="/My_Portfolio/RohitCV.pdf" // Make sure your resume is placed in the public folder
          download
          className="inline-flex items-center px-6 py-2 bg-teal-500 !text-black font-semibold rounded-full hover:bg-teal-400 transition"
        >
          <FaFileDownload className="mr-2" />
          Download Resume
        </a>
      </div>
    </section>
  );
}
