'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);
  
  // Transform values for background opacity and blur
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(5, 5, 10, 0)', 'rgba(5, 5, 10, 0.8)']
  );
  
  const backdropBlur = useTransform(
    scrollY,
    [0, 100],
    ['blur(0px)', 'blur(12px)']
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#' },
    { label: 'Current', href: '#current' },
    { label: 'Past', href: '#past' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backgroundColor,
        backdropFilter: backdropBlur,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <motion.a
            href="#"
            className="text-xl font-bold gradient-text"
            data-hover="true"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            NB
          </motion.a>

          {/* Navigation Items */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover-glow"
                data-hover="true"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 hover:bg-[rgba(var(--neon-blue),0.1)] rounded-lg"
            whileTap={{ scale: 0.95 }}
            data-hover="true"
          >
            <div className="w-6 h-0.5 bg-current mb-1" />
            <div className="w-6 h-0.5 bg-current mb-1" />
            <div className="w-6 h-0.5 bg-current" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu (can be expanded later) */}
      <div className="md:hidden">
        {/* Mobile menu content here */}
      </div>
    </motion.nav>
  );
} 