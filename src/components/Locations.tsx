import { Globe3D, type GlobeMarker } from "./ui/3d-globe";
import { motion } from "framer-motion";

const sampleMarkers: GlobeMarker[] = [
  {
    lat: 21.1904,
    lng: 81.2849,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Durg",
  },
  {
    lat: 21.1938,
    lng: 81.3509,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Bhilai",
  },
  {
    lat: 21.2514,
    lng: 81.6296,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Raipur",
  },
  {
    lat: 21.2167,
    lng: 81.4333,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Charoda",
  },
  {
    lat: 21.1000,
    lng: 81.0333,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Rajnandgaon",
  },
  {
    lat: 21.2667,
    lng: 81.5167,
    src: "https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png",
    label: "Kumhari",
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-24 px-6 md:px-12 lg:px-16 bg-primary text-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 lg:pr-8 text-center lg:text-left z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold tracking-wider text-gold uppercase mb-4"
          >
            Our Network
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif mb-6"
          >
            Available Locations
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Our services are available in <strong className="text-white font-medium">Durg, Bhilai, Raipur, Charoda, Rajnandgaon, Kumhari</strong>, and all nearby areas. We bring our premium engineering solutions right to your doorstep.
          </motion.p>
        </div>
        <div className="flex-1 w-full relative z-0 h-[500px]">
          <div className="absolute inset-0 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
          <Globe3D
            markers={sampleMarkers}
            config={{
              showAtmosphere: true,
              atmosphereColor: "#D4AF37",
              atmosphereIntensity: 0.3,
              bumpScale: 2,
              autoRotateSpeed: 0.5,
              initialLocation: { lat: 21.2, lng: 81.3, altitude: 2.2 },
              highlightArea: { lat: 21.2, lng: 81.3, size: 0.25, color: "#D4AF37" },
              globeColor: "#0F172A",
              wireframeColor: "#D4AF37",
              backgroundColor: null,
            }}
          />
        </div>
      </div>
    </section>
  );
}
