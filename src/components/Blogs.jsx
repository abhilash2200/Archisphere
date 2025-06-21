import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../assets/assets";

const allBlogs = [
    {
        id: 1,
        category: "press",
        title: "the role of technology in modern architecture",
        img: assets.blog1,
        excerpt: "Technology plays a transformative role in modern architecture, shaping how buildings are designed..."
    },
    {
        id: 2,
        category: "projects",
        title: "Enhancing business through thoughtful design",
        img: assets.blog2,
        excerpt: "Enhancing a business through thoughtful design involves creating spaces and experiences that..."
    },
    {
        id: 3,
        category: "studio",
        title: "sustainable design: building a greener future in architecture",
        img: assets.blog3,
        excerpt: "Sustainable design is revolutionizing the way we approach architecture by creating structures..."
    },
    {
        id: 4,
        category: "press",
        title: "residential architecture: crafting personalized living spaces",
        img: assets.blog4,
        excerpt: "Residential architecture is the art and science of designing homes that reflect individuality..."
    },
    {
        id: 5,
        category: "projects",
        title: "maximizing space: tips for multipurpose architecture",
        img: assets.blog5,
        excerpt: "Multipurpose architecture focuses on creating versatile spaces that adapt to various functions..."
    },
    {
        id: 6,
        category: "projects",
        title: "oslo’s architecture gems: inspiration from our city",
        img: assets.blog6,
        excerpt: "Oslo, Norway's capital, is a treasure trove of architectural marvels that blend tradition..."
    },
];

const filters = ["All article", "projects", "press", "studio"];

const Blogs = () => {
    const [activeFilter, setActiveFilter] = useState("All article");

    const filteredBlogs =
        activeFilter === "All article"
            ? allBlogs
            : allBlogs.filter((blog) => blog.category === activeFilter);

    return (
        <div className="container px-4 mx-auto">
            <div className="relative mb-4">
                <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
                    Blog
                </h2>
            </div>
            <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito">
                Our latest post.
            </h3>

            <div className="flex flex-wrap gap-x-6 justify-center mb-8">
                {filters.map((filter) => (
                    <button
                        key={filter}
                        onClick={() => setActiveFilter(filter)}
                        className={`tracking-widest uppercase text-[#495944bb] font-semibold transition text-[20px] ${activeFilter === filter
                            ? "text-[#495944]"
                            : "text-[#495944bb] hover:bg-gray-200"
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
                        <motion.div
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
                                    <button className="text-[#D1BAA2] hover:underline hover:cursor-pointer font-medium">
                                        Read More →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Blogs;