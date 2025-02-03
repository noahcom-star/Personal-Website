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
    title: "AI Will Augment, Not Replace Entrepreneurs",
    description: "AI tools are incredible force multipliers, but the core skills of understanding users and solving real problems will remain uniquely human."
  },
  {
    title: "Community > Marketing",
    description: "Building a genuine community around your product is more valuable than any marketing campaign. Word of mouth from passionate users is unbeatable."
  },
  {
    title: "Remote Work is the Future",
    description: "The ability to hire talent globally and build asynchronous workflows is a massive competitive advantage for modern startups."
  },
  {
    title: "Focus on Revenue, Not Fundraising",
    description: "While VC funding can accelerate growth, focusing on sustainable revenue from day one builds stronger businesses and keeps you independent."
  },
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
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative p-6 rounded-lg border border-[rgba(var(--neon-purple),0.3)] bg-[rgba(var(--darker-bg),0.5)]"
    >
      <h3 className="text-xl font-bold mb-4 text-[rgb(var(--neon-purple))]">
        {hotTake.title}
      </h3>
      <p className="text-[rgb(var(--text-secondary))]">
        {hotTake.description}
      </p>
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
            These are my current takes on entrepreneurship as of January 2025. With limited real-world experience, take them with a grain of salt—they'll probably change every month! 😅
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
