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
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-lg border border-[rgba(var(--neon-purple),0.2)] bg-[rgba(var(--darker-bg),0.5)] backdrop-blur-sm hover:border-[rgba(var(--neon-purple),0.5)] card-hover card-glow group"
    >
      <div className="absolute inset-0 bg-[rgba(var(--neon-purple),0.03)] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-lg" />
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-4 text-[rgb(var(--neon-purple))]"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {hotTake.title}
        </motion.h3>
        <motion.p 
          className="text-[rgb(var(--text-secondary))]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
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
      <motion.div 
        className="text-center mb-12 relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Subtle glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--neon-purple),0.08),transparent_50%)] blur-md" />
        
        <motion.h2 
          className="text-4xl md:text-5xl font-bold relative"
          animate={{ 
            textShadow: [
              "0 0 10px rgba(var(--neon-purple), 0.3)",
              "0 0 20px rgba(var(--neon-purple), 0.5)",
              "0 0 10px rgba(var(--neon-purple), 0.3)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[rgb(var(--neon-blue))] to-[rgb(var(--neon-purple))]">
            Hot Takes{" "}
            <motion.span
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              🔥
            </motion.span>
          </span>
        </motion.h2>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {hotTakes.slice(0, -1).map((hotTake, index) => (
          <HotTakeCard key={hotTake.title} hotTake={hotTake} index={index} />
        ))}
      </div>
      
      {/* Centered last card */}
      <div className="mt-6 max-w-3xl mx-auto">
        <HotTakeCard hotTake={hotTakes[hotTakes.length - 1]} index={hotTakes.length - 1} />
      </div>
    </Section>
  );
} 
