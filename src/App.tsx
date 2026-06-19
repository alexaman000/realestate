import { FadeIn } from './components/FadeIn';
import { AnimatedHeading } from './components/AnimatedHeading';
import { About } from './components/About';
import { Services } from './components/Services';
import { Locations } from './components/Locations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { TestimonialsFAQ } from './components/TestimonialsFAQ';
import { Team } from './components/Team';
import { ContactFooter } from './components/ContactFooter';

function App() {
  return (
    <div className="bg-primary font-sans text-light overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative min-h-[100dvh] w-full">
        {/* Video Background with Slow Zoom */}
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0 bg-black">
          <style>{`
            @keyframes slowZoom {
              0% { transform: scale(1); }
              100% { transform: scale(1.15); }
            }
          `}</style>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-60"
            style={{ animation: 'slowZoom 30s ease-in-out infinite alternate' }}
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
          />
        </div>

        {/* Main Content Overlay */}
        <div className="relative z-10 min-h-[100dvh] flex flex-col">
          {/* Navbar */}
          <div className="px-6 md:px-12 lg:px-16 pt-6">
            <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
              {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <img src="https://i.ibb.co/QyqTmSL/Chat-GPT-Image-Jun-16-2026-12-29-31-PM.png" alt="Rudra Engineers Logo" className="w-10 h-10 object-contain rounded-lg bg-white/10 p-1" />
              <div className="text-xl font-semibold tracking-tight text-white font-serif">
                Rudra Engineers
              </div>
            </div>
              
              {/* Center: Links */}
              <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#locations" className="hover:text-white transition-colors">Locations</a>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
                <a href="#gallery" className="hover:text-white transition-colors">Gallery</a>
              </div>

              {/* Right: Button */}
            <a href="tel:+919131119250" className="hidden md:inline-block bg-gold text-primary px-6 py-2 rounded-lg text-sm font-medium hover:bg-yellow-500 transition-colors">
              Book Consultation
            </a>
            </nav>
          </div>

          {/* Hero Content */}
          <div className="px-6 md:px-12 lg:px-16 flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
              {/* Left Column */}
              <div className="max-w-3xl">
                <AnimatedHeading 
                  text="Building Tomorrow's&#10;Landmarks Today" 
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal mb-4 font-serif"
                  initialDelay={200}
                />
                
                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-8 max-w-xl">
                    Premium Construction, Engineering & Real Estate Solutions in Bhilai.
                  </p>
                </FadeIn>

                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <a href="tel:+919131119250" className="bg-gold text-primary px-8 py-3 rounded-lg font-medium hover:bg-yellow-500 transition-colors inline-block">
                      Book Consultation
                    </a>
                    <a href="#services" className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all duration-300 inline-block">
                      Our Services
                    </a>
                  </div>
                </FadeIn>
              </div>

              {/* Right Column */}
              <div className="flex items-end justify-start lg:justify-end mt-12 lg:mt-0">
                <FadeIn delay={1400} duration={1000}>
                  <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                    <p className="text-lg md:text-xl lg:text-2xl font-light text-white">
                      Construction. Engineering. Real Estate.
                    </p>
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Services />
      <Locations />
      <Team />
      <WhyChooseUs />
      <Gallery />
      <TestimonialsFAQ />
      <ContactFooter />

    </div>
  );
}

export default App;
