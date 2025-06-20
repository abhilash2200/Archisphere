import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CounterUp = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    //  console.log('Counter visible?', inView);

    return (
        <div className="container mx-auto px-16 py-16" ref={ref}>
            <div className="flex flex-wrap justify-between items-center">
                <div className="w-full">
                    <div className="flex flex-wrap gap-x-6 justify-between">
                        <div className="text-center">
                            <h4 className="text-4xl font-semibold text-[#495944]">
                                {inView && <CountUp start={0} end={1000} duration={2.75} />}+
                            </h4>
                            <p className="text-lg text-[#505050]">Projects Completed</p>
                        </div>
                        <div className="w-0.5 h-auto bg-[#495944]"></div>
                        <div className="text-center">
                            <h4 className="text-4xl font-semibold text-[#495944]">
                                {inView && <CountUp start={0} end={200} duration={2.75} />}+
                            </h4>
                            <p className="text-lg text-[#505050]">Happy Clients</p>
                        </div>
                        <div className="w-0.5 h-auto bg-[#495944]"></div>
                        <div className="text-center">
                            <h4 className="text-4xl font-semibold text-[#495944]">
                                {inView && <CountUp start={0} end={50} duration={3.5} />}+
                            </h4>
                            <p className="text-lg text-[#505050]">Awards Won</p>
                        </div>
                        <div className="w-0.5 h-auto bg-[#495944]"></div>
                        <div className="text-center">
                            <h4 className="text-4xl font-semibold text-[#495944]">
                                {inView && <CountUp start={0} end={10} duration={4.5} />}+
                            </h4>
                            <p className="text-lg text-[#505050]">Years of Experience</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CounterUp
