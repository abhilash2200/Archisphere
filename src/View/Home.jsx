import React, { useState } from "react";
import Layout from "../components/Layout.jsx";
import { assets } from "../assets/assets";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CounterUp from "../components/CounterUp";
import Testimonial from "../components/Testimonial";
import { SlActionRedo } from "react-icons/sl";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Home = () => {
  const projects = [
    {
      img: assets.project1,
      title: "Poolscape Villa",
      description:
        "A luxurious villa nestled in a coastal setting, Poolscape Villa celebrates modern living with a seamless blend of architecture and nature. Designed with sweeping open plans, infinity-edge pools, and panoramic glass walls, it offers an immersive experience into sea views and sunset horizons.",
      year: 2024,
      link: "/project/poolscape-villa-2024",
    },
    {
      img: assets.project2,
      title: "European Lard Station",
      description:
        "A remarkable public infrastructure project, the European Lard Station integrates classical European design with high-functioning urban mobility. Featuring a 750-seat hemicycle, advanced office complexes, commission chambers, and expansive public walkways, the space reflects modern governance and design harmony.",
      year: 2023,
      link: "/project/european-lard-station-2023",
    },
    {
      img: assets.project3,
      title: "Yabroudi Villa",
      description:
        "Located atop a sea-kissed cliff, this villa redefines luxury with fluid interiors, ambient lighting, and eco-sensitive materials. Every room opens to nature, and its spatial rhythm harmonizes indoor tranquility with the vibrancy of its coastal surroundings.",
      year: 2022,
      link: "/project/yabroudi-villa-2022",
    },
    {
      img: assets.project4,
      title: "Cultural Complex Centre",
      description:
        "Serving as a dynamic civic node, this station brings together government function, public accessibility, and architectural presence. The design is focused on transparency, spatial hierarchy, and user-centered movement — a true example of democratic architecture in action.",
      year: 2021,
      link: "/project/cultural-complex-centre-2021",
    },
    {
      img: assets.project5,
      title: "Dalbourne Villa",
      description:
        "This residential marvel combines minimalism with modern comfort. The Poolscape Villa 2020 edition showcases smart lighting, passive cooling design, and integrated water features. A meditative retreat made for the modern soul.",
      year: 2020,
      link: "/project/dalbourne-villa-2020",
    },
    {
      img: assets.project6,
      title: "Amman Rotana Hotel",
      description:
        "An early iteration of the station, this phase established the project’s foundation with sustainability, scalability, and civic dignity. Its modular forms and clean urban lines set the tone for future expansions with purpose and poise.",
      year: 2019,
      link: "/project/amman-rotana-hotel-2019",
    },
  ];

  const allBlogs = [
    {
      id: 1,
      category: "press",
      title: "the role of technology in modern architecture",
      img: assets.blog1,
      excerpt:
        "Technology plays a transformative role in modern architecture, shaping how buildings are designed...",
    },
    {
      id: 2,
      category: "projects",
      title: "Enhancing business through thoughtful design",
      img: assets.blog2,
      excerpt:
        "Enhancing a business through thoughtful design involves creating spaces and experiences that...",
    },
    {
      id: 3,
      category: "studio",
      title: "sustainable design: building a greener future in architecture",
      img: assets.blog3,
      excerpt:
        "Sustainable design is revolutionizing the way we approach architecture by creating structures...",
    },
    {
      id: 4,
      category: "press",
      title: "residential architecture: crafting personalized living spaces",
      img: assets.blog4,
      excerpt:
        "Residential architecture is the art and science of designing homes that reflect individuality...",
    },
    {
      id: 5,
      category: "projects",
      title: "maximizing space: tips for multipurpose architecture",
      img: assets.blog5,
      excerpt:
        "Multipurpose architecture focuses on creating versatile spaces that adapt to various functions...",
    },
    {
      id: 6,
      category: "projects",
      title: "oslo's architecture gems: inspiration from our city",
      img: assets.blog6,
      excerpt:
        "Oslo, Norway's capital, is a treasure trove of architectural marvels that blend tradition...",
    },
  ];

  const filters = ["All article", "projects", "press", "studio"];

  const [activeFilter, setActiveFilter] = useState("All article");

  const filteredBlogs =
    activeFilter === "All article"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === activeFilter);

  const { div: MotionDiv } = motion;

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
      {/* Hero Banner Section */}
      <div className="relative">
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 3000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            speed: 800,
          }}
        >
          <SplideSlide>
            <img
              src={assets.bn1}
              alt="Modern Architecture"
              className="w-full h-screen md:h-[90vh] object-cover"
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src={assets.bn2}
              alt="Innovative Design"
              className="w-full h-screen md:h-[90vh] object-cover"
            />
          </SplideSlide>
        </Splide>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 w-full px-4">
          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-4 capitalize text-[#D1BAA2] leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            modern innovative architecture
          </motion.h2>

          <motion.p
            className="text-sm md:text-base mb-4 px-4 md:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            From as low as $20 A small river named Durden flows by their place
            and supplies it with the necessary regularly.
          </motion.p>

          <motion.button
            className="bg-[#495944] text-white px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-white hover:cursor-pointer hover:text-[#495944] transition-colors duration-300 text-sm md:text-base"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            onClick={() => (window.location.href = "/Services")}
          >
            Explore More
          </motion.button>
        </div>
      </div>

      {/* About Us Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* IMAGE BLOCK */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={assets.aboutus}
              alt="About our company"
              className="w-full h-auto"
            />
          </motion.div>

          {/* TEXT BLOCK */}
          <motion.div
            className="w-full md:w-1/2 px-0 md:px-4"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative mb-4 md:mb-8">
              <h2 className='text-lg md:text-[25px] font-normal tracking-[3px] md:tracking-[5px] uppercase text-[#D1BAA2] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 md:after:w-20 after:h-0.5 after:bg-[#495944]'>
                About Us
              </h2>
            </div>

            <motion.h3
              className="text-[#495944] text-2xl md:text-4xl font-semibold uppercase mb-8 font-nunito"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Break out of your routine with a global perspective.
            </motion.h3>

            <motion.p
              className="mb-4 font-poppins text-base md:text-[18px] text-[#505050]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Based on collective work and shared knowledge, Architecture-Studio
              aims to favour dialogue and debate, to transform individual
              knowledge into increased creative potential.
            </motion.p>

            <motion.p
              className="mb-4 font-poppins text-base md:text-[18px] text-[#505050]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Our Studio is a architecture practice based in Prague, Chech and
              Venice. Today, it includes 150 architects, urban planners,
              landscape and interior designers of 25 different nationalities.
              The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in
              the virtues of exchange, crossing ideas, common effort, shred
              knowledge.
            </motion.p>

            <motion.div
              className="flex justify-start mt-6 md:mt-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
            >
              <button
                className="bg-[#495944] text-white font-roboto tracking-wide capitalize px-6 py-2 md:px-8 md:py-3 rounded-md hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] transition-colors duration-300 text-sm md:text-base hover:cursor-pointer"
                onClick={() => (window.location.href = "/About")}
              >
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <CounterUp />

      {/* Services Section */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-lg md:text-[25px] font-normal tracking-[3px] md:tracking-[5px] uppercase text-[#D1BAA2] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 md:after:w-20 after:h-0.5 after:bg-[#495944]'>
            What we do
          </h2>
        </motion.div>

        <motion.h3
          className="text-[#495944] text-2xl md:text-4xl font-semibold uppercase mb-6 md:mb-8 font-nunito"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Build for everyone, with everyone.
        </motion.h3>
        <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="w-full md:w-[32%] group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-4 md:mb-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 md:h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent p-4 md:p-6 backdrop-blur-sm transition-all duration-500 group-hover:bottom-0">
                  <div className="flex flex-wrap items-center justify-between">
                    <h4 className="text-base md:text-lg font-semibold text-[#495944] capitalize">
                      {service.title}
                    </h4>
                    <h3 className="text-2xl md:text-4xl font-bold text-[#495944]/30 group-hover:text-[#495944] transition">
                      {service.number}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Section */}
      <div className="container mx-auto px-4 py-12">
        <motion.div
          className="relative mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className='text-lg md:text-[25px] font-normal tracking-[3px] md:tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 md:after:w-20 after:h-0.5 after:bg-[#495944]'>
            Last Projects
          </h2>
        </motion.div>

        <motion.h3
          className="text-[#495944] text-2xl md:text-4xl font-semibold uppercase mb-8 md:mb-12 font-nunito"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Made with passion.
        </motion.h3>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: false,
            interval: 4000,
            gap: "1rem",
            pauseOnHover: true,
            arrows: true,
            pagination: true,
            speed: 800,
            breakpoints: {
              768: {
                arrows: false,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <SplideSlide
              key={index}
              className="flex flex-col md:flex-row justify-around items-center gap-y-6 pb-8"
            >
              {/* Image with Motion */}
              <motion.div
                className="w-full md:w-[60%] overflow-hidden rounded-xl"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-64 md:h-auto object-cover rounded-xl transform transition-transform duration-500 hover:scale-105"
                />
              </motion.div>

              {/* Text with Motion */}
              <motion.div
                className="w-full md:w-[40%] lg:w-[30%] relative px-4 md:px-0"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-transparent p-4 md:p-6 rounded-xl transition-all duration-500">
                  <div className="flex flex-row items-center mb-2 md:-ml-[150px]">
                    <div className="w-12 md:w-[180px] h-0.5 bg-[#495944] mr-3"></div>
                    <p className="text-sm font-medium text-[#7A7A7A]">
                      <span className="text-[#495944] text-xl md:text-2xl font-semibold">
                        {project.year}
                      </span>
                    </p>
                  </div>

                  <h4 className="text-lg md:text-xl font-bold text-[#495944] capitalize mb-2">
                    {project.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#505050] mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <Link
                    to={project.link}
                    className="group text-xs md:text-sm text-[#495944] font-medium capitalize inline-flex items-center gap-2 hover:text-[#D1BAA2] transition-all duration-200"
                  >
                    Read more
                    <SlActionRedo className="group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </motion.div>
            </SplideSlide>
          ))}
        </Splide>
      </div>

      <Testimonial />

      {/* Blog Section */}
      <div className="container px-4 mx-auto py-12 md:py-16">
        <div className="relative mb-4">
          <h2 className='text-lg md:text-[25px] font-normal tracking-[3px] md:tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-12 md:after:w-20 after:h-0.5 after:bg-[#495944]'>
            Blog
          </h2>
        </div>
        <h3 className="text-[#495944] text-2xl md:text-4xl font-semibold uppercase mb-8 md:mb-12 font-nunito">
          Our latest post.
        </h3>

        <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mb-6 md:mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`tracking-widest uppercase text-[#495944bb] font-semibold transition text-sm md:text-[20px] hover:cursor-pointer px-2 py-1 ${
                activeFilter === filter
                  ? "text-[#495944] border-b-2 border-[#495944]"
                  : "text-[#495944aa] hover:bg-gray-200 rounded"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          <AnimatePresence>
            {filteredBlogs.map((blog) => (
              <MotionDiv
                key={blog.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden flex flex-col"
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="h-48 md:h-72 w-full object-cover"
                />
                <div className="p-4 md:p-5 flex flex-col flex-1">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-[#495944] capitalize">
                    {blog.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4 capitalize">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto">
                    <button className="text-[#D1BAA2] hover:underline hover:cursor-pointer font-medium text-sm md:text-base">
                      Read More →
                    </button>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="container mx-auto px-4 pt-12 md:pt-16">
        <div className="bg-[#D9D9D9] relative h-[180px] md:h-[500px]">
          <div className="hidden md:block md:w-1/2">
            <img
              src={assets.newsletter}
              alt="Newsletter"
              className="absolute bottom-0 left-0 z-10 h-[300px] md:h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="absolute top-[20%] md:top-[40%] left-[5%] md:left-[40%] transform -translate-x-[0%] -translate-y-[20%] md:-translate-y-[40%] text-left z-0 px-4 md:px-0">
              <h3 className="text-2xl md:text-[50px] font-bold uppercase text-[#495944] leading-tight">
                stay up-to-date
                <br />
                with archisphere
              </h3>
              <img
                src={assets.arrow}
                alt=""
                className="hidden md:block absolute top-15 -right-15"
              />
            </div>
            <div className="absolute bottom-[10%] right-[5%] md:right-[5%] transform -translate-x-[0%] -translate-y-[10%] md:-translate-y-[60%] text-left z-10 w-[80%] md:w-auto">
              <form className="flex flex-col md:flex-row gap-4 relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 md:px-8 py-2 md:py-3 bg-white rounded-full w-full md:w-[480px] shadow-lg text-sm md:text-base"
                />
                <button
                  type="submit"
                  className="bg-[#495944] text-white px-4 md:px-6 py-1 md:py-2 rounded-full hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] hover:cursor-pointer transition-colors absolute md:absolute top-0 right-0 mr-2 mt-1 md:mr-2 md:mt-1 duration-300 text-sm md:text-base"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
