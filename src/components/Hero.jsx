import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = ({ headerData }) => {
    const titles = headerData?.titles || ["Senior Frontend Developer"];
    const typedText = useTypewriter(titles, 100, 2000);

    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center bg-gray-50 text-center px-4 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-blue-100 rounded-full blur-[100px] opacity-50"></div>
                <div className="absolute top-[30%] -right-[10%] w-[40%] h-[60%] bg-indigo-100 rounded-full blur-[100px] opacity-50"></div>
            </div>

            <div className="z-10 max-w-4xl relative">
                <h1 className="text-6xl md:text-8xl font-bold text-gray-900 tracking-tight mb-6">
                    {headerData?.name || "Ben Kallaus"}
                </h1>
                <div className="h-12 md:h-16 flex items-center justify-center"> {/* Fixed height for typing stability */}
                    <p className="text-2xl md:text-3xl text-gray-600 font-light mb-0">
                        {typedText}<span className="animate-pulse ml-1">|</span>
                    </p>
                </div>
                <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mt-12">
                    Building precise, high-performance digital experiences.
                    <span className="block mt-2 text-sm uppercase tracking-widest text-gray-400 font-semibold">
                        Engineering &bull; Design &bull; Architecture
                    </span>
                </p>
            </div>

            {/* Future Content Placeholder */}
            {/* <div className="mt-24 border-2 border-dashed border-gray-200 rounded-xl w-full max-w-3xl h-64 flex items-center justify-center relative group">
                <div className="text-gray-300 font-medium group-hover:text-gray-400 transition-colors">
                    Interactive Showcase Area
                </div>
            </div>

            <div className="absolute bottom-10 animate-bounce text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div> */}
        </div>
    );
};

export default Hero;
