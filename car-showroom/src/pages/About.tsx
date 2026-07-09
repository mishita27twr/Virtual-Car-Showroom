import { useEffect, useRef, useState } from 'react';
import { Target, Eye, Gem, Award, Banknote, Map, Wrench } from 'lucide-react';
import { cn } from '@/lib/utils';

function AnimatedCounter({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, isVisible]);

  return <span ref={countRef}>{count}{suffix}</span>;
}

export function About() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      {/* Intro */}
      <section className="container mx-auto px-6 mb-24 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Legacy</h1>
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8">
          Founded in 2010 and based in the heart of Los Angeles, Apex Motors was born from a singular passion: 
          connecting driving enthusiasts with the pinnacle of automotive engineering. We don't just sell cars; 
          we curate mechanical masterpieces.
        </p>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glassmorphism p-10 rounded-xl border-t-2 border-primary group">
            <Target className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To provide an unparalleled acquisition experience for the world's most sought-after vehicles, ensuring absolute transparency and white-glove service.
            </p>
          </div>
          <div className="glassmorphism p-10 rounded-xl border-t-2 border-white/20 group">
            <Eye className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the definitive global destination for collectors and enthusiasts seeking automotive perfection without compromise.
            </p>
          </div>
          <div className="glassmorphism p-10 rounded-xl border-t-2 border-white/20 group">
            <Gem className="w-12 h-12 text-white mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
            <p className="text-gray-400 leading-relaxed">
              Integrity, exclusivity, passion, and precision. We hold ourselves to the same exacting standards as the manufacturers of the vehicles we represent.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary/10 border-y border-primary/20 mb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <div className="text-primary font-bold tracking-widest uppercase text-sm">Cars Sold</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                <AnimatedCounter end={15} suffix="+" />
              </div>
              <div className="text-primary font-bold tracking-widest uppercase text-sm">Years Experience</div>
            </div>
            <div>
              <div className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tighter">
                <AnimatedCounter end={98} suffix="%" />
              </div>
              <div className="text-primary font-bold tracking-widest uppercase text-sm">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Beyond the showroom floor, we offer a comprehensive suite of services tailored to the luxury automotive lifestyle.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glassmorphism p-8 rounded-xl flex items-start gap-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shrink-0">
              <Award className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Certified Pre-Owned</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Every vehicle undergoes a rigorous 150-point inspection by factory-trained technicians to guarantee impeccable mechanical and cosmetic condition.</p>
            </div>
          </div>
          <div className="glassmorphism p-8 rounded-xl flex items-start gap-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shrink-0">
              <Banknote className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Bespoke Financing</h4>
              <p className="text-gray-400 text-sm leading-relaxed">We partner with premier financial institutions to offer tailored lending and leasing solutions designed for high-net-worth acquisitions.</p>
            </div>
          </div>
          <div className="glassmorphism p-8 rounded-xl flex items-start gap-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shrink-0">
              <Map className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Concierge Delivery</h4>
              <p className="text-gray-400 text-sm leading-relaxed">Global enclosed transport options. We deliver your vehicle directly to your driveway, track, or storage facility in flawless condition.</p>
            </div>
          </div>
          <div className="glassmorphism p-8 rounded-xl flex items-start gap-6">
            <div className="p-4 bg-white/5 rounded-lg border border-white/10 shrink-0">
              <Wrench className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">White-Glove Service</h4>
              <p className="text-gray-400 text-sm leading-relaxed">A dedicated relationship manager available 24/7 to handle sourcing, maintenance scheduling, and exclusive event invitations.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
