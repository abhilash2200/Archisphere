import React from 'react';
import Layout from '../components/Layout.Jsx';
import { assets } from '../assets/assets';
import { motion } from "framer-motion";


const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-[#495944] text-white py-12 md:py-20 text-center px-4 mt-20"
      >
        <div className="container mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-3 md:mb-4"
          >
            About Archisphere
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg max-w-2xl mx-auto text-[#e5e5e5]"
          >
            Designing spaces that speak to the soul — blending function, form, and future.
          </motion.p>
        </div>
      </motion.section>

      {/* About Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Image with Motion */}
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src={assets.aboutus}
              alt="Our studio team working"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </motion.div>

          {/* Text Content with Motion */}
          <motion.div
            className="w-full lg:w-1/2 px-0 lg:px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative mb-6 md:mb-8">
              <h2 className='text-lg md:text-[25px] font-normal tracking-[3px] md:tracking-[5px] uppercase text-[#D1BAA2] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 md:after:w-20 after:h-0.5 after:bg-[#495944]'>
                About Us
              </h2>
            </div>

            <h3 className="text-[#495944] text-2xl md:text-3xl lg:text-4xl font-semibold uppercase mb-8 md:mb-16 font-nunito">
              Break out of your routine with a global perspective.
            </h3>

            <p className="mb-4 font-poppins text-base md:text-[18px] text-[#505050]">
              Based on collective work and shared knowledge, Architecture-Studio
              aims to favour dialogue and debate, to transform individual
              knowledge into increased creative potential.
            </p>
            <p className="mb-4 font-poppins text-base md:text-[18px] text-[#505050]">
              Our Studio is a architecture practice based in Prague, Chech and
              Venice. Today, it includes 150 architects, urban planners,
              landscape and interior designers of 25 different nationalities.
              The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in
              the virtues of exchange, crossing ideas, common effort, shred
              knowledge.
            </p>

            <div className="flex justify-start mt-6 md:mt-8">
              <button
                className="bg-[#495944] text-white font-roboto tracking-wide capitalize px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] transition-colors duration-300 text-sm md:text-base"
                onClick={() => (window.location.href = "/Contact")}
              >
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-12 md:py-20 px-4 bg-[#F5F5F5]">
        <div className="container mx-auto text-center max-w-3xl">

          {/* Animated Heading */}
          <motion.h3
            className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#2D3E2F] uppercase tracking-wider mb-4 md:mb-6 relative inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <span className="relative z-10">Our Mission</span>
            <span className="absolute left-0 -bottom-1 w-full h-1 bg-[#A3B18A] z-0 rounded-full"></span>
          </motion.h3>

          {/* Animated Paragraph */}
          <motion.p
            className="text-[#4A4A4A] text-base md:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            To create <span className="font-semibold text-[#6B705C]">meaningful environments</span> that inspire,
            endure, and improve lives. Whether it's a residence, a commercial space, or an urban landmark — we design with
            <span className="font-semibold text-[#6B705C]"> intention and impact</span>.
          </motion.p>

        </div>
      </section>

      {/* Team Highlight */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <motion.h3
            className="text-2xl md:text-3xl font-bold text-[#495944] uppercase mb-4 md:mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our People
          </motion.h3>

          <motion.p
            className="text-[#555] mb-6 md:mb-8 text-sm md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our strength lies in our people. Architects, planners, and creatives — all united by a shared passion for design.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              { name: "Elena Kovac", role: "Design Lead - Prague" },
              { name: "Rahul Mehra", role: "Urban Planner - Mumbai" },
              { name: "Giulia Rossi", role: "Sustainability Specialist - Venice" }
            ].map((member, index) => (
              <motion.div
                key={index}
                className="bg-white p-4 md:p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-[#495944] text-lg md:text-xl font-semibold mb-1 md:mb-2">
                  {member.name}
                </h4>
                <p className="text-[#666] text-sm md:text-base">
                  {member.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;