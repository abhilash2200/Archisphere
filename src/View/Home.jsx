import React from 'react';
import Layout from '../components/Layout.Jsx';
import { assets } from '../assets/assets';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Home = () => {
    return (
        <Layout>
            <div className="relative">
                {/* <div className='absolute inset-0 bg-black/30 z-2'></div> */}
                <Splide
                    aria-label="My Favorite Images"
                    options={{
                        type: 'loop',
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

                {/* Single text block over slider with fade-in animation */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white animate-fadeIn z-4">
                    <h2 className="text-6xl font-bold mb-4 capitalize text-[#D1BAA2] leading-14">modern innovative architecture</h2>
                    <p className="mb-4">From as low as $20 A small river named Durden flows by their place and supplies it with the necessary regularly.</p>
                    <button className="bg-[#495944] text-white px-8 py-3 rounded-md hover:bg-white hover:text-[#495944] transition-colors duration-300 hover:cursor-pointer" onClick={() => window.location.href = '/Services'}>
                        Explore More
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
