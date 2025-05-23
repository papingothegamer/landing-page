import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedSpeechBubble = () => {
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

  const text = "WE HEAR YOU";
  
  return (
    <motion.div 
      className="absolute left-0 z-10 top-1/2 -translate-y-1/2" // Updated y transform
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="relative w-[675px]"> {/* Fixed width to match SVG dimensions */}
        <svg ref={bubbleRef} width="675" height="272" viewBox="0 0 675 272" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Arrow path with transparent stroke first */}
          <motion.path
            d="M362.577 186.709C362.577 186.709 401.986 179.89 411.308 156.023C420.63 132.155 418.968 109.519 392.836 114.325C366.704 119.13 382.181 144.744 389.246 148.594C396.311 152.444 416.772 159.365 437.149 148.967C458.131 138.261 472.603 120.294 472.603 120.294"
            stroke="rgba(133, 175, 255, 0.1)" // Very slight opacity to maintain path
            strokeWidth="33.8625"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Green bubble shape */}
          <g mask="url(#mask1_2256_472)">
            <motion.path
              d="M133.09 241.215L136.368 146.083L137.615 109.894L316.395 129.809L343.55 118.428L339.025 135.498H377.496L372.378 191.995L365.426 268.716L271.134 253.543L133.09 241.215Z"
              fill="#6DB88C"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
          </g>

          {/* Visible blue arrow on top */}
          <motion.path
            d="M362.577 186.709C362.577 186.709 401.986 179.89 411.308 156.023C420.63 132.155 418.968 109.519 392.836 114.325C366.704 119.13 382.181 144.744 389.246 148.594C396.311 152.444 416.772 159.365 437.149 148.967C458.131 138.261 472.603 120.294 472.603 120.294"
            stroke="#6DB88C"
            strokeWidth="8.8625"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Rest of the masks and paths */}
          <mask id="mask0_2256_472" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="345" y="96" width="145" height="108">
            <motion.path
              d="M362.577 186.709C362.577 186.709 401.986 179.89 411.308 156.023C420.63 132.155 418.968 109.519 392.836 114.325C366.704 119.13 382.181 144.744 389.246 148.594C396.311 152.444 416.772 159.365 437.149 148.967C458.131 138.261 472.603 120.294 472.603 120.294"
              stroke="#85AFFF"
              strokeWidth="33.8625"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </mask>
          <g mask="url(#mask0_2256_472)">
            <motion.path
              d="M411.803 158.988C410.252 161.731 407.488 165.273 404.397 168.582C401.125 172.086 397.532 175.282 394.693 176.973L394.136 177.291C385.019 182.244 375.636 186.641 365.236 188.116L365.226 188.117L365.217 188.119C364.179 188.318 362.95 188.535 361.93 188.38C361.428 188.304 361.006 188.141 360.688 187.867C360.377 187.598 360.133 187.195 360.029 186.573C359.91 185.781 360.168 185.227 360.606 184.816C361.007 184.44 361.572 184.175 362.18 183.998L362.443 183.928L362.448 183.926C370.192 181.921 379.201 179.125 387.239 174.931C394.899 170.933 401.711 165.646 405.699 158.53C407.631 158.834 409.7 159.002 411.803 158.988ZM412.345 157.966L412.345 157.967C412.308 158.042 412.268 158.117 412.229 158.194C410.12 158.234 408.039 158.086 406.097 157.797C406.153 157.691 406.21 157.586 406.264 157.479L408.327 154.163C410.112 154.231 412.017 154.045 414.42 153.73L412.345 157.966ZM389.269 112.635C393.677 111.043 398.635 110.692 402.881 112.011L403.289 112.144C408.704 113.988 412.573 116.658 415.039 120.269C417.428 123.768 418.53 128.195 418.394 133.709L418.377 134.245C418.137 140.386 417.405 146.394 415.051 152.443L414.836 152.881C412.403 153.209 410.526 153.412 408.81 153.388L409.135 152.866L409.147 152.848L409.155 152.829C413.567 143.734 415.537 133.966 413.595 126.596C412.621 122.899 410.658 119.796 407.521 117.706C404.485 115.683 400.387 114.633 395.1 114.866L394.585 114.892L394.574 114.893C389.396 115.349 385.55 117.702 383.25 121.101C381.026 124.389 380.27 128.622 381.108 132.989L381.195 133.413C382.298 138.542 385.564 142.494 389.289 145.502C392.549 148.135 396.184 150.063 399.087 151.439L400.283 151.996C403.085 153.277 405.206 153.909 407.435 154.107L405.582 157.087L405.573 157.101L405.565 157.117C405.472 157.302 405.373 157.483 405.276 157.665C403.582 157.372 402.011 156.975 400.641 156.505L399.968 156.263C392.311 153.363 385.21 148.863 380.944 142.925C376.698 137.013 375.239 129.653 378.883 120.93C380.813 117.22 384.72 114.277 389.269 112.635ZM472.305 115.127C474.535 114.788 476.035 115.156 476.949 116.053C477.812 116.901 478.246 118.31 478.168 120.348L478.146 120.764C477.664 127.827 475.595 134.533 473.239 141.179L472.764 142.508C472.383 143.561 471.794 144.364 471.046 144.809C470.355 145.219 469.486 145.35 468.423 145.033L468.208 144.964L468.207 144.964C466.997 144.546 466.436 143.861 466.22 143.065C466.023 142.338 466.102 141.473 466.341 140.549L466.453 140.15L466.453 140.149C467.708 135.978 469.116 131.857 470.462 127.7L470.48 127.646L470.481 127.589C470.491 127.204 470.39 126.764 470.001 126.596C469.664 126.45 469.332 126.603 469.094 126.802L468.998 126.89C461.576 134.224 452.835 141.748 443.384 147.584C434.226 153.239 424.422 157.298 414.519 158.081L413.56 158.146C413.414 158.155 413.268 158.158 413.123 158.165L415.358 153.605L416.405 153.461C426.597 152.037 434.634 147.419 442.073 141.925C445.79 139.181 449.369 136.209 452.986 133.309C456.609 130.406 460.276 127.57 464.19 125.076L464.254 125.035L464.299 124.974C464.436 124.782 464.55 124.58 464.62 124.379C464.689 124.182 464.727 123.954 464.669 123.73C464.606 123.489 464.442 123.302 464.21 123.193C464.047 123.117 463.857 123.081 463.65 123.075L463.438 123.078C462.45 123.135 460.722 123.42 458.725 123.72C456.712 124.023 454.395 124.348 452.184 124.497C449.966 124.647 447.891 124.618 446.347 124.233C444.893 123.87 444.037 123.231 443.836 122.245L443.804 122.043C443.733 121.283 443.967 120.789 444.342 120.446C444.688 120.13 445.184 119.918 445.76 119.788L446.013 119.737L446.014 119.736C453.686 118.344 461.33 116.884 469.011 115.644L472.305 115.127Z"
              fill="#6DB88C"
              stroke="#6DB88C"
              strokeWidth="0.7875"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 2 }}
            />
          </g>
          <mask id="mask1_2256_472" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="118" y="0" width="274" height="272">
            <path d="M118 272H392V0H118V272Z" fill="white" />
          </mask>
          <g mask="url(#mask1_2256_472)">
            <motion.path
              d="M133.09 241.215L136.368 146.083L137.615 109.894L316.395 129.809L343.55 118.428L339.025 135.498H377.496L372.378 191.995L365.426 268.716L271.134 253.543L133.09 241.215Z"
              fill="#6DB88C"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            />
            <mask id="mask2_2256_472" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="133" y="109" width="245" height="160">
              <path d="M133.09 241.215L136.368 146.083L137.615 109.894L316.395 129.809L343.55 118.428L339.025 135.498H377.496L372.378 191.995L365.426 268.716L271.134 253.543L133.09 241.215Z" fill="#ECAB29" />
            </mask>
            <g mask="url(#mask2_2256_472)">
              <motion.path
                d="M281.335 304.055C268.793 248.302 230.246 194.848 157.436 115.147C159.629 111.507 176.22 112.849 225.045 147.334C214.44 134.434 184.052 103.076 147.341 80.8522C160.802 77.212 202.713 100.395 247.684 136.414C242.483 128.176 213.726 92.7314 182.216 67.0582C199.96 70.315 252.12 99.8197 292.195 141.395C289.697 133.923 284.792 116.91 285.159 108.633C309.174 133.54 358.488 191.247 363.628 222.821C359.651 211.9 339.307 195.998 322.328 183.353C329.721 194.656 345.456 220.561 349.249 233.742C344.049 220.714 324.011 204.236 314.833 199.83C327.937 223.523 353.165 286.965 349.249 351.186C349.709 339.69 323.093 274.742 295.254 246.77C298.314 251.559 300.454 263.82 299.537 270.91C295.611 261.266 285.588 241.405 276.899 239.105C289.595 256.54 286.994 287.769 281.335 304.055Z"
                fill="#4C8061"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
              />
            </g>
          </g>

          {/* Hidden original text path */}
          <g style={{ opacity: 0 }}>
            <path d="M189.047 171.812C..." fill="white" /> {/* Original text path */}
          </g>

          {/* Centered text overlay */}
          <foreignObject x="133" y="160" width="245" height="100"> {/* Positioned to match bubble area */}
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

export default AnimatedSpeechBubble;