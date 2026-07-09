import { Link } from 'wouter';
import { ArrowRight, Star, CheckCircle, Clock, ShieldCheck, MapPin } from 'lucide-react';
import { CarCard } from '@/components/CarCard';
import { cars } from '@/data/cars';

export function Home() {
  const featuredCars = cars.slice(0, 6);

  const testimonials = [
    {
      name: 'James L.',
      avatar: 'JL',
      rating: 5,
      quote: 'The buying experience was as flawless as the 911 I purchased. White-glove service from start to finish.'
    },
    {
      name: 'Sarah M.',
      avatar: 'SM',
      rating: 5,
      quote: 'Apex Motors made acquiring my dream Huracán incredibly simple. The exclusive showroom is an experience itself.'
    },
    {
      name: 'Michael T.',
      avatar: 'MT',
      rating: 5,
      quote: 'Their attention to detail and knowledge of performance vehicles is unmatched in Los Angeles.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-banner.jpg" 
            alt="Apex Motors Showroom" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center md:text-left mt-16">
          <div className="max-w-3xl">
            <h2 className="text-primary font-semibold tracking-[0.3em] uppercase mb-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              The World's Most Exclusive Collection
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-150">
              Welcome to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Apex Motors</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-12 max-w-2xl mx-auto md:mx-0 animate-in fade-in slide-in-from-bottom-12 duration-700 delay-300">
              Discover unparalleled engineering and craftsmanship. Curated for the discerning automotive enthusiast.
            </p>
            <div className="animate-in fade-in slide-in-from-bottom-16 duration-700 delay-500">
              <Link
                href="/cars"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-red-700 text-white px-8 py-4 rounded font-bold uppercase tracking-widest hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] hover:-translate-y-1 transition-all duration-300 group"
              >
                Explore Cars
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-24 bg-background relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div>
              <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Our Fleet</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white">Featured Cars</h3>
            </div>
            <Link 
              href="/cars" 
              className="mt-6 md:mt-0 text-gray-400 hover:text-white border-b border-primary pb-1 uppercase tracking-wider text-sm transition-colors flex items-center gap-2 group"
            >
              View All Inventory
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-black relative border-y border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-black to-black pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">The Apex Experience</h2>
            <h3 className="text-4xl font-bold text-white">Why Choose Us</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Collection', desc: 'Hand-picked luxury and performance vehicles in pristine condition.' },
              { icon: CheckCircle, title: 'Best Prices', desc: 'Transparent pricing with no hidden fees or markups.' },
              { icon: Clock, title: 'Easy Test Drive Booking', desc: 'Schedule your private viewing and drive in minutes.' },
              { icon: ShieldCheck, title: 'Trusted Dealers', desc: 'Over a decade of excellence serving the automotive elite.' }
            ].map((feature, i) => (
              <div key={i} className="glassmorphism p-8 rounded-xl text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-primary text-sm font-bold tracking-widest uppercase mb-2">Client Stories</h2>
            <h3 className="text-4xl font-bold text-white">Testimonials</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, i) => (
              <div key={i} className="glassmorphism p-8 rounded-xl relative">
                <div className="flex text-primary mb-6">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-8 italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold border border-white/10">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{testimonial.name}</h4>
                    <span className="text-gray-500 text-sm">Verified Buyer</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
