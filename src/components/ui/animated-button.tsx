import React from 'react';
import { motion } from 'framer-motion';
import type { LucideIcon } from 'lucide-react';

interface AnimatedButtonProps {
  text: string;
  icon?: LucideIcon;
  className?: string;
  backgroundColor?: string;
  textColor?: string;
  iconPosition?: 'left' | 'right';
  variant?: 'default' | 'navbar';
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  text,
  icon: Icon,
  className = '',
  backgroundColor = '#85AFFF',
  textColor = '#000000',
  iconPosition = 'right',
  variant = 'default',
}) => {
  const buttonStyles = {
    default: {
      wrapper: 'w-[221px] h-[53px] rounded-[4px]',
      inner: 'rounded-[4px] text-base',
    },
    navbar: {
      wrapper: 'w-[169px] h-[41px] rounded-[2px]',
      inner: 'rounded-[2px] text-sm',
    }
  };

  const styles = buttonStyles[variant];

  return (
    <motion.div
      className={`relative ${styles.wrapper} p-[2px] ${className}`}
      initial={{
        background: 'conic-gradient(from 0deg, #5372B4, #775AA2, #C23550, #EC7E32, #EFB12F, #4C8061, #5372B4)',
      }}
      animate="rest"
      whileHover="hover"
      variants={{
        hover: {
          background: [
            'conic-gradient(from 0deg, #5372B4, #775AA2, #C23550, #EC7E32, #EFB12F, #4C8061, #5372B4)',
            'conic-gradient(from 360deg, #5372B4, #775AA2, #C23550, #EC7E32, #EFB12F, #4C8061, #5372B4)',
          ],
          transition: {
            background: {
              repeat: Infinity,
              ease: 'linear',
              duration: 4,
            },
          },
        },
      }}
    >
      <div
        className={`w-full h-full ${styles.inner} flex items-center justify-center font-body transition-all duration-300 select-none cursor-pointer`}
        style={{
          backgroundColor,
          color: textColor,
        }}
      >
        {iconPosition === 'left' && Icon && <Icon size={variant === 'navbar' ? 14 : 16} className="mr-2" />}
        {text}
        {iconPosition === 'right' && Icon && <Icon size={variant === 'navbar' ? 14 : 16} className="ml-2" />}
      </div>
    </motion.div>
  );
};

export default AnimatedButton;
