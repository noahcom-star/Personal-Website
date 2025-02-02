'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[rgb(var(--background-rgb))] text-[rgb(var(--text-primary))]">
      <div className="max-w-4xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[rgba(var(--card-rgb),0.1)] rounded-2xl p-8 backdrop-blur-sm border border-[rgba(var(--card-rgb),0.2)]"
        >
          <h1 className="text-4xl font-bold mb-8 gradient-text">Let's Connect!</h1>
          
          <div className="space-y-6">
            <p className="text-lg text-[rgb(var(--text-secondary))]">
              I'm always excited to connect with fellow entrepreneurs, innovators, and anyone passionate about building the future. Whether you want to discuss potential collaborations, share ideas, or just have a chat about technology and entrepreneurship, I'd love to hear from you!
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[rgb(var(--neon-blue))]">📧</span>
                <a 
                  href="mailto:noah@barbaros.ca"
                  className="text-lg text-[rgb(var(--neon-blue))] hover-glow"
                  data-hover="true"
                >
                  noah@barbaros.ca
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[rgb(var(--neon-blue))]">💼</span>
                <a 
                  href="https://www.linkedin.com/in/noah-barbaros/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[rgb(var(--neon-blue))] hover-glow"
                  data-hover="true"
                >
                  LinkedIn Profile
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[rgb(var(--neon-blue))]">📰</span>
                <a 
                  href="https://noahbarbaros.substack.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-[rgb(var(--neon-blue))] hover-glow"
                  data-hover="true"
                >
                  Subscribe to my Newsletter
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link 
              href="/"
              className="text-[rgb(var(--neon-blue))] hover-glow"
              data-hover="true"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 