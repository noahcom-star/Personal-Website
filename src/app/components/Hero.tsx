'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import Section from './Section';
import Tooltip from './Tooltip';

export default function Hero() {
  const [text, setText] = useState("");
  const [isHovered, setIsHovered] = useState<string | null>(null);
  const fullText = "Figuring out my way from 0 to 1.";
  
  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const socialLinks = [
    { 
      href: 'https://www.linkedin.com/in/noah-barbaros/',
      icon: '🔗',
      label: 'LinkedIn',
      tooltip: 'Connect with me on LinkedIn'
    },
    { 
      href: 'https://x.com/Noah_Barbaros',
      icon: '🐦',
      label: 'X (Formerly Twitter)',
      tooltip: 'Check out my thoughts on X (formerly Twitter)'
    },
    { 
      href: 'https://github.com/noahcom-star',
      icon: '💻',
      label: 'GitHub',
      tooltip: 'Check out my projects on GitHub'
    },
    { 
      href: 'https://medium.com/@noahsaur',
      icon: '✍️',
      label: 'Medium',
      tooltip: 'Read my articles on Medium'
    },
    { 
      href: 'mailto:noah@barbaros.ca',
      icon: '📩',
      label: 'Email',
      tooltip: 'Send me an email'
    }
  ];

  return (
    <div className="min-h-[100vh] flex flex-col justify-center items-center relative px-4 overflow-hidden bg-[rgb(var(--background-rgb))]">
      {/* Static grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(var(--neon-blue),0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(var(--neon-blue),0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
        
        {/* Vignette overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgb(var(--background-rgb))_70%)]" />
      </div>
      
      {/* Main content */}
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="relative">
          {/* Glowing background effect for title */}
          <div className="absolute -inset-x-8 -inset-y-4 bg-[radial-gradient(ellipse_at_center,rgba(var(--neon-blue),0.15),transparent_70%)] blur-lg" />
          
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="gradient-text relative">
              {text}
              <motion.span 
                className="inline-block w-0.5 h-12 bg-[rgb(var(--neon-blue))] ml-1 absolute"
                animate={{
                  opacity: [1, 0, 1],
                  height: ["48px", "40px", "48px"]
                }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </span>
          </motion.h1>
        </div>
        
        <motion.p
          className="text-lg md:text-xl text-[rgb(var(--text-secondary))] max-w-3xl mx-auto mb-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Figure it out enthusiast & obsessed with learning. I take action, jump at every opportunity, and love challenges. If I&apos;m not qualified? I don&apos;t care—I&apos;ll figure it out!
        </motion.p>

        {/* Social links with enhanced hover effects */}
        <div className="mt-12 flex justify-center gap-6">
          {socialLinks.map((social) => (
            <Tooltip key={social.label} content={social.tooltip}>
              <motion.a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl relative"
                data-hover="true"
                onHoverStart={() => setIsHovered(social.label)}
                onHoverEnd={() => setIsHovered(null)}
                whileHover={{ 
                  scale: 1.2,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                animate={isHovered === social.label ? {
                  y: [0, -5, 0],
                } : {}}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
              >
                {social.icon}
                <AnimatePresence>
                  {isHovered === social.label && (
                    <motion.div
                      className="absolute -inset-3 bg-[rgba(var(--neon-blue),0.1)] rounded-full -z-10"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                </AnimatePresence>
              </motion.a>
            </Tooltip>
          ))}
        </div>
      </motion.div>

      {/* Enhanced scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 w-full flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 5, 0] }}
        transition={{
          opacity: { duration: 1 },
          y: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[rgb(var(--text-secondary))] text-sm">Scroll to explore</span>
          <div className="w-1 h-8 rounded-full bg-[rgba(var(--neon-blue),0.3)] relative overflow-hidden">
            <motion.div
              className="absolute w-full rounded-full bg-[rgb(var(--neon-blue))]"
              animate={{
                y: ["0%", "100%", "0%"],
                height: ["30%", "50%", "30%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
} 