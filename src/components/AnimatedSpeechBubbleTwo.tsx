import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedSpeechBubbleTwo = () => {
  const bubbleRef = useRef<SVGSVGElement | null>(null);
  
  useEffect(() => {
    // Reset animation on component mount
    if (bubbleRef.current) {
      const paths = bubbleRef.current.querySelectorAll('path');
      paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length.toString();
        path.style.strokeDashoffset = `${length}`;
      });
    }
  }, []);

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.5,
        staggerChildren: 0.08,
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const text = "LET'S TALK";
  
  return (
    <motion.div 
      className="absolute right-0 z-10 top-1/2 -translate-y-1/2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-[598px]">
        <svg ref={bubbleRef} width="598" height="272" viewBox="0 0 598 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arrow path with transparent stroke first */}
          <motion.path
            d="M348.098 124.492C348.098 124.492 325.457 132.859 299.125 122.277C272.793 111.695 270.455 105.666 266.025 99.3906C261.596 93.1152 265.164 82.7792 274.023 84.2558C282.883 85.7324 290.389 93.3613 288.543 100.129C286.697 106.896 285.59 109.726 281.16 112.803C276.73 115.879 268.117 121.416 253.721 118.955C239.324 116.494 217.053 104.312 204.748 94.8378"
            stroke="rgba(133, 175, 255, 0.1)" // Very slight opacity to maintain path
            strokeWidth="28.35"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Blue bubble shape */}
          <g mask="url(#mask2_2256_473)">
            <motion.path
              d="M543.911 30.7847L540.632 125.917L539.385 162.106L360.605 142.191L333.45 153.572L337.975 136.502H299.504L304.622 80.0049L311.574 3.28369L405.866 18.4568L543.911 30.7847Z"
              fill="#85AFFF"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </g>

          {/* Visible blue arrow on top */}
          <motion.path
            d="M348.098 124.492C348.098 124.492 325.457 132.859 299.125 122.277C272.793 111.695 270.455 105.666 266.025 99.3906C261.596 93.1152 265.164 82.7792 274.023 84.2558C282.883 85.7324 290.389 93.3613 288.543 100.129C286.697 106.896 285.59 109.726 281.16 112.803C276.73 115.879 268.117 121.416 253.721 118.955C239.324 116.494 217.053 104.312 204.748 94.8378"
            stroke="#85AFFF"
            strokeWidth="8.35"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Curved line animation */}
          <mask id="mask0_2256_473" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="181" y="61" width="188" height="90">
            <path d="M181 61H368.031V150.578H181V61Z" fill="white"/>
          </mask>
          <g mask="url(#mask0_2256_473)">
            <mask id="mask1_2256_473" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="190" y="69" width="173" height="73">
              <motion.path
                d="M348.098 124.492C348.098 124.492 325.457 132.859 299.125 122.277C272.793 111.695 270.455 105.666 266.025 99.3906C261.596 93.1152 265.164 82.7792 274.023 84.2558C282.883 85.7324 290.389 93.3613 288.543 100.129C286.697 106.896 285.59 109.726 281.16 112.803C276.73 115.879 268.117 121.416 253.721 118.955C239.324 116.494 217.053 104.312 204.748 94.8378"
                stroke="white"
                strokeWidth="28.35"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </mask>
            <g mask="url(#mask1_2256_473)">
              <motion.path
                d="M209.244 100.26C225.936 113.795 256.674 130.393 277.656 118.675C285.508 114.038 288.77 110.892 290.995 102.541C292.934 91.7912 280.579 79.4669 269.751 81.2781C260.396 82.8383 259.221 95.0269 264.151 101.694C267.541 108.22 278.457 116.601 283.769 118.773C299.105 127.435 315.475 131.806 333.204 130.113C336.669 129.683 348.075 128.649 347.725 124.138C347.3 122.819 346.04 123.419 345.115 123.36C335.749 124.71 326.388 125.579 316.991 124.049C303.274 122.288 290.413 116.099 278.847 108.467C273.704 104.363 267.751 99.1829 267.212 92.2244C267.162 88.3164 269.289 86.5544 273.177 87.1056C279.408 88.0112 285.728 94.1242 285.688 100.119C284.281 108.877 273.2 116.069 264.534 116.616C247.615 117.269 226.974 107.834 213.849 97.1954C218.327 96.467 223.082 95.7258 226.734 94.2226C230.386 92.7195 229.526 88.5497 225.484 89.6847C218.81 90.8758 212.106 91.7322 205.294 91.742C201.406 91.7519 199.939 93.9175 201.445 97.3825C204.192 103.692 207.486 109.607 210.36 115.858C211.197 117.679 212.425 120.262 214.709 119.248C217.219 118.146 215.754 115.334 214.868 113.384C212.909 109.102 209.912 102.705 209.244 100.26Z"
                fill="#85AFFF"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
              />
            </g>
          </g>

          {/* Speech bubble body */}
          <mask id="mask2_2256_473" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="285" y="0" width="274" height="272">
            <path d="M559 0H285V272H559V0Z" fill="white"/>
          </mask>
          <g mask="url(#mask2_2256_473)">
            <motion.path
              d="M543.911 30.7847L540.632 125.917L539.385 162.106L360.605 142.191L333.45 153.572L337.975 136.502H299.504L304.622 80.0049L311.574 3.28369L405.866 18.4568L543.911 30.7847Z"
              fill="#85AFFF"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <mask id="mask3_2256_473" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="299" y="3" width="245" height="160">
              <path d="M543.911 30.7847L540.632 125.917L539.385 162.106L360.605 142.191L333.45 153.572L337.975 136.502H299.504L304.622 80.0049L311.574 3.28369L405.866 18.4568L543.911 30.7847Z" fill="#85AFFF"/>
            </mask>
            <g mask="url(#mask3_2256_473)">
              <motion.path
                d="M395.665 -32.0545C408.208 23.6982 446.754 77.1517 519.564 156.853C517.371 160.493 500.78 159.151 451.955 124.666C462.56 137.566 492.948 168.924 529.659 191.148C516.198 194.788 474.287 171.605 429.316 135.586C434.517 143.824 463.274 179.269 494.784 204.942C477.04 201.685 424.88 172.18 384.805 130.605C387.303 138.077 392.209 155.09 391.841 163.367C367.826 138.46 318.512 80.7529 313.372 49.1792C317.349 60.1 337.693 76.002 354.672 88.6473C347.279 77.3439 331.544 51.4395 327.751 38.2584C332.952 51.2863 352.989 67.764 362.167 72.1704C349.063 48.4774 323.835 -14.9648 327.751 -79.1858C327.291 -67.6902 353.907 -2.742 381.746 25.2305C378.686 20.4406 376.546 8.17971 377.463 1.09048C381.389 10.7338 391.413 30.5952 400.101 32.8945C387.405 15.4602 390.006 -15.769 395.665 -32.0545Z"
                fill="#6084C5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </g>
          </g>

          {/* Updated text positioning */}
          <foreignObject x="315" y="65" width="220" height="100"> {/* Changed y from 40 to 65 */}
            <div>
              <motion.div 
                className="w-full text-center text-white text-[36px] font-logo"
                variants={textVariants}
                initial="hidden"
                animate="visible"
              >
                {text.split('').map((char, index) => (
                  <motion.span 
                    key={index} 
                    variants={letterVariants}
                    className="inline-block"
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </foreignObject>
        </svg>
      </div>
    </motion.div>
  );
};

export default AnimatedSpeechBubbleTwo;