import { motion } from 'framer-motion';
import { Building2, HardHat, Landmark } from 'lucide-react';

const services = [
  {
    title: 'Construction',
    icon: <Building2 className="w-8 h-8 text-gold" />,
    items: ['Residential Buildings', 'Commercial Projects', 'Luxury Villas'],
    delay: 0.1,
  },
  {
    title: 'Structural Engineering',
    icon: <HardHat className="w-8 h-8 text-gold" />,
    items: ['Building Design', 'Renovation', 'Interior Solutions'],
    delay: 0.2,
  },
  {
    title: 'Property Development',
    icon: <Landmark className="w-8 h-8 text-gold" />,
    items: ['Site Planning', 'Project Management', 'Architecture Consultation'],
    delay: 0.3,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-12 lg:px-16 bg-secondary text-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif"
          >
            Premium Engineering Solutions
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: service.delay }}
              className="group relative liquid-glass border border-white/10 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/50 group-hover:bg-primary transition-colors">
                {service.icon}
              </div>
              <h4 className="text-2xl font-serif mb-4 text-white">{service.title}</h4>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
