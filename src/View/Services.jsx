import React from "react";
import Layout from "../components/Layout.Jsx";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import {
  FaRegLightbulb,
  FaDraftingCompass,
  FaTools,
  FaPeopleCarry,
  FaCheckCircle,
} from "react-icons/fa";

const Services = () => {
  const services = [
    {
      img: assets.service1,
      title: "Design Consultation",
      number: "01",
    },
    {
      img: assets.service2,
      title: "Interior Planning",
      number: "02",
    },
    {
      img: assets.service3,
      title: "Project Execution",
      number: "03",
    },
  ];

  return (
    <Layout>
      {/* Section 1: Introduction */}
      <section className="container mx-auto px-4 py-20 mt-10">
        <div className="relative mb-4">
          <h2 className="text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]">
            What we do
          </h2>
        </div>
        <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito">
          Build for everyone, with everyone.
        </h3>

        {/* Section 2: Services Grid */}
        <div className="flex flex-wrap justify-between gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full md:w-[32%] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg sm:text-xl font-semibold text-[#495944] capitalize">
                      {service.title}
                    </h4>
                    <h3 className="text-4xl font-bold text-[#495944]/30">
                      {service.number}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#F8F8F8] py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block text-sm md:text-base tracking-widest text-[#D1BAA2] uppercase mb-2">
              Methodology
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#495944] mb-4">
              Our Design Process
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600">
              A structured approach that ensures clarity, creativity, and client satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <FaRegLightbulb className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Discovery",
                desc: "Deep dive into your needs and project requirements",
              },
              {
                icon: <FaDraftingCompass className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Conceptualization",
                desc: "Developing designs that capture your vision",
              },
              {
                icon: <FaTools className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Development",
                desc: "Refining designs with technical details",
              },
              {
                icon: <FaPeopleCarry className="w-8 h-8 md:w-10 md:h-10" />,
                title: "Delivery",
                desc: "Final implementation and handover",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
              >
                <div className="bg-[#F5F2EA] w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full flex items-center justify-center mb-4 text-[#D1BAA2]">
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-[#495944] mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <img
                src={assets.aboutus}
                alt="Architecture team working"
                className="rounded-xl shadow-md w-full h-auto"
                loading="lazy"
              />
            </motion.div>

            {/* Text + Items */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <span className="inline-block text-sm md:text-base tracking-widest text-[#D1BAA2] uppercase mb-2">
                Our Difference
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#495944] mb-6">
                Why Clients Choose Us
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Client-Centric Approach",
                    desc: "We prioritize your vision and needs in every design decision",
                  },
                  {
                    title: "Sustainable Solutions",
                    desc: "Eco-conscious designs that reduce environmental impact",
                  },
                  {
                    title: "Technical Excellence",
                    desc: "Precision in every detail for flawless execution",
                  },
                  {
                    title: "Transparent Process",
                    desc: "Clear communication at every project stage",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <FaCheckCircle className="text-[#D1BAA2] mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-[#495944] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#495944] py-16 md:py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase mb-4"
          >
            Ready to Begin Your Project?
          </motion.h2>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#E0E0E0] mb-8 max-w-2xl mx-auto"
          >
            Let's collaborate to create spaces that inspire and endure
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/contact"
              className="inline-block bg-white text-[#495944] px-8 py-3 rounded-full text-sm font-semibold uppercase hover:bg-[#D1BAA2] hover:text-white transition duration-300"
            >
              Get a Consultation
            </a>
            <a
              href="/projects"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-full text-sm font-semibold uppercase hover:bg-white hover:text-[#495944] transition duration-300"
            >
              View Our Work
            </a>
          </motion.div>

        </div>
      </section>
    </Layout>
  );
};

export default Services;
