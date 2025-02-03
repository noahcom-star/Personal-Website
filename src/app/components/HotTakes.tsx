'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface HotTake {
  title: string;
  description: string;
}

const hotTakes: HotTake[] = [
  {
    title: "On Building Companies",
    description: "Too many people want to be founders, not enough want to build great companies."
  },
  {
    title: "On AI & Jobs",
    description: "AI won't take your job—someone using AI better than you will."
  },
  {
    title: "On Risk",
    description: "Everyones perception of risk is flawed."
  },
  {
    title: "On Self-Made Success",
    description: "Nobody is actually self-made—every successful person had unfair advantages or a little bit of luck."
  },
  {
    title: "On Growth",
    description: "If you're not slightly embarrassed by what you built a year ago, you're not growing fast enough."
  },
  {
    title: "On Success",
    description: "Most people want a 'blueprint for success,' but real success is just figuring things out as you go."
  },
  {
    title: "On VC Funding",
    description: "Raising VC money isn't an achievement—it's a liability. The real flex is revenue."
  },
  {
    title: "On Work-Life Balance",
    description: "'Work-life balance' is a lie—either you're obsessed, or you haven't found your passion yet."
  },
  {
    title: "On Entrepreneurship",
    description: "Nobody knows what they're doing in entrepreneurship, it's all uncharted and what separates successful founders vs unsuccessful is their willingness to work in the unknown."
  },
  {
    title: "On Uncertainty",
    description: "If you want to become a successful entrepreneur, you need to become comfortable with handling uncertainty, and making decisions without knowing what's behind the door."
  },
  {
    title: "Decision Making",
    description: "The best entrepreneurs aren't the ones who know everything, because that means they waited too long—they're the ones comfortable with making critical decisions without knowing what's behind the door."
  }
];

function HotTakeCard({ hotTake, index }: { hotTake: HotTake; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative p-6 rounded-lg border border-[rgba(var(--neon-purple),0.3)] bg-[rgba(var(--darker-bg),0.5)] hover:border-[rgba(var(--neon-purple),0.8)] card-hover group"
      whileHover={{ scale: 1.01 }}
    >
      <div className="absolute inset-0 bg-[rgba(var(--neon-purple),0.02)] opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-4 text-[rgb(var(--neon-purple))]"
          whileHover={{ scale: 1.01 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
        >
          {hotTake.title}
        </motion.h3>
        <motion.p 
          className="text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors duration-150"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
        >
          {hotTake.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

export default function HotTakes() {
  return (
    <Section id="hot-takes" className="py-20">
      <div className="text-center mb-20">
        <div className="mb-4">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold gradient-text relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Hot Takes <motion.span
              animate={{
                textShadow: [
                  "0 0 4px rgba(var(--neon-purple), 0.6)",
                  "0 0 8px rgba(var(--neon-purple), 0.8)",
                  "0 0 4px rgba(var(--neon-purple), 0.6)"
                ]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >🔥</motion.span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[rgb(var(--text-secondary))] text-lg italic mt-4"
          >
            These are my current takes on entrepreneurship as of January 2025. With limited real-world experience, take them with a grain of salt—they'll probably change every month! 😅
          </motion.p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {hotTakes.slice(0, -1).map((hotTake, index) => (
          <HotTakeCard key={hotTake.title} hotTake={hotTake} index={index} />
        ))}
      </div>
      
      <div className="mt-6 max-w-3xl mx-auto">
        <HotTakeCard hotTake={hotTakes[hotTakes.length - 1]} index={hotTakes.length - 1} />
      </div>
    </Section>
  );
} 
