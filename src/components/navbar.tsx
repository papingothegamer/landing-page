import React from 'react';
import { NavLink } from 'react-router-dom';
import AnimatedButton from '../components/ui/animated-button';

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
        <div className="font-logo text-4xl">MANA</div>

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

        <div className="absolute right-[104px] top-[calc(50%-53px/2)]">
          <AnimatedButton text="Join Community" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
