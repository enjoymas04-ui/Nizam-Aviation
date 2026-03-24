import { motion } from "motion/react";
import { 
  Wrench, 
  ShieldCheck, 
  Clock, 
  Globe, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin,
  Settings,
  Zap,
  Award,
  ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Capabilities", href: "#capabilities" },
    { name: "Certifications", href: "#certifications" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-lg border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FF6B35] flex items-center justify-center rounded-sm rotate-45">
            <Settings className="text-white -rotate-45 w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase">Nizam <span className="text-[#FF6B35]">Aviation</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-[#FF6B35] transition-colors uppercase tracking-widest">
              {link.name}
            </a>
          ))}
          <button className="bg-[#FF6B35] hover:bg-orange-600 px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all">
            Request Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-black border-b border-white/10 p-6 md:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                {link.name}
              </a>
            ))}
            <button className="bg-[#FF6B35] w-full py-3 font-bold uppercase tracking-widest mt-4">
              Request Quote
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden technical-grid">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80&w=2000" 
          alt="Helicopter Hangar" 
          className="w-full h-full object-cover opacity-50"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-[#FF6B35]" />
            <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-[0.3em]">Precision Engineering</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-[0.9] mb-8 uppercase tracking-tighter">
            Precision Helicopter <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Maintenance You Can Trust</span>
          </h1>
          <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed max-w-lg">
            Southeast Asia's premier MRO partner. Certified expertise in maintenance, repair, and full-scale refurbishment for global aviation clients.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#FF6B35] hover:bg-orange-600 px-8 py-4 font-bold uppercase tracking-widest text-sm flex items-center gap-2 group transition-all">
              Request a Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white/5 px-8 py-4 font-bold uppercase tracking-widest text-sm transition-all">
              Contact Engineers
            </button>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats Overlay */}
      <div className="absolute bottom-0 right-0 w-full md:w-auto glass-panel p-8 md:p-12 z-20">
        <div className="grid grid-cols-2 md:flex gap-8 md:gap-16">
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1 font-mono">15+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Years Experience</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1 font-mono">250+</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Aircraft Serviced</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#FF6B35] mb-1 font-mono">100%</div>
            <div className="text-[10px] uppercase tracking-widest text-gray-400">Safety Record</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Helicopter Maintenance",
      description: "Comprehensive line and base maintenance services ensuring peak operational readiness and safety compliance.",
      icon: <Wrench className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Repair & Overhaul (MRO)",
      description: "Specialized component repair and engine overhaul services performed by certified master technicians.",
      icon: <Settings className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Refurbishment & Upgrades",
      description: "Complete interior and exterior refurbishment, including advanced avionics suite upgrades and structural modifications.",
      icon: <Zap className="w-8 h-8" />,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Our Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Core MRO Solutions</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
            Delivering technical excellence across all phases of helicopter lifecycle management with a focus on precision and safety.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={service.title}
              whileHover={{ y: -10 }}
              className="group bg-[#111] border border-white/5 overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
              </div>
              <div className="p-8">
                <div className="text-[#FF6B35] mb-6">{service.icon}</div>
                <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  {service.description}
                </p>
                <button className="text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-[#FF6B35] transition-colors">
                  Learn More <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Capabilities = () => {
  return (
    <section id="capabilities" className="py-24 technical-grid relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Facilities</span>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">World-Class <br />Hangar Capabilities</h2>
            <p className="text-gray-400 mb-10 leading-relaxed font-light">
              Our state-of-the-art facility in Malaysia is equipped with the latest diagnostic tools and heavy maintenance equipment to handle multiple aircraft simultaneously.
            </p>
            
            <div className="space-y-6">
              {[
                { title: "Advanced Diagnostics", desc: "Digital inspection systems and non-destructive testing (NDT)." },
                { title: "Component Shop", desc: "Dedicated clean-room environments for precision component repair." },
                { title: "Avionics Lab", desc: "Specialized suite for glass cockpit upgrades and system integration." },
                { title: "Paint & Interior", desc: "Climate-controlled spray booths and upholstery workshops." }
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="mt-1"><ShieldCheck className="text-[#FF6B35] w-5 h-5" /></div>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-widest mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-[#0A1128] border border-white/10 p-4 relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000" 
                alt="Technical Facility" 
                className="w-full h-full object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-8 right-8 bg-[#FF6B35] p-6 text-white">
                <div className="text-4xl font-bold font-mono">50k</div>
                <div className="text-[10px] uppercase tracking-widest font-bold">Sq Ft Facility</div>
              </div>
            </div>
            {/* Decorative technical lines */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-[#FF6B35]" />
            <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-[#FF6B35]" />
          </div>
        </div>
      </div>
    </section>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white text-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Compliance</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Certified Excellence</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70">
          {/* Placeholder for actual cert logos */}
          <div className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <Award className="w-16 h-16 text-[#0A1128]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">CAAM Approved</span>
          </div>
          <div className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <Award className="w-16 h-16 text-[#0A1128]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">EASA Part 145</span>
          </div>
          <div className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <Award className="w-16 h-16 text-[#0A1128]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">ISO 9001:2015</span>
          </div>
          <div className="flex flex-col items-center gap-4 grayscale hover:grayscale-0 transition-all cursor-pointer">
            <Award className="w-16 h-16 text-[#0A1128]" />
            <span className="text-[10px] font-bold uppercase tracking-widest">OEM Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter mb-8">Request a Technical Consultation</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              Our engineering team is ready to discuss your maintenance requirements. Get a detailed quote for your fleet or individual aircraft.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B35]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Direct Line</div>
                  <div className="font-bold">+60 3-XXXX XXXX</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B35]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Email Support</div>
                  <div className="font-bold">ops@nizamaviation.com.my</div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-[#FF6B35]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Headquarters</div>
                  <div className="font-bold">Subang Airport, Selangor, Malaysia</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#111] p-8 md:p-12 border border-white/10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                  <input type="text" className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#FF6B35] outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Company</label>
                  <input type="text" className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#FF6B35] outline-none transition-colors" placeholder="Aviation Corp" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                  <input type="email" className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#FF6B35] outline-none transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Aircraft Type</label>
                  <select className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#FF6B35] outline-none transition-colors appearance-none">
                    <option>Select Model</option>
                    <option>Airbus H125/H130</option>
                    <option>Bell 206/407</option>
                    <option>Leonardo AW139</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-gray-500">Service Required</label>
                <textarea rows={4} className="w-full bg-black border border-white/10 px-4 py-3 focus:border-[#FF6B35] outline-none transition-colors" placeholder="Describe your maintenance or refurbishment needs..."></textarea>
              </div>
              <button className="w-full bg-[#FF6B35] hover:bg-orange-600 py-4 font-bold uppercase tracking-widest text-sm transition-all">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6B35] flex items-center justify-center rounded-sm rotate-45">
              <Settings className="text-white -rotate-45 w-5 h-5" />
            </div>
            <span className="text-lg font-bold tracking-tighter uppercase">Nizam <span className="text-[#FF6B35]">Aviation</span></span>
          </div>
          
          <div className="flex gap-8 text-[10px] uppercase tracking-widest font-bold text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Compliance</a>
          </div>
          
          <div className="text-[10px] uppercase tracking-widest text-gray-600">
            © 2026 Nizam Aviation Sdn Bhd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Full Fleet Refurbishment",
      client: "Regional Emergency Services",
      result: "20% increase in operational availability",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Avionics Suite Upgrade",
      client: "Private Charter Operator",
      result: "Next-gen navigation & safety integration",
      image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="projects" className="py-24 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-[#FF6B35] text-xs font-bold uppercase tracking-[0.3em] mb-4 block">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter">Recent Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="relative h-80 overflow-hidden mb-6">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6">
                  <div className="text-[10px] uppercase tracking-widest text-aviation-orange font-bold mb-2">{project.client}</div>
                  <h3 className="text-2xl font-bold uppercase tracking-tight">{project.title}</h3>
                </div>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <p className="text-sm text-gray-400 font-light italic">{project.result}</p>
                <ArrowRight className="w-5 h-5 text-aviation-orange opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Capabilities />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
