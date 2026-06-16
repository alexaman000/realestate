import { motion } from 'framer-motion';
import { CheckCircle, Gift, Building2, Home, Star } from 'lucide-react';

const pricing = [
  {
    title: 'Material Construction',
    price: '₹899',
    unit: 'per sq. ft.',
    icon: <Building2 className="w-8 h-8 text-gold" />,
    delay: 0.1,
  },
  {
    title: 'Complete Construction',
    price: '₹1,399',
    unit: 'per sq. ft.',
    icon: <Home className="w-8 h-8 text-gold" />,
    delay: 0.2,
    popular: true,
  },
  {
    title: 'Luxury Construction',
    price: '₹1,599',
    unit: 'per sq. ft.',
    icon: <Star className="w-8 h-8 text-gold" />,
    delay: 0.3,
  },
];

const freebies1 = ['Borewell', 'Septic Tank', 'Modular Kitchen'];
const freebies2 = ['False Ceiling', 'Home Layout Design', '3D Design', 'Home Elevation', 'Footing Design', 'Electronic Items'];
const features = ['Strong RCC Structure', 'Experienced Engineers', 'Superior Quality', 'On-Time Delivery'];

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
            Then place your trust in Rudra Engineers
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif max-w-4xl mx-auto leading-tight"
          >
            From foundation to completion, our experienced engineers and architects supervise every project with precision and care.
          </motion.h3>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricing.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tier.delay }}
              className={`relative liquid-glass rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2 ${tier.popular ? 'border-2 border-gold/50 shadow-[0_0_30px_rgba(212,175,55,0.15)]' : 'border border-white/10'}`}
            >
              {tier.popular && (
                <div className="absolute top-6 right-6 bg-gold text-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6 inline-block p-4 rounded-xl bg-primary/50 text-gold">
                {tier.icon}
              </div>
              <h4 className="text-2xl font-serif mb-2 text-white">{tier.title}</h4>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gold">{tier.price}</span>
                <span className="text-gray-400 ml-2">{tier.unit}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Freebies & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Free Add-ons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="liquid-glass border border-white/10 rounded-2xl p-8 lg:p-10"
          >
            <div className="flex items-center gap-4 mb-6">
              <Gift className="w-8 h-8 text-gold" />
              <h3 className="text-2xl font-serif text-white">Exclusive Free Inclusions</h3>
            </div>
            
            <p className="text-gray-300 mb-6 font-medium">Along with this, get FREE:</p>
            <div className="flex flex-wrap gap-3 mb-8">
              {freebies1.map((item, i) => (
                <span key={i} className="bg-primary/50 text-gold border border-gold/20 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                  {item}
                </span>
              ))}
            </div>

            <p className="text-gray-300 mb-6 font-medium">Building your dream home has now become even easier. Also get FREE:</p>
            <div className="flex flex-wrap gap-3">
              {freebies2.map((item, i) => (
                <span key={i} className="bg-primary/50 text-white border border-white/10 px-4 py-2 rounded-lg text-sm font-medium shadow-sm">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-3xl font-serif text-white mb-8">Enjoy:</h3>
            <div className="space-y-6">
              {features.map((feature, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-gold" />
                  </div>
                  <span className="text-xl text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
            <div className="mt-12 p-6 rounded-xl border border-gold/30 bg-gold/5 inline-block self-start">
              <p className="text-2xl font-serif text-gold font-medium">That's what defines Rudra Engineers.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
