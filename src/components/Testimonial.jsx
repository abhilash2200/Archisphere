import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { assets } from "../assets/assets";
import "@splidejs/react-splide/css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const Testimonial = () => {
  const testimonial = [
    {
      img: assets.testi1,
      name: "Olivia",
      position: "CEO of British Relish",
      rating: 5.0,
      description:
        "An incredible architectural team—friendly, focused, and highly professional. They delivered innovative ideas, remained patient throughout, and worked seamlessly with our contractors to bring everything to life beautifully.",
    },
    {
      img: assets.testi2,
      name: "Emma",
      position: "CEO of Royal Retreat",
      rating: 5.0,
      description:
        "Creative, disciplined, and efficient—this team redesigned our space with elegance and precision. Their dedication to every detail and excellent communication made the entire process smooth and satisfying.",
    },
    {
      img: assets.testi3,
      name: "Thomas",
      position: "CEO of Grand Gala",
      rating: 5.0,
      description:
        "These architects delivered quality work with style and purpose. Their ability to blend aesthetics with functionality was truly impressive. We were thrilled with their creativity and collaborative spirit.",
    },
    {
      img: assets.testi4,
      name: "James",
      position: "CEO of King’s Kitchen",
      rating: 5.0,
      description:
        "Their work transformed our restaurant into an unforgettable space. Attention to lighting, form, and layout was exceptional. Everything felt thoughtful, fresh, and aligned with our brand’s vision.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="relative mb-4">
          <h2 className='text-[25px] font-normal tracking-[5px] uppercase text-[#D1BAA2] relative after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-0.5 after:bg-[#495944]'>
            Testimonial
          </h2>
        </div>
        <h3 className="text-[#495944] text-4xl font-semibold uppercase mb-12 font-nunito">
          Our happy clients say.
        </h3>

        <Splide
          aria-label="Client Testimonials"
          options={{
            type: "loop",
            perPage: 4,
            gap: 10,
            autoplay: true,
            interval: 5000,
            pauseOnHover: true,
            arrows: false,
            pagination: true,
            speed: 1000,
          }}
        >
          {testimonial.map((item, index) => (
            <SplideSlide key={index}>
              <div className="rounded-2xl p-6 text-center">
                <div className="relative group w-fit mx-auto mb-6">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-auto object-cover rounded-full border-4 border-[#D1BAA2] transition duration-500"
                  />

                  {/* Social icons on hover */}
                  <div className="absolute inset-0 bg-[#495944]/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-full">
                    <a
                      href="#"
                      className="text-white hover:text-[#D1BAA2] text-lg"
                    >
                      <FaFacebook />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[#D1BAA2] text-lg"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="text-white hover:text-[#D1BAA2] text-lg"
                    >
                      <FaInstagram />
                    </a>
                  </div>
                </div>
                <p className="text-sm text-gray-600 italic mb-4">
                  &quot;{item.description}&quot;
                </p>
                <h4 className="text-[#495944] font-semibold text-lg">
                  {item.name}
                </h4>
                <p className="text-xs uppercase text-gray-500 tracking-wide">
                  {item.position}
                </p>
                <div className="text-[#D1BAA2] mt-2 text-sm">
                  ★★★★★ {item.rating.toFixed(1)}
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
