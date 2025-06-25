import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const allBlogs = [
  {
    id: 1,
    category: "press",
    title: "the role of technology in modern architecture",
    img: assets.blog1,
    excerpt:
      "Technology plays a transformative role in modern architecture, shaping how buildings are designed...",
    link: "/blog/the-role-of-technology-in-modern-architecture",
  },
  {
    id: 2,
    category: "projects",
    title: "Enhancing business through thoughtful design",
    img: assets.blog2,
    excerpt:
      "Enhancing a business through thoughtful design involves creating spaces and experiences that...",
    link: "/blog/enhancing-business-through-thoughtful-design",
  },
  {
    id: 3,
    category: "studio",
    title: "sustainable design: building a greener future in architecture",
    img: assets.blog3,
    excerpt:
      "Sustainable design is revolutionizing the way we approach architecture by creating structures...",
    link: "/blog/sustainable-design-building-a-greener-future-in-architecture",
  },
  {
    id: 4,
    category: "press",
    title: "residential architecture: crafting personalized living spaces",
    img: assets.blog4,
    excerpt:
      "Residential architecture is the art and science of designing homes that reflect individuality...",
    link: "/blog/residential-architecture-crafting-personalized-living-spaces",
  },
  {
    id: 5,
    category: "projects",
    title: "maximizing space: tips for multipurpose architecture",
    img: assets.blog5,
    excerpt:
      "Multipurpose architecture focuses on creating versatile spaces that adapt to various functions...",
    link: "/blog/maximizing-space-tips-for-multipurpose-architecture",
  },
  {
    id: 6,
    category: "projects",
    title: "oslo's architecture gems: inspiration from our city",
    img: assets.blog6,
    excerpt:
      "Oslo, Norway's capital, is a treasure trove of architectural marvels that blend tradition...",
    link: "/blog/oslos-architecture-gems-inspiration-from-our-city",
  },
  {
    id: 7,
    category: "studio",
    title: "adaptive reuse: giving old buildings new life",
    img: assets.blog7,
    excerpt:
      "Adaptive reuse is a sustainable strategy that transforms existing buildings for new purposes...",
    link: "/blog/adaptive-reuse-giving-old-buildings-new-life",
  },
  {
    id: 8,
    category: "press",
    title: "how light influences architectural experience",
    img: assets.blog8,
    excerpt:
      "Light is one of the most powerful elements in architecture, affecting mood, perception, and space...",
    link: "/blog/how-light-influences-architectural-experience",
  },
  {
    id: 9,
    category: "projects",
    title: "reviving heritage: restoring architectural icons",
    img: assets.blog9,
    excerpt:
      "Heritage restoration projects breathe new life into historical structures while preserving identity...",
    link: "/blog/reviving-heritage-restoring-architectural-icons",
  },
  {
    id: 10,
    category: "studio",
    title: "designing for well-being: the psychology of space",
    img: assets.blog10,
    excerpt:
      "Understanding how space affects human behavior can lead to healthier, more productive environments...",
    link: "/blog/designing-for-well-being-the-psychology-of-space",
  },
  {
    id: 11,
    category: "projects",
    title: "architecture in extreme climates: designing for resilience",
    img: assets.blog11,
    excerpt:
      "Building in extreme conditions demands innovative materials and strategies for long-term resilience...",
    link: "/blog/architecture-in-extreme-climates-designing-for-resilience",
  },
  {
    id: 12,
    category: "press",
    title: "community-centered architecture: building connection",
    img: assets.blog12,
    excerpt:
      "Architecture can foster connection and inclusion when designed with communities at its heart...",
    link: "/blog/community-centered-architecture-building-connection",
  },
  {
    id: 13,
    category: "studio",
    title: "material innovation: the future of construction",
    img: assets.blog13,
    excerpt:
      "From self-healing concrete to bamboo, new materials are changing how we build sustainably...",
    link: "/blog/material-innovation-the-future-of-construction",
  },
  {
    id: 14,
    category: "projects",
    title: "coastal design: blending architecture with nature",
    img: assets.blog14,
    excerpt:
      "Coastal architecture demands sensitivity to the landscape, weather, and environmental impact...",
    link: "/blog/coastal-design-blending-architecture-with-nature",
  },
  {
    id: 15,
    category: "press",
    title: "the evolution of urban housing",
    img: assets.blog15,
    excerpt:
      "Urban housing has evolved to address affordability, density, and lifestyle shifts in growing cities...",
    link: "/blog/the-evolution-of-urban-housing",
  },
  {
    id: 16,
    category: "studio",
    title: "architectural photography: capturing design essence",
    img: assets.blog16,
    excerpt:
      "Great architecture deserves to be documented — photography bridges art and architectural story...",
    link: "/blog/architectural-photography-capturing-design-essence",
  },
  {
    id: 17,
    category: "projects",
    title: "cultural spaces: designing for art and performance",
    img: assets.blog17,
    excerpt:
      "Architectural design can enhance storytelling, sound, and audience immersion in cultural venues...",
    link: "/blog/cultural-spaces-designing-for-art-and-performance",
  },
  {
    id: 18,
    category: "press",
    title: "biophilic design: bringing nature indoors",
    img: assets.blog18,
    excerpt:
      "Biophilic design improves well-being by integrating nature into built environments...",
    link: "/blog/biophilic-design-bringing-nature-indoors",
  },
  {
    id: 19,
    category: "studio",
    title: "mobility and architecture: cities of the future",
    img: assets.blog19,
    excerpt:
      "As cities evolve, architecture must accommodate new forms of mobility, smart transit, and fluid space...",
    link: "/blog/mobility-and-architecture-cities-of-the-future",
  },
  {
    id: 20,
    category: "projects",
    title: "educational campuses: inspiring next-gen learning",
    img: assets.blog20,
    excerpt:
      "Modern education spaces are flexible, tech-integrated, and designed for creative collaboration...",
    link: "/blog/educational-campuses-inspiring-next-gen-learning",
  },
  {
    id: 21,
    category: "press",
    title: "iconic skylines: shaping identity through design",
    img: assets.blog21,
    excerpt:
      "Skylines define a city’s character — architects are using form and symbolism to elevate identity...",
    link: "/blog/iconic-skylines-shaping-identity-through-design",
  },
];

const filters = ["All article", "projects", "press", "studio"];

const Blogs = () => {
  const [activeFilter, setActiveFilter] = useState("All article");

  const filteredBlogs =
    activeFilter === "All article"
      ? allBlogs
      : allBlogs.filter((blog) => blog.category === activeFilter);

  const { div: MotionDiv } = motion;

  return (
    <Layout>
      <div className="container px-4 mx-auto py-16">
        <div className="relative mb-6 text-center">
          <h2 className='text-sm md:text-base font-medium tracking-[6px] uppercase text-[#D1BAA2] inline-block relative mb-3 after:content-[""] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-20 after:h-0.5 after:bg-[#495944]'>
            Blog
          </h2>
          <h3 className="text-[#495944] text-4xl md:text-5xl font-semibold uppercase font-nunito mt-4">
            Our Latest Post
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-6 justify-center mb-8">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`tracking-widest uppercase text-[#495944bb] font-semibold transition text-[20px] hover:cursor-pointer ${
                activeFilter === filter ? "text-[#495944]" : "text-[#0c0c0caa]"
              }`}
            >
              {filter.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                  className="h-72 w-full object-cover"
                />
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2 text-[#495944] capitalize">
                    {blog.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 capitalize">
                    {blog.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={blog.link}
                      className="text-[#D1BAA2] hover:underline hover:cursor-pointer font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </MotionDiv>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </Layout>
  );
};

export default Blogs;
