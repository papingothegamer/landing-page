import React from 'react';
import { PlayCircle } from 'lucide-react';
import backgroundImage from '../assets/freepik__the-style-is-candid-image-photography-with-natural__87410.png';
import foregroundImage from '../assets/Adobe Express - file 1.png';
import AnimatedButton from '../components/ui/animated-button';
import AnimatedSpeechBubble from '../components/AnimatedSpeechBubble';

const Home = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pb-[140px] md:pb-[180px]">
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
        className="absolute bottom-[-110px] left-1/2 transform -translate-x-1/2 w-auto max-w-none h-auto z-30 pointer-events-none"
      />
      
      {/* AnimatedSpeechBubble positioned on the left side */}
      <div className="absolute bottom-[300px] left-[15%] md:left-[18%] lg:left-[7.5%] lg:bottom-[18%] z-40">
        <AnimatedSpeechBubble />
      </div>

      {/* Main Content */}
      <div className="relative z-40 flex flex-col items-center px-4 sm:px-6 md:px-0 mt-[120px]">
        <div className="flex flex-col items-center w-full max-w-[675px] text-center">
          <h1 className="font-header text-[40px] sm:text-[48px] md:text-[58px] leading-[56px] sm:leading-[72px] md:leading-[86px] font-extrabold flex flex-wrap justify-center select-none">
            <span className="mr-2">WE</span>
            <span className="text-[#6CBBA9] mr-2">EMPOWER</span>
            <span>MINDS,</span>
          </h1>
          <h2 className="font-body text-[28px] sm:text-[48px] md:text-[58px] leading-[56px] sm:leading-[72px] md:leading-[86px] text-[#181818] font-normal select-none">
            We Connect Hearts
          </h2>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-w-[715px] mt-1 md:mt-2 mb-2 md:mb-3 px-2">
          <p className="text-[20px] md:text-[20px] leading-[32px] md:leading-[36px] text-center text-[#181818] font-body select-none">
            Find peace in a safe, anonymous community where shared experiences
            foster healing. Join our daily mental health check-ins and get support
            tailored for you.
          </p>
        </div>

        <AnimatedButton
          text="See How It Feels"
          icon={PlayCircle}
          backgroundColor="#6CBBA9"
          textColor="#000000"
          iconPosition="left"
        />
      </div>
    </div>
  );
};

export default Home;