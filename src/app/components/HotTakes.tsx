'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import React from 'react';

interface HotTake {
  title: string;
  description: string;
}

const hotTakes: HotTake[] = [
  {
    title: "Startups Need Less Planning, More Building",
    description: "Too many founders get stuck in analysis paralysis. The best way to learn is by shipping something real to users, even if it's not perfect."
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
  }
];

interface HotTakeCardProps {
  hotTake: HotTake;
  index: number;
}

const HotTakeCard: React.FC<HotTakeCardProps> = ({ hotTake, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.02,
        borderColor: 'rgba(var(--neon-purple), 0.8)',
        backgroundColor: 'rgba(var(--darker-bg), 0.7)'
      }}
      className="relative p-6 rounded-lg border border-[rgba(var(--neon-purple),0.3)] bg-[rgba(var(--darker-bg),0.5)] transition-colors duration-300 group hover:shadow-lg hover:shadow-[rgba(var(--neon-purple),0.1)]"
    >
      <motion.div
        className="absolute inset-0 bg-[rgba(var(--neon-purple),0.03)] opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
      />
      
      <motion.h3 
        className="text-xl font-bold mb-4 text-[rgb(var(--neon-purple))] relative"
        whileHover={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {hotTake.title}
      </motion.h3>
      
      <motion.p 
        className="text-[rgb(var(--text-secondary))] group-hover:text-[rgb(var(--text-primary))] transition-colors duration-300 relative"
        initial={{ opacity: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        {hotTake.description}
      </motion.p>
    </motion.div>
  );
};

const HotTakes: React.FC = () => {
  return (
    <Section id="hot-takes" className="py-20">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
          Hot Takes 🔥
        </h2>
        
        <div className="max-w-2xl mx-auto bg-[rgba(var(--darker-bg),0.7)] border border-[rgba(var(--neon-purple),0.2)] rounded-lg p-4">
          <p className="text-[rgb(var(--text-primary))] text-lg italic">
            These are my current takes on entrepreneurship as of January 2025 with little experience, take them with a grain of salt—they&apos;ll probably change every month haha.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {hotTakes.map((hotTake, index) => (
          <HotTakeCard key={hotTake.title} hotTake={hotTake} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default HotTakes; 
