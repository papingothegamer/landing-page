import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const links = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full h-[87px] border-b border-[#4C8061] flex items-center px-6 md:px-16 z-40 box-border bg-transparent select-none">
      <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto relative">
        {/* Logo */}
        <div className="font-logo text-4xl">MANA</div>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm md:text-base flex-grow justify-center">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors duration-200 hover:text-black ${
                  isActive
                    ? 'text-black underline underline-offset-4'
                    : 'text-gray-700'
                } font-body`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Animated Button */}
        <motion.div
          className="absolute right-[104px] top-[calc(50%-53px/2)] w-[221px] h-[53px] rounded-[4px] flex items-center justify-center p-[2px] bg-transparent"
          whileHover="hover"
        >
          <motion.div
            variants={{
              hover: {
                background: [
                  'conic-gradient(from 0deg, #5372B4, #775AA2, #C23550, #EC7E32, #EFB12F, #4C8061, #5372B4)',
                  'conic-gradient(from 360deg, #5372B4, #775AA2, #C23550, #EC7E32, #EFB12F, #4C8061, #5372B4)',
                ],
                transition: {
                  backgroundPosition: {
                    repeat: Infinity,
                    ease: 'linear',
                    duration: 4,
                  },
                },
              },
            }}
            className="w-full h-full rounded-[4px] p-[2px]"
          >
            <div className="flex items-center justify-center w-full h-full bg-[#85AFFF] rounded-[4px] font-body  text-base">
              Join Community
            </div>
          </motion.div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
