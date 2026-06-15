import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative h-[600px] rounded-2xl overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000" 
            alt="Construction Engineers at work" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/20 mix-blend-multiply"></div>
          
          <div className="absolute bottom-8 left-8 right-8 p-8 liquid-glass rounded-xl border border-white/10">
            <h3 className="text-3xl font-serif text-gold mb-2">25+</h3>
            <p className="text-gray-300">Years of Building Excellence</p>
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-sm font-semibold tracking-wider text-gold uppercase mb-4">About Us</h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
            Building structures that stand strong for generations.
          </h3>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Rudra Construction Engineers delivers high-quality residential, commercial and engineering solutions with a commitment to quality, safety and innovation. Our mission is to create structures that stand strong for generations.
          </p>

          {/* Animated Counters */}
          <div className="grid grid-cols-2 gap-8">
            <div>
              <div className="text-4xl font-serif text-white mb-2">100+</div>
              <div className="text-sm text-gray-400">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-white mb-2">50+</div>
              <div className="text-sm text-gray-400">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div>
              <div className="text-4xl font-serif text-white mb-2">Expert</div>
              <div className="text-sm text-gray-400">Engineers & Staff</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
