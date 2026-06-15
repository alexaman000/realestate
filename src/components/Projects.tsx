import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    name: 'Rudra Heights',
    location: 'Shastri Nagar',
    status: 'Completed',
    area: '150,000 sq ft',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
    category: 'Residential',
  },
  {
    name: 'Business Tower',
    location: 'Bhilai Central',
    status: 'In Progress',
    area: '200,000 sq ft',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
    category: 'Commercial',
  },
  {
    name: 'Luxury Villas',
    location: 'Green Valley',
    status: 'Completed',
    area: '50,000 sq ft',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000',
    category: 'Luxury Villas',
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
            >
              Featured Projects
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif"
            >
              Our Masterpieces
            </motion.h3>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-gold hover:text-white transition-colors border-b border-gold hover:border-white pb-1"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group rounded-2xl overflow-hidden bg-secondary border border-white/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-gold px-3 py-1 rounded-full text-xs font-semibold">
                  {project.category}
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-2xl font-serif mb-2">{project.name}</h4>
                <div className="space-y-2 text-sm text-gray-400 mb-6">
                  <p>Location: <span className="text-gray-200">{project.location}</span></p>
                  <p>Status: <span className="text-gray-200">{project.status}</span></p>
                  <p>Area: <span className="text-gray-200">{project.area}</span></p>
                </div>
                <button className="w-full py-3 rounded-lg border border-white/20 hover:bg-gold hover:text-primary hover:border-gold transition-all duration-300 font-medium">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
