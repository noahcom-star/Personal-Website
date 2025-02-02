'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ReactNode, useState } from 'react';

interface TooltipProps {
  children: ReactNode;
  content: string;
}

export default function Tooltip({ children, content }: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute z-50 px-4 py-2 text-sm rounded-lg left-1/2 -translate-x-1/2 bottom-full mb-2 whitespace-nowrap"
            style={{
              background: 'rgba(var(--darker-bg), 0.95)',
              border: '1px solid rgba(var(--neon-blue), 0.3)',
              boxShadow: '0 0 20px rgba(var(--neon-blue), 0.1)',
              backdropFilter: 'blur(10px)'
            }}
          >
            <div className="text-[rgb(var(--text-primary))]">{content}</div>
            {/* Arrow */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bottom-[-5px] w-2 h-2 rotate-45"
              style={{
                background: 'rgba(var(--darker-bg), 0.95)',
                border: '1px solid rgba(var(--neon-blue), 0.3)',
                borderTop: 'none',
                borderLeft: 'none'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 