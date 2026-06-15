import { motion } from 'framer-motion';
import { CheckCircle2, CircleDot } from 'lucide-react';

const reasons = [
  'Expert Engineers',
  'Premium Materials',
  'On-Time Delivery',
  'Transparent Pricing',
  'Modern Technology',
  'Customer Satisfaction',
  'Government Approved Practices',
  'Safety Standards'
];

const processSteps = [
  'Consultation',
  'Planning',
  'Design',
  'Construction',
  'Quality Inspection',
  'Delivery'
];

export function WhyChooseUs() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-secondary text-light overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Why Choose Us */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
            >
              Why Choose Us
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-12"
            >
              Excellence in Every Detail
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-primary/30 p-4 rounded-xl border border-white/5 hover:border-gold/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                  <span className="text-gray-200 text-sm font-medium">{reason}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Construction Process */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
            >
              Our Workflow
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-12"
            >
              Construction Process
            </motion.h3>

            <div className="relative pl-8 border-l-2 border-gold/20 space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] bg-secondary p-1 rounded-full">
                    <CircleDot className="w-6 h-6 text-gold" />
                  </div>
                  <div className="liquid-glass border border-white/5 p-6 rounded-xl">
                    <h4 className="text-xl font-serif text-white">{step}</h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
