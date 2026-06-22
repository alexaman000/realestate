import { Globe3D, type GlobeMarker } from "./ui/3d-globe";
import { motion } from "framer-motion";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 23.5,
    lng: 80.0,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Rajnandgaon",
  },
  {
    lat: 22.0,
    lng: 78.5,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Durg",
  },
  {
    lat: 21.2,
    lng: 81.3,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Bhilai",
  },
  {
    lat: 19.5,
    lng: 80.0,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Charoda",
  },
  {
    lat: 20.0,
    lng: 83.5,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Kumhari",
  },
  {
    lat: 22.5,
    lng: 83.5,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Raipur",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-24 px-6 md:px-12 lg:px-16 bg-primary text-light relative overflow-hidden">
      {/* Small globe floating in the background/corner */}
      <div className="absolute right-[-20%] md:right-[-10%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] opacity-60 md:opacity-100 pointer-events-none md:pointer-events-auto z-0">
        <div className="absolute inset-0 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>
        <Globe3D
          markers={sampleMarkers}
          config={{
            showAtmosphere: true,
            atmosphereColor: "#D4AF37",
            atmosphereIntensity: 0.3,
            bumpScale: 2,
            autoRotateSpeed: 0.8,
            initialLocation: { lat: 21.2, lng: 81.3, altitude: 2.5 },
            highlightArea: { lat: 21.2, lng: 81.3, size: 0.25, color: "#D4AF37" },
            globeColor: "#0F172A",
            wireframeColor: "#D4AF37",
            backgroundColor: null,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Our Service Network
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6 leading-tight"
          >
            Transforming Chhattisgarh's Skyline
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed mb-8"
          >
            From modern luxury villas to robust commercial complexes, our engineering excellence covers the entire region. We bring world-class construction standards, free 3D design, and transparent pricing directly to your city.
          </motion.p>
          
          {/* Attractive marketing points */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Bhilai & Durg", desc: "Our headquarters and primary operational hubs for rapid deployment." },
              { title: "Raipur", desc: "Delivering premium residential and commercial projects in the capital." },
              { title: "Charoda & Kumhari", desc: "Expanding urban infrastructure with top-tier material supply." },
              { title: "Rajnandgaon", desc: "Trusted building contractors for custom home architecture." }
            ].map((area, idx) => (
              <motion.div 
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + (idx * 0.1) }}
                className="liquid-glass border border-white/10 p-5 rounded-xl hover:border-gold/50 transition-colors"
              >
                <h4 className="text-gold font-semibold text-lg mb-2">{area.title}</h4>
                <p className="text-sm text-gray-400">{area.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <p className="text-sm text-gray-400 italic">
              * Active projects running across all mentioned locations. Need construction in a nearby city? Let's talk!
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
