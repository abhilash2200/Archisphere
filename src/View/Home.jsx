import React from "react";
import Layout from "../components/Layout.Jsx";
import { assets } from "../assets/assets";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import CounterUp from "../components/CounterUp";
import Service from "../components/Service";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";
import Blogs from "../components/Blogs.Jsx";

const Home = () => {

  return (
    <Layout>
      <div className="relative">
        {/* <div className='absolute inset-0 bg-black/30 z-2'></div> */}
        <Splide
          aria-label="My Favorite Images"
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
            <img src={assets.bn1} alt="Image 1" className="w-full h-auto" />
          </SplideSlide>
          <SplideSlide>
            <img src={assets.bn2} alt="Image 2" className="w-full h-auto" />
          </SplideSlide>
        </Splide>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white animate-fadeIn z-4">
          <h2 className="text-6xl font-bold mb-4 capitalize text-[#D1BAA2] leading-14">
            modern innovative architecture
          </h2>
          <p className="mb-4">
            From as low as $20 A small river named Durden flows by their place
            and supplies it with the necessary regularly.
          </p>
          <button
            className="bg-[#495944] text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#495944] transition-colors duration-300 hover:cursor-pointer"
            onClick={() => (window.location.href = "/Services")}
          >
            Explore More
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full lg:w-1/2 md:w-1/2">
            <img src={assets.aboutus} alt="" />
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2 px-4">
            <div className="relative mb-8">
              <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] after:content[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
                About Us
              </h2>
            </div>
            <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-16 font-nunito">
              Break out of your routine with a global perspective.
            </h3>
            <p className="mb-4 font-poppins text-[18px] text-[#505050]">
              Based on collective work and shared knowledge, Architecture-Studio
              aims to favour dialogue and debate, to transform individual
              knowledge into increased creative potential.
            </p>
            <p className="mb-4 font-poppins text-[18px] text-[#505050]">
              Our Studio is a architecture practice based in Prague, Chech and
              Venice. Today, it includes 150 architects, urban planners,
              landscape and interior designers of 25 different nationalities.
              The company principle of Architecture-Studio is the collective
              conception. From the very beginning, the practice has believed in
              the virtues of exchange, crossing ideas, common effort, shred
              knowledge.
            </p>
            <div className="flex justify-start mt-8">
              <button
                className="bg-[#495944] text-white font-roboto tracking-wide capitalize px-8 py-3 rounded-md hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] transition-colors duration-300 hover:cursor-pointer"
                onClick={() => (window.location.href = "/About")}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      <CounterUp />
      <Service />
      <Projects />
      <Testimonial />
      <Blogs />

      <div className="container mx-auto px-4 pt-16">
        <div className="bg-[#D9D9D9] relative h-[500px]">
          <div className="w-full lg:w-1/2 md:w-1/2">
            <img
              src={assets.newsletter}
              alt=""
              className="absolute bottom-0 left-0 z-10"
            />
          </div>
          <div className="w-full lg:w-1/2 md:w-1/2">
            <div className="absolute top-[40%] left-[40%] transform -translate-x-[0%] -translate-y-[40%] text-left z-0">
              <h3 className="text-[50px] font-bold uppercase text-[#495944] leading-tight">
                stay up-to-date
                <br />
                with archisphere
              </h3>
              <img src={assets.arrow} alt="" className="absolute top-15 -right-15" />
            </div>
            <div className="absolute bottom-[10%] right-[10%] transform -translate-x-[0%] -translate-y-[60%] text-left z-0">
              <form className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-8 py-3 bg-white rounded-4xl w-[480px] relative shadow-lg"
                />
                <button
                  type="submit"
                  className="bg-[#495944] text-white px-6 py-2 rounded-4xl hover:bg-white hover:text-[#495944] hover:border hover:border-[#495944] hover:cursor-pointer transition-colors absolute top-0 right-0 mr-2 mt-1 duration-300"
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
