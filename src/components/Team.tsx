import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'BS Chandel',
    role: 'Owner, Rudra Construction',
    image: '/images/bs_chandel.jpeg'
  },
  {
    name: 'Jitesh Chandel',
    role: 'Owner, Rudra Engineers',
    image: '/images/jitesh_chandel.jpeg'
  },
  {
    name: 'Sushila Chandel',
    role: 'Owner, Gauri Builders',
    image: null
  }
];

export function Team() {
  return (
    <section id="team" className="py-24 px-6 md:px-12 lg:px-16 bg-primary text-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Our Leadership
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif"
          >
            Meet The Owners
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="liquid-glass border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center group hover:border-gold/50 transition-colors"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white/10 group-hover:border-gold transition-colors bg-white/5 flex items-center justify-center">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                ) : (
                  <span className="text-6xl font-serif text-white/50">{member.name.charAt(0)}</span>
                )}
              </div>
              <h4 className="text-2xl font-serif text-white mb-2">{member.name}</h4>
              <p className="text-gold font-medium">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
