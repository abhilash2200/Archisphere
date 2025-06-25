import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 12,
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const Pagenotfound = () => {
  return (
    <Layout>
      <motion.div
        className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-8xl font-bold text-primary"
        >
          404
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl font-semibold text-gray-800 mt-4"
        >
          Page Not Found
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-gray-500 mt-2 mb-6 max-w-md"
        >
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="/"
          className="inline-block bg-primary hover:bg-primary-dark text-black font-medium py-2 px-6 rounded-md transition"
        >
          Go Back Home
        </motion.a>
      </motion.div>
    </Layout>
  );
};

export default Pagenotfound;
