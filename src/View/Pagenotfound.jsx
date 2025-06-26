import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";
import { FaHome, FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 }
  },
};

const Pagenotfound = () => {
  return (
    <Layout>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#F5F5F5] to-[#EAEAEA] px-4 text-center py-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated 404 number */}
        <motion.div 
          className="relative mb-8"
          variants={itemVariants}
        >
          <motion.span
            className="text-[120px] md:text-[180px] font-bold text-[#495944]"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, -5, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            4
          </motion.span>
          <motion.span
            className="text-[120px] md:text-[180px] font-bold text-[#D1BAA2] mx-2"
            animate={{
              scale: [1, 1.1, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 0.5,
            }}
          >
            0
          </motion.span>
          <motion.span
            className="text-[120px] md:text-[180px] font-bold text-[#495944]"
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            4
          </motion.span>
        </motion.div>

        {/* Error message */}
        <motion.h2
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold text-[#495944] mb-4"
        >
          Page Not Found
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-lg text-[#505050] max-w-md mb-8"
        >
          The page you're looking for might have been removed, had its name changed, or is temporarily unavailable.
        </motion.p>

        {/* Action buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="/"
            className="flex items-center justify-center bg-[#495944] hover:bg-[#374636] text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHome className="mr-2" /> Go Home
          </motion.a>
          
          <motion.a
            href="/contact"
            className="flex items-center justify-center border-2 border-[#495944] text-[#495944] hover:bg-[#495944] hover:text-white font-medium py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Support <FaArrowRight className="ml-2" />
          </motion.a>
        </motion.div>

        {/* Decorative elements */}
        <motion.div 
          className="absolute bottom-10 text-[#D1BAA2] text-sm"
          variants={itemVariants}
        >
          Error Code: 404_NOT_FOUND
        </motion.div>
      </motion.div>
    </Layout>
  );
};

export default Pagenotfound;