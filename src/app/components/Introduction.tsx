'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Section from './Section';
import { useState } from 'react';

export default function Introduction() {
  const [imageError, setImageError] = useState(false);

  return (
    <Section id="intro" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto w-full px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-48 h-48 md:w-64 md:h-64"
          >
            <div className="absolute inset-0 rounded-full bg-[rgba(var(--neon-blue),0.1)] blur-xl" />
            <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-[rgba(var(--neon-blue),0.3)] shadow-lg">
              <div className="absolute inset-[-15%] scale-[1.35]">
                <Image
                  src="/noah.jpg"
                  alt="Noah Barbaros"
                  width={400}
                  height={400}
                  className="object-cover object-center translate-y-[-8%] translate-x-[-2%]"
                  onError={() => {
                    console.error('Failed to load image');
                    setImageError(true);
                  }}
                  priority
                  quality={100}
                />
              </div>
              {imageError && (
                <div className="absolute inset-0 flex items-center justify-center text-[rgb(var(--text-secondary))]">
                  Image failed to load
                </div>
              )}
            </div>
          </motion.div>

          {/* Introduction Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Hey! I&apos;m Noah 👋
            </h2>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-[rgb(var(--text-secondary))]">
                Entrepreneurship is like my addiction - I want to know everything there is to it, be part of it, and lead it.
              </p>
              <p className="text-lg md:text-xl text-[rgb(var(--text-secondary))]">
                Everyone&apos;s figuring it out as they go—so why not me? I live by the quote, &quot;The best way to predict the future is to create it.&quot; That&apos;s my mindset. Through entrepreneurship, you can build the future you want.
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-6">
                <a
                  href="https://noahbarbaros.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-lg bg-[rgba(var(--neon-blue),0.1)] border border-[rgb(var(--neon-blue))] hover:bg-[rgba(var(--neon-blue),0.2)] transition-all hover-glow text-lg"
                  data-hover="true"
                >
                  Subscribe to my newsletter! 🚀
                </a>
                <div className="text-[rgb(var(--text-secondary))] text-lg">
                  Reach out to me: {' '}
                  <a 
                    href="mailto:noah@barbaros.ca"
                    className="text-[rgb(var(--neon-blue))] hover-glow"
                    data-hover="true"
                  >
                    noah@barbaros.ca
                  </a>
                  {' '} or {' '}
                  <a 
                    href="https://www.linkedin.com/in/noah-barbaros/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[rgb(var(--neon-blue))] hover-glow"
                    data-hover="true"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[rgb(var(--text-secondary))] text-sm">Scroll to explore</span>
          <div className="w-1 h-8 rounded-full bg-[rgba(var(--neon-blue),0.3)] relative">
            <motion.div
              className="absolute top-0 w-full h-1/3 rounded-full bg-[rgb(var(--neon-blue))]"
              animate={{ y: [0, 20, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </motion.div>
    </Section>
  );
} 
