'use client';

import { motion } from 'framer-motion';
import Section from './Section';

const articles = [
  {
    title: "OpenAI's 'Strawberry' is here, and this one's a thinker...",
    link: "https://medium.com/@noahsaur/openais-strawberry-is-here-and-this-one-s-a-thinker-a5f23b585305",
    date: "2024"
  },
  {
    title: "Can AI Predict the Market's Next Move?",
    link: "https://medium.com/@noahsaur/can-ai-predict-the-markets-next-move-39b4e952fe8f",
    date: "2023"
  },
  {
    title: "What If You Could Uncover the Emotions Behind Every Tweet?",
    link: "https://medium.com/@noahsaur/what-if-you-could-uncover-the-emotions-behind-every-tweet-b9e8bce28875",
    date: "2023"
  }
];

export default function Content() {
  return (
    <Section id="content" className="relative">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 gradient-text text-center"
        >
          Featured Articles
        </motion.h2>

        <div className="grid gap-6 md:grid-cols-3">
          {articles.map((article, index) => (
            <motion.a
              key={article.title}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg border border-[rgba(var(--neon-blue),0.2)] bg-[rgba(var(--darker-bg),0.5)] backdrop-blur-sm hover:border-[rgba(var(--neon-blue),0.5)] transition-all group relative overflow-hidden"
              data-hover="true"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-[rgba(var(--neon-blue),0.03)] opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-2 gradient-text">{article.title}</h3>
                <p className="text-[rgb(var(--text-secondary))]">{article.date}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </Section>
  );
} 