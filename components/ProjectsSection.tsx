'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Headline } from './Headline';

const projects = [
  {
    id: 1,
    title: 'ASML',
    description: 'The Invisible Monopoly of Technology',
    image: '/asml.png',
  },
  {
    id: 2,
    title: 'Bitcoin',
    description: 'The Decentralized Store of Value',
    image: '/bitcoin.jpg',
  },
  {
    id: 3,
    title: 'United Health',
    description: 'Healthcare Gigant at 60% Discount',
    image: '/unitedHealthTest.png',
  },
  {
    id: 4,
    title: 'Chinese Tech',
    description: 'The Growth Engine Behind China’s Modern Economy',
    image: '/chinaTech.jpg',
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto ">
      <Headline headline="Research" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 1, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: project.id * 0.1 }}
            className="border select-none group relative aspect-video bg-white dark:bg-gradient-to-br dark:from-purple-900/50 dark:to-blue-900/50 rounded-xl overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/90 group-hover:to-black/95 transition-colors duration-300" />
            <div className="absolute inset-0 p-6 flex flex-col justify-end">
              <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
              <p className="text-gray-200 mb-4 line-clamp-2">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
