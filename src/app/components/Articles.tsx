'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface Article {
  title: string;
  description: string;
  date: string;
  link: string;
}

const articles: Article[] = [
  {
    title: "OpenAI's Strawberry",
    description: "An analysis of OpenAI's latest developments and their impact on the AI landscape.",
    date: "October 2023",
    link: "#",
  },
  {
    title: "Can AI Predict the Markets next move",
    description: "Exploring the intersection of artificial intelligence and market prediction.",
    date: "November 2024",
    link: "#",
  },
  {
    title: "Twitter",
    description: "Insights into Twitter's evolution and its impact on digital communication.",
    date: "December 2024",
    link: "#",
  },
];

function ArticleCard({ article, index }: { article: Article; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-6 rounded-lg border border-[rgba(var(--neon-blue),0.2)] bg-[rgba(var(--darker-bg),0.5)] backdrop-blur-sm hover:border-[rgba(var(--neon-blue),0.5)] transition-all group"
    >
      <div className="absolute inset-0 bg-[rgba(var(--neon-blue),0.03)] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
      
      <div className="relative z-10">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold gradient-text">{article.title}</h3>
          <span className="text-sm text-[rgb(var(--text-secondary))]">{article.date}</span>
        </div>
        
        <p className="text-[rgb(var(--text-secondary))] mb-4">{article.description}</p>
        
        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-[rgb(var(--neon-blue))] hover-glow"
          data-hover="true"
        >
          Read More →
        </a>
      </div>
    </motion.div>
  );
}

export default function Articles() {
  return (
    <Section id="articles" className="relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 gradient-text text-center glowing-header"
        >
          Featured Articles
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <ArticleCard key={article.title} article={article} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
} 