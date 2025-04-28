import React from 'react';
import { PlayCircle } from 'lucide-react';
import backgroundImage from '../assets/freepik__the-style-is-candid-image-photography-with-natural__87410.png';
import foregroundImage from '../assets/Adobe Express - file 1.png';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white via-white/50 to-transparent z-10" />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/80 to-transparent z-20" />

      {/* Foreground Image */}
      <img
        src={foregroundImage}
        alt="Foreground"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-auto max-w-none h-auto z-30"
      />

      {/* Main Content */}
      <div className="absolute top-[120px] left-1/2 transform -translate-x-1/2 flex flex-col items-center z-40">
        {/* Header and Body Text Container */}
        <div className="flex flex-col items-center w-[675px] h-auto">
          {/* Header Text */}
          <h1 className="font-header text-[58px] leading-[86px] text-center font-extrabold flex flex-wrap justify-center">
            <span className="mr-2">WE</span>
            <span className="text-[#6CBBA9] mr-2">EMPOWER</span>
            <span>MINDS,</span>
          </h1>

          {/* Body Text */}
          <h2 className="font-body text-[58px] leading-[86px] text-center text-[#181818] font-normal mt-4">
            We Connect Hearts
          </h2>
        </div>

        {/* Description Text */}
        <div className="flex flex-col justify-center items-center w-[715px] h-auto mt-8 mb-8">
          <p className="text-[20px] leading-[36px] text-center text-[#181818] font-body">
            Find peace in a safe, anonymous community where shared experiences
            foster healing. Join our daily mental health check-ins and get support
            tailored for you.
          </p>
        </div>

        {/* Button Container */}
        <div className="flex flex-row items-center gap-2 w-auto h-[56px]">
          <button className="px-6 py-3 bg-[#6CBBA9] text-black rounded-md flex items-center justify-center gap-2 hover:bg-opacity-90 transition-colors duration-300 font-body">
            <PlayCircle size={18} />
            <span>See How It Feels</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
