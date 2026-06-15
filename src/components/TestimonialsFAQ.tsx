import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronDown, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Homeowner',
    content: 'Rudra Construction transformed our vision into reality. The luxury villa they built for us exceeded all expectations in terms of quality and timely delivery.',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'Corporate Client',
    content: 'Their structural engineering expertise is unmatched. They handled our commercial complex project with utmost professionalism and safety standards.',
    rating: 5,
  }
];

const faqs = [
  {
    question: 'What services do you provide?',
    answer: 'We provide end-to-end construction solutions including residential buildings, commercial projects, luxury villas, structural engineering, and property development.'
  },
  {
    question: 'How long does construction take?',
    answer: 'Timelines vary based on project scale and complexity. A standard residential home typically takes 8-12 months, while larger commercial projects are scheduled individually.'
  },
  {
    question: 'Do you provide structural engineering?',
    answer: 'Yes, we have an in-house team of expert structural engineers who handle building design, renovations, and comprehensive structural planning.'
  },
  {
    question: 'Do you work on commercial projects?',
    answer: 'Absolutely. We have extensive experience in developing office buildings, retail spaces, and large-scale commercial complexes.'
  }
];

export function TestimonialsFAQ() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 md:px-12 lg:px-16 bg-secondary text-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Testimonials */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-12"
          >
            Client Stories
          </motion.h3>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="liquid-glass border border-white/10 p-8 rounded-2xl relative"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-gold text-sm">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            FAQ
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-12"
          >
            Common Questions
          </motion.h3>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-primary/30 hover:bg-primary/50 transition-colors text-left"
                >
                  <span className="font-medium text-white">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-gold transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="bg-primary/20"
                    >
                      <div className="px-6 py-4 text-gray-300">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
