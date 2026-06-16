import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Share2, Facebook } from 'lucide-react';

export function ContactFooter() {
  return (
    <footer id="contact" className="bg-primary text-light relative pt-24">
      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 mb-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-8"
          >
            Start Your Project With Us
          </motion.h3>

          <div className="space-y-6 mb-12">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-medium text-white mb-1">Location</h4>
                <p className="text-gray-400">Near BM Shah Hospital, Shastri Nagar,<br />Shastri Chowk, Bhilai,<br />Chhattisgarh 490023, India</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Clock className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1">Business Hours</h4>
                <p className="text-gray-400">Open 24×7</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-gold flex-shrink-0" />
              <div>
                <h4 className="font-medium text-white mb-1">Phone</h4>
                <p className="text-gray-400">+91 91311 19250</p>
              </div>
            </div>
          </div>
          
          <a href="https://instagram.com/rudraconstruction.engineers" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            Follow us on Instagram
          </a>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="liquid-glass border border-white/10 p-8 rounded-2xl"
        >
          <form className="space-y-4" onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget);
            const data = Object.fromEntries(formData);
            const text = `Hello, I would like to inquire about a project.\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nProject Type: ${data.projectType}\nMessage: ${data.message}`;
            window.open(`https://wa.me/919131119250?text=${encodeURIComponent(text)}`, '_blank');
          }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input name="name" required type="text" className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone</label>
                <input name="phone" required type="tel" className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Your Phone" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input name="email" required type="email" className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Project Type</label>
                <select name="projectType" className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-gray-400 focus:outline-none focus:border-gold transition-colors appearance-none">
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Message</label>
              <textarea name="message" required rows={4} className="w-full bg-primary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-gold transition-colors" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="submit" className="w-full bg-gold text-primary font-semibold py-4 rounded-lg hover:bg-yellow-500 transition-colors">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>

      {/* Map */}
      <div className="w-full h-96 relative opacity-80 hover:opacity-100 transition-opacity">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118928.6923180556!2d81.25816912163914!3d21.19692429934273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2923595eb2bbef%3A0xc54030616b7e51c8!2sBhilai%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1718433240000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Rudra Engineers Location"
        ></iframe>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <img src="https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png" alt="Rudra Engineers Logo" className="w-10 h-10 object-contain rounded-lg bg-white/10 p-1" />
            <div className="text-2xl font-serif text-white">Rudra Engineers</div>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-gold transition-colors">About</a>
            <a href="#services" className="hover:text-gold transition-colors">Services</a>
            <a href="#projects" className="hover:text-gold transition-colors">Projects</a>
          </div>
          <div className="flex gap-4">
            <a href="https://instagram.com/rudraconstruction.engineers" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#bc1888] hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://www.facebook.com/1159915317208516" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#1877F2] hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <button onClick={() => {
              if (navigator.share) {
                navigator.share({ title: 'Rudra Engineers', url: window.location.href });
              } else {
                navigator.clipboard.writeText(window.location.href);
                alert('Link copied to clipboard!');
              }
            }} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-gold hover:text-primary transition-all">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div className="text-center py-6 border-t border-white/5 text-sm text-gray-500">
          © {new Date().getFullYear()} Rudra Engineers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
