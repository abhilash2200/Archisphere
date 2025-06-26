import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const CounterUp = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.3, // Lower threshold for mobile
    rootMargin: "-50px 0px" // Adjust when the trigger happens
  });

  return (
    <div 
      className="container mx-auto px-4 sm:px-8 md:px-16 py-8 md:py-16" 
      ref={ref}
    >
      <div className="flex flex-wrap justify-center md:justify-between items-center">
        <div className="w-full">
          <div className="grid grid-cols-2 md:flex md:flex-wrap gap-6 md:gap-x-6 justify-between">
            {/* Projects Completed */}
            <div className="text-center p-4 md:p-0">
              <h4 className="text-3xl md:text-4xl font-semibold text-[#495944]">
                {inView && <CountUp start={0} end={1000} duration={2.75} />}+
              </h4>
              <p className="text-base md:text-lg text-[#505050]">Projects Completed</p>
            </div>
            
            {/* Divider - hidden on mobile, shown on md+ */}
            <div className="hidden md:block w-0.5 h-auto bg-[#495944]"></div>

            {/* Happy Clients */}
            <div className="text-center p-4 md:p-0">
              <h4 className="text-3xl md:text-4xl font-semibold text-[#495944]">
                {inView && <CountUp start={0} end={200} duration={2.75} />}+
              </h4>
              <p className="text-base md:text-lg text-[#505050]">Happy Clients</p>
            </div>
            
            {/* Divider - hidden on mobile, shown on md+ */}
            <div className="hidden md:block w-0.5 h-auto bg-[#495944]"></div>

            {/* Awards Won */}
            <div className="text-center p-4 md:p-0">
              <h4 className="text-3xl md:text-4xl font-semibold text-[#495944]">
                {inView && <CountUp start={0} end={50} duration={3.5} />}+
              </h4>
              <p className="text-base md:text-lg text-[#505050]">Awards Won</p>
            </div>
            
            {/* Divider - hidden on mobile, shown on md+ */}
            <div className="hidden md:block w-0.5 h-auto bg-[#495944]"></div>

            {/* Years of Experience */}
            <div className="text-center p-4 md:p-0">
              <h4 className="text-3xl md:text-4xl font-semibold text-[#495944]">
                {inView && <CountUp start={0} end={10} duration={4.5} />}+
              </h4>
              <p className="text-base md:text-lg text-[#505050]">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounterUp;