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
    description: "AI won&apos;t take your job—someone using AI better than you will."
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
    description: "If you&apos;re not slightly embarrassed by what you built a year ago, you&apos;re not growing fast enough."
  },
  {
    title: "On Success",
    description: "Most people want a &apos;blueprint for success,&apos; but real success is just figuring things out as you go."
  },
  {
    title: "On VC Funding",
    description: "Raising VC money isn&apos;t an achievement—it&apos;s a liability. The real flex is revenue."
  },
  {
    title: "On Work-Life Balance",
    description: "&apos;Work-life balance&apos; is a lie—either you&apos;re obsessed, or you haven&apos;t found your passion yet."
  },
  {
    title: "On Entrepreneurship",
    description: "Nobody knows what they&apos;re doing in entrepreneurship, it&apos;s all uncharted and what separates successful founders vs unsuccessful is their willingness to work in the unknown."
  },
  {
    title: "On Uncertainty",
    description: "If you want to become a successful entrepreneur, you need to become comfortable with handling uncertainty, and making decisions without knowing what&apos;s behind the door."
  },
  {
    title: "Decision Making",
    description: "The best entrepreneurs aren&apos;t the ones who know everything—they&apos;re the ones comfortable with knowing nothing and making decisions without knowing what&apos;s behind the door."
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
    <Section id="hottakes" className="relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 neon-purple text-center glowing-header-purple"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Hot Takes 🔥
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[rgb(var(--text-secondary))] text-center mb-16 text-lg"
        >
          These are my opinions as of January 2025 with very little experience so take it as a grain of salt. Chances are these will change every month haha.
        </motion.p>
        
        <div className="grid gap-8 md:grid-cols-2">
          {hotTakes.map((hotTake, index) => (
            <HotTakeCard key={hotTake.title} hotTake={hotTake} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
} 
