'use client';

import { motion } from 'framer-motion';
import Section from './Section';

interface ExperienceItem {
  title: string;
  organization: string;
  description: string;
  achievements?: string[];
  date: string;
  link?: string;
  links?: {
    [key: string]: string;
  };
  tags?: string[];
}

const currentExperiences: ExperienceItem[] = [
  {
    title: "SEO Intern",
    organization: "Armilla AI (YC-backed)",
    description: "Working with the world&apos;s first AI insurance startup, Armilla AI, a Y Combinator-backed company that has raised over $5 million. Focusing on SEO optimization and content strategy.",
    date: "December 2024 - Present",
    link: "https://armilla.ai",
    tags: ["SEO", "AI", "Insurance Tech", "YC"]
  },
  {
    title: "Marketing & Dev Intern",
    organization: "Built for Impact",
    description: "Outreached to over 10,000+ students in under two weeks for pilot launch. Currently working with the team to scale the platform.",
    date: "November 2024 - Present",
    link: "https://builtforimpact.ca/",
    tags: ["Marketing", "Development", "Education"]
  },
  {
    title: "CoVentur",
    organization: "Founder",
    description: "MVP completed, launch coming soon.",
    date: "January 2025 - Present",
    tags: ["Startup", "MVP", "Entrepreneurship"]
  },
  {
    title: "TKS Velocity Program",
    organization: "Top 7% of Students",
    description: "Selected for the world&apos;s top global accelerator for teens (10-15% acceptance rate from 42,000+ applicants). Part of Velocity, representing the top ~7% of TKS students. Focused on emerging tech, solving global problems through hands-on projects, and developing exponential growth mindset.",
    achievements: [
      "Mastering unstructured problem solving through first-principle thinking",
      "Receiving advanced training with higher standards",
      "Building solutions for real-world problems",
      "Developing skills in emerging technologies"
    ],
    date: "November 2024 - Present",
    tags: ["Innovation", "Leadership", "Emerging Tech"]
  },
  {
    title: "AI & Marketing Consultant",
    organization: "Lost Kids Find Hope + Others",
    description: "Developing AI tools for social media analytics & marketing growth. Working with SMEs (>1k monthly users) to build portfolio of proven results.",
    achievements: [
      "Creating AI tools for social media performance analysis",
      "Consulting on marketing strategies for growth optimization",
      "Working with multiple SMEs including Lost Kids Find Hope",
      "Gaining hands-on experience through action"
    ],
    date: "January 2025 - Present",
    link: "https://www.instagram.com/lostkidsfindhope/",
    tags: ["AI", "Marketing", "Social Media", "Consulting"]
  }
];

