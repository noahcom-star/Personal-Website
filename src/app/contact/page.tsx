'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl font-bold mb-8 gradient-text">Let&apos;s Connect!</h1>
        <p className="text-lg text-[rgb(var(--text-secondary))] mb-8">
          I&apos;m always excited to connect with fellow entrepreneurs and innovators. Feel free to reach out!
        </p>
        <div className="space-y-4">
          <a 
            href="mailto:noah@barbaros.ca"
            className="block w-full p-4 rounded-lg bg-[rgba(var(--neon-blue),0.1)] border border-[rgb(var(--neon-blue))] hover:bg-[rgba(var(--neon-blue),0.2)] transition-all"
          >
            noah@barbaros.ca
          </a>
          <a 
            href="https://www.linkedin.com/in/noah-barbaros/"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 rounded-lg bg-[rgba(var(--neon-blue),0.1)] border border-[rgb(var(--neon-blue))] hover:bg-[rgba(var(--neon-blue),0.2)] transition-all"
          >
            Connect on LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
} 