const pastExperiences: ExperienceItem[] = [
  {
    title: "CostCulture GPT",
    organization: "AI Project",
    description: "AI-powered shopping assistant focused on sustainability and ethics in fashion.",
    achievements: [
      "One of the first GPTs available on OpenAI&apos;s GPT Store",
      "Matches clothing to users&apos; style while considering ethical values",
      "Provides insights on brands&apos; ethical practices and environmental impact",
      "Promotes transparency and responsible purchasing in fashion"
    ],
    date: "November 2023",
    link: "https://chatgpt.com/g/g-2Z3cr1snk-costculture",
    tags: ["AI", "GPT", "Sustainability", "Fashion Tech", "Ethics"]
  },
  {
    title: "Twitter Sentiment Analyzer",
    organization: "AI Project",
    description: "Python-powered application for real-time Twitter sentiment analysis and visualization.",
    achievements: [
      "Built with Python, Tweepy, and TextBlob for sentiment analysis",
      "Real-time processing of up to 100 tweets per query",
      "Advanced data cleaning and preprocessing pipeline",
      "Interactive visualization of sentiment distributions"
    ],
    date: "December 2024",
    link: "https://github.com/noahcom-star/TwitSentimentTracker",
    tags: ["Python", "NLP", "Data Visualization", "API Integration"]
  },
  {
    title: "Stock Sentiment Analysis Tool",
    organization: "Personal Project",
    description: "Advanced sentiment analysis tool for stock market news using VADER NLP.",
    achievements: [
      "Real-time data fetching from Finviz for latest stock news",
      "VADER sentiment analysis for positive/negative market sentiment",
      "Interactive visualization of sentiment trends over time",
      "Configurable analysis parameters and stock selection",
      "Built with pandas, NLTK, and matplotlib for robust analysis"
    ],
    date: "November 2024",
    link: "https://github.com/noahcom-star/Stock-Sentiment-Analysis",
    tags: ["AI", "NLP", "Finance", "Data Analysis", "Python"]
  },
  {
    title: "IKEA Global Pitch Competition",
    organization: "Semi-Finalist",
    description: "Selected as 1 of 6 Toronto teams and 1 of 19 teams globally being reviewed by IKEA executives, competing against over 4000+ TKS students worldwide.",
    achievements: [
      "Developed comprehensive Gen Z marketing strategy",
      "Created interactive prototype for new IKEA experience",
      "Selected from 4000+ innovative TKS students globally",
      "Presented innovative solutions to IKEA&apos;s executive team"
    ],
    date: "December 2024",
    links: {
      prototype: "https://preview.tempolabs.ai/c3b04fd8-2ac9-406a-80be-36af7fc54793",
      pitch: "https://drive.google.com/file/d/17DmlJQgzW35Dkhj45LldZRpXRH-i91zO/view?usp=sharing"
    },
    tags: ["Marketing", "Strategy", "Innovation"]
  },
  {
    title: "SHAD Western Design Project",
    organization: "Winner 🏆",
    description: "Led a team of 5 to victory in Canada&apos;s top high school innovation program, competing against 100+ students.",
    achievements: [
      "Placed first among 100+ competing students",
      "Led team of 5 to develop innovative sustainability solution",
      "Collaborated with Western Ivey & Morrissette Accelerator",
      "Presented winning pitch to panel of industry experts"
    ],
    date: "July 2024",
    tags: ["Innovation", "Leadership", "Design", "Sustainability"]
  },
  {
    title: "MovItiative",
    organization: "Charity Founder",
    description: "Founded and led a successful charity initiative because the people I loved were battling cancer and I couldn&apos;t handle not doing anything.",
    achievements: [
      "Raised over $1000+ in final year for cancer research",
      "Organized school-wide Movember Mondays & sports tournaments",
      "Guest speaker for entrepreneurship programs"
    ],
    date: "November 2019 - November 2024",
    tags: ["Charity", "Leadership", "Public Speaking"]
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative p-8 rounded-lg border border-[rgba(var(--neon-blue),0.2)] bg-[rgba(var(--darker-bg),0.5)] backdrop-blur-sm hover:border-[rgba(var(--neon-blue),0.5)] card-hover card-glow group"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[rgba(var(--neon-blue),0.03)] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out rounded-lg" />
      
      <div className="relative z-10">
        <div className="flex flex-col gap-2 mb-6">
          <motion.h3 
            className="text-2xl font-bold gradient-text"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {item.title}
          </motion.h3>
          <div className="flex justify-between items-center text-[rgb(var(--text-secondary))]">
            <p className="text-lg">{item.organization}</p>
            <span className="text-sm">{item.date}</span>
          </div>
        </div>
        
        <p className="mb-6 text-[rgb(var(--text-secondary))] leading-relaxed">{item.description}</p>
        
        {item.achievements && (
          <ul className="mb-6 space-y-3">
            {item.achievements.map((achievement, i) => (
              <motion.li 
                key={i} 
                className="flex items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="text-[rgb(var(--neon-blue))] mr-2">•</span>
                <span className="text-[rgb(var(--text-secondary))]">{achievement}</span>
              </motion.li>
            ))}
          </ul>
        )}
        
        {item.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {item.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="px-3 py-1 text-sm rounded-full bg-[rgba(var(--neon-purple),0.1)] text-[rgb(var(--neon-purple))] border border-[rgba(var(--neon-purple),0.2)] hover:border-[rgba(var(--neon-purple),0.5)] transition-all duration-300 ease-in-out"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        )}
        
        {item.link && (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-[rgb(var(--neon-blue))] hover-glow"
            data-hover="true"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Visit Website →
          </motion.a>
        )}

        {item.links && (
          <div className="flex gap-4">
            {Object.entries(item.links).map(([label, url]) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[rgb(var(--neon-blue))] hover-glow"
                data-hover="true"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                View {label} →
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <>
      <Section id="current" className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 gradient-text text-center glowing-header"
          >
            Currently Working On
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* First 4 experiences in a 2x2 grid */}
            {currentExperiences.slice(0, 4).map((experience, index) => (
              <ExperienceCard key={experience.title} item={experience} index={index} />
            ))}
          </div>
          
          {/* Last experience centered */}
          <div className="mt-8 md:w-1/2 md:mx-auto">
            <ExperienceCard 
              item={currentExperiences[4]} 
              index={4}
            />
          </div>
        </div>
      </Section>

      <Section id="past" className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-16 neon-purple text-center glowing-header-purple"
          >
            Past Experience & Projects
          </motion.h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            {pastExperiences.map((experience, index) => (
              <ExperienceCard key={experience.title} item={experience} index={index} />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
} 